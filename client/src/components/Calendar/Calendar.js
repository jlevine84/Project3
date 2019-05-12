import React from "react";
import moment from "moment";
import "./calendar.css";

class Calendar extends React.Component {
  // Get the abbreviated days of the week
  weekdayshort = moment.weekdaysShort();

  state = {
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: moment().format("DD"),
    selectedMonth: moment().format("MMMM"),
    selectedYear: moment().format("YYYY")
  };

  // Day Functions
  // Get the current Day
  currentDay = () => {
    return this.state.dateObject.format("DD");
  };

  // Selected Day function
  onDayClick = async (event) => {
    let newD = moment(event.target.getAttribute('value'), 'D').format("DD")
    await this.setState({ selectedDay: newD })
    let grabMonth = this.state.selectedMonth
    let grabDay = this.state.selectedDay
    let grabYear = this.state.selectedYear
    this.props.grabCalendarDate(grabMonth, grabDay, grabYear)
  }

  // Month Functions
  // Get the Days in the Month
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  // Get the current Month
  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  // Find the first Day of each Month
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("DD"); // Day of week 0...1..5...6
    return firstDay;
  };

  // Show the Month selector
  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
     showDateTable: !this.state.showDateTable
    });
  };

  // Set the selected Month
  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      selectedMonth: dateObject.format("MMMM"),
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  // Render the Month List
  MonthList = props => {
    // Map the Months
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setMonth(data);
          }}
        >
        {data}
        </td>
      );
    });

    // Set up Month table elements
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    // Push the data into the table
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    // Populate Month Table
    return (
      <table className="calendar-month-list">
        <thead>
          <tr>
            <th className="col-12 month-select">Select a Month</th>
          </tr>
        </thead>
        <tbody className="month-list">{monthlist}</tbody>
      </table>
    );
  };  // End of the Month table rendering

  // Year functions
  // Get the current Year
  year = () => {
    return this.state.dateObject.format("YYYY");
  };

  // Function for navigating the table backwards
  onPrev = () => {
    let curr = "month";
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
      selectedMonth: this.state.dateObject.format("MMMM")
    });
  };

  // Function for navigating the table backwards
  onNext = () => {
    let curr = "month";
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
      selectedMonth: this.state.dateObject.format("MMMM")
    });
  };

  // Update the Dates of the table to render the correct days
  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  // Main render method
  render() {

    // Grab the shortened Days of the Week and map them into the table
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th className="col" key={day}>{day}</th>;
    });

    // Set blank spaces for Days not in the table
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }

    // Set the amount of days in the month and add function to select properties
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = (d == this.currentDay() ? "day today": "day");
      let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
      daysInMonth.push(
        <td 
          key={d}
          value={d}
          onClick={event => this.onDayClick(event)}
          className={currentDay + selectedClass}
        >
        {d}
        </td>
      );
    }

    // Set up data values for rendering the Days
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        // let insertRow = cells.slice();
        rows.push(cells);
      }
    });

    // Map the days in the month to the table
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <div className="calendar-container">
        <div className="calendar-nav">
          <button
            onClick={e => {
              this.onPrev();
            }}
            class="calendarbtn btn-prev"
          >Previous</button>
          {!this.state.showMonthTable ?  (
            <div
              onClick={e => {
                this.showMonth();
              }}
              className="month-label"
            >
              {this.month()}
            </div>
          ) : (<div className="month-label">{this.month()}</div>)}
          <div className="year-label">
            {this.year()}
          </div>
           <button
          onClick={e => {
            this.onNext();
          }}
          className="calendarbtn btn-prev"
          >Next</button>
        </div>
       
        <div className="calendar-month-list">
          {this.state.showMonthTable && (
            <this.MonthList data={moment.months()} />
          )}
        </div>

        {this.state.showDateTable && (
          <div className="calendar-day-table">
            <table className="calendar-day">
              <thead>
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody>{daysinmonth}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Calendar
