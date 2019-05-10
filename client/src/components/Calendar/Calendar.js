import React from "react";
import moment from "moment";
import "./calendar.css"

export default class Calendar extends React.Component {
  state = {
    dateContext: moment(), // provides condition to set elements in calendar (day, month, year, etc.)
    today: moment(), // sets state to current day by default
    showMonthPopup: false, // Popup for month set to not display by default
    showYearPopup: false, // Popup for year set to not display by default
    selectedDay: null
  }
  // Default values for constructor properties
  constructor(props) {
    super(props);
    this.width = props.width || "350px"; // if width being passed from parent use that width or default of 350px
    this.style = props.style || {}; // if style being passed from parent use that style or initialize empty object
  }

  weekdays = moment.weekdays(); // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  months = moment.months(); // ["January", "February", etc.]

  // Moment.js functions for rendering year, month, date, etc.
  year =  () =>  {
    return this.state.dateContext.format("Y");
  }

  month =  () =>  {
    return this.state.dateContext.format("MMMM");
  }

  daysInMonth =  () =>  {
    return this.state.dateContext.daysInMonth();
  }

  currentDate =  () =>  {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  }

  currentDay =  () =>  {
    return this.state.dateContext.format("D");
  }
  // passes dateContext into moment function to get the first day of each month to later be rendered
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf("month").format("d"); // Day of week 0..1..5...6
    return firstDay;
  }

  // Allows user to select month to display from popup
  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dataContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  }
  // toggles through the following months after current month *needs work
  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }
  // toggles to previous months from the current month *needs work
  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onNextMonth();
  }

  // Function for changing the calendar to month selected in popup
  onSelectChange = (e, data) =>  {
    // this.setDay(data);
    this.setMonth(data);
    // this.props.onDayChange && this.props.onDayChange();
    this.props.onMonthChange && this.props.onMonthChange();
  }
  // Pop-up menu for months with calendar click on the current month
  SelectList = (props) => {
    let popup = props.data.map((data) =>  {
      return (
        <div key={data}>
          <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
            {data}
          </a>
        </div>
      );
    });
    return (
      <div className="month-popup">
        {popup}
      </div>
    )
  };
  // Displays month pop-up
  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    })
  }
  // Displays months in pop-up
  MonthNav = () =>  {
    return (
      <span className="label-month" 
        onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
        {this.month()}
        {this.state.showMonthPopup &&
        <this.SelectList data={this.months} />
        }
      </span>
    )
  }
  // Displays year on calendar
  YearNav = () => {
    return (
        this.state.showYearNav ?
        <input
            defaultValue = {this.year()}
            className="editor-year"
            ref={(yearInput) => { this.yearInput = yearInput}}
            onKeyUp= {(e) => this.onKeyUpYear(e)}
            onChange = {(e) => this.onYearChange(e)}
            type="number"
            placeholder="year"/>
        :
        <span
            className="label-year"
            onDoubleClick={(e)=> { this.showYearEditor()}}>
            {this.year()}
        </span>
    );
}


  onDayClick = (e, day) => {
    this.setState({
        selectedDay: day
    }, () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
    });

    this.props.onDayClick && this.props.onDayClick(e, day);
}

  render() {
  // Map the weekdays i.e. Sun, Mon, Tue etc. as <td>
    let weekdays = this.weekdaysShort.map((day) =>  {
      return  (
        <td key={day} className="week-day">{day}</td>
      )
    }); 
    // Displays empty slots for previous/next month on current month 
    let blanks = [];
    for (let i=0; i < this.firstDayOfMonth(); i++)  {
      blanks.push(<td className="emptySlot">
      {""}
      </td>
      );
    }
    console.log("blanks: ", blanks);
    
    // stores days in empty array after looping through for loop
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d == this.currentDay() ? "day current-day": "day");
      let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
      daysInMonth.push(
        <td key={d} className={className + selectedClass} >
          <span onClick={(e)=> this.onDayClick(e,d)}>{d}</span>
        </td>
      );
    }

    console.log("days: ", daysInMonth);

    // The following is where the days are stored from trElems
    // blanks are the days from the previous and next months that we don't want displayed when current month is selected 
    // daysInMonth are the days in current month to display
    var totalSlots = [...blanks, ...daysInMonth];
    // Where rows for each week in month will be pushed for display
    let rows = [];
    // Where each date for a given week in month will be pushed for display
    let cells = [];
    // Loops through slots
    // Pushes days in cells array within row for each week
    // Returns days in individual cells to new array through slice method
    totalSlots.forEach((row, i) =>  {
      if ((i % 7 ) !== 0) {
        cells.push(row);
      } else  {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1)  {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    // trElems is where the days of the current month are displayed on the calendar
    //     
    let trElems = rows.map((d, i) =>  {
      return (
        <tr key={i*100}>
          {d}
        </tr>
      )
    });
    // Calendar output
    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav />
                {" "}
                <this.YearNav />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </tbody>
        </table>
      </div>
    );
  }  
}