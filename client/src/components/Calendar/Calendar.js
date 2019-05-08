import React from "react";
import moment from "moment";
import "./calendar.css"

class Calendar extends React.Component {
  state = {
    dateObject: moment(),
    month: "",
    year: 0,
    selectedDay: null
  }

  // state = {
  //   dateContext: moment(),
  //   today: moment(),
  //   showMonthPopup: false, 
  //   showYearPopup: false,
  //   selectedDay: null
  // }

  // Find the first day of the month
  firstDayofMonth = () => {
    let dateObject = this.state.dateObject
    let firstDay = moment(dateObject).startOf('month').format('d')
    return firstDay
  }

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  
  // Days of the Week
  weekDayShort = moment.weekdaysShort()

  // Render the days of the week
  weekDayShortName = this.weekDayShort.map(day => {
    return (
      <th key={day} className='day-of-week'>
        {day}
      </th>
    )
  })

  currentDay = () => {
    return this.state.dateObject.format("DD");
  }

  // Get the months
  months = moment.months();

  // Displays months in pop-up
  // MonthNav = () =>  {
  //   return (
  //     <span className="label-month" 
  //       onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
  //       {this.month()}
  //       {this.state.showMonthPopup &&
  //       <this.SelectList data={this.months} />
  //       }
  //     </span>
  //   )
  // }

  month =  () =>  {
    return this.state.dateObject.format("MMMM");
  }

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject
    });
  }

  // Function for rendering Year.
  year =  () =>  {
    return this.state.dateObject.format("YYYY");
  }

  consoleLog = event => {
    console.log(event.target)
  }

  render() {

    // Blank Days to display
    let blanks = []
    for (let i = 0; i < this.firstDayofMonth(); i++ ) {
      blanks.push( <td className="empty calendar-day">{""}</td> )
    }

    // Calendar Days to display
    let daysInMonth = []
    for (let dayNum = 1; dayNum <= this.daysInMonth(); dayNum++) {
      let currentDay = dayNum === this.currentDay() ? "today" : ""
      daysInMonth.push(
        <td key={dayNum} className={`calendar-day ${currentDay}`}>{dayNum}</td>
      )
    }

    // Total slots in a month
    const totalSlots = [...blanks, ...daysInMonth]
    let rows = []
    let cells = []

    // Create calendar structure
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // If index not equal 7 that means to keep populating the week
      } else {
        rows.push(cells); // When reach next week we contain all td in last week to rows 
        cells = []; // Empty container 
        cells.push(row); // In current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // When end loop we add remaining dates
        rows.push(cells);
      }
    });
    
    let populateRows = rows.map((day, i) => {
      return <tr key={i} onClick={this.consoleLog}>{day}</tr>
    })

    return (
      <div>
        <h2 className="calendar-container">Calendar</h2>
        <div className="date-and-year">
          <div className="current-month">
            {this.month()}
          </div>
          <div className="current-year">
            {this.year()}
          </div>
        </div>
        <table className="calendar">
          <thead>
            {this.weekDayShortName}
          </thead>
          <tbody>
            {populateRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar

  // {/* <thead>
  //   <tr className="calendar-header">
  //     <td colSpan="5">
  //       <this.MonthNav onClick={this.check}/>
  //       {" "}
  //       <this.YearNav onClick={this.check}/>
  //     </td>
  //   </tr>
  // </thead>
  // <tbody>
  //   <tr>
  //     {weekdays}
  //   </tr>
  //   {trElems}
  // </tbody> */}
  
  // onSelectChange = (e, data) =>  {
  //   console.log(data)
  //   this.setMonth(data);
  //   this.props.onMonthChange && this.props.onMonthChange();
  // }

  // Pop-up menu for months with calendar click
  // SelectList = (props) => {
  //   let popup = props.data.map((data) =>  {
  //     return (
  //       <div key={data}>
  //         <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
  //           {data}
  //         </a>
  //       </div>
  //     );
  //   });
  //   return (
  //     <div className="month-popup">
  //       {popup}
  //     </div>
  //   )
  // };

  // Displays month pop-up
  // onChangeMonth = (e, month) => {
  //   this.setState({
  //     showMonthPopup: !this.state.showMonthPopup
  //   })
  // }

