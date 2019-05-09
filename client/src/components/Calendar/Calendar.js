import React from "react";
import moment from "moment";
import "./calendar.css";
export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  state = {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: null
  };
  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };
  year = () => {
    return this.state.dateObject.format("Y");
  };
  currentDay = () => {
    return this.state.dateObject.format("D");
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
     showDateTable: !this.state.showDateTable
    });
  };
  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };
  MonthList = props => {
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
          <span>{data}</span>
        </td>
      );
    });
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
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };
  showYearTable = e => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showDateTable: !this.state.showDateTable
    });
  };

  onPrev = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr)
    });
  };
  onNext = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr)
    });
  };
  setYear = year => {
    // alert(year)
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable
    });
  };
  onYearChange = e => {
    this.setYear(e.target.value);
  };
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
  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
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
    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Yeah</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );
  };
  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
      }
    );
  };
  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      daysInMonth.push(
        <td key={d} className={`calendar-day ${currentDay}`}>
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }
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

    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <div className="tail-datetime-calendar">
        <div className="calendar-navi">
          <span
            onClick={e => {
              this.onPrev();
            }}
            class="calendar-button button-prev"
          />
          {!this.state.showMonthTable && (
            <span
              onClick={e => {
                this.showMonth();
              }}
              class="calendar-label"
            >
              {this.month()}
            </span>
          )}
          <span className="calendar-label" onClick={e => this.showYearTable()}>
            {this.year()}
          </span>
           <span
          onClick={e => {
            this.onNext();
          }}
          className="calendar-button button-next"
        />
        </div>
       
        <div className="calendar-date">
          {this.state.showYearTable && <this.YearTable props={this.year()} />}
          {this.state.showMonthTable && (
            <this.MonthList data={moment.months()} />
          )}
        </div>

        {this.state.showDateTable && (
          <div className="calendar-date">
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

// import React from "react";
// import moment from "moment";
// import "./calendar.css"
// // import MonthList from './MonthList'

// class Calendar extends React.Component {
//   state = {
//     dateObject: moment(),
//     currentMonth: moment().format('MMMM'),
//     currentYear: moment().format('YYYY'),
//     selectedDay: null,
//     showMonthPopup: false,
//     showYearPopup: false,
//     showDateTable: true,
//     allmonths: moment.months()
//   }

//   // Find the first day of the month
//   firstDayofMonth = () => {
//     let dateObject = this.state.dateObject
//     let firstDay = moment(dateObject).startOf('month').format('DD')
//     return firstDay
//   }

//   daysInMonth = () => {
//     return this.state.dateObject.daysInMonth();
//   };

//   currentDay = () => {
//     return this.state.dateObject.format("DD");
//   }


//   // Displays months in pop-up
//   // MonthNav = () =>  {
//   //   return (
//   //     <span className="label-month" 
//   //       onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
//   //       {this.month()}
//   //       {this.state.showMonthPopup &&
//   //       <this.SelectList data={this.months} />
//   //       }
//   //     </span>
//   //   )
//   // }

//   month =  () =>  {
//     return this.state.dateObject.format("MMMM");
//   }

//   // Displays month pop-up
//   onChangeMonth = (e, month) => {
//     this.setState({
//       showMonthPopup: !this.state.showMonthPopup
//     })
//   }

    
//   setMonth = (event, month) => {
//     console.log(month)
//     let monthNo = this.state.allmonths.indexOf(month);// get month number 
//     let dateObject = Object.assign({}, this.state.dateObject);
//     dateObject = moment(dateObject).set("month", monthNo); // change month value
//     this.setState({
//       showDateTable: true,
//       dateObject: dateObject // add to state
//     });
//   };

//   // Function for rendering Year.
//   year =  () =>  {
//     return this.state.dateObject.format("YYYY");
//   }

//   // Grab values
//   consoleLog = event => {
//     let selectedDay = event.target.getAttribute('value')
//     console.log(selectedDay)
//     this.setState({selectedDay: selectedDay})
//   }

//   render() {

//       // Render the days of the week
//     let weekDayShortName = moment.weekdaysShort().map(day => {
//       return (
//         <th key={day} className='day-of-week'>
//           {day}
//         </th>
//       )
//     })

//     // Blank Days to display
//     let blanks = []
//     for (let i = 0; i < this.firstDayofMonth(); i++ ) {
//       blanks.push( <td key={i} className="empty calendar-day">{""}</td> )
//     }

//     // Calendar Days to display
//     let daysInMonth = []
//     for (let dayNum = 1; dayNum <= this.daysInMonth(); dayNum++) {
//       let currentDay = dayNum == this.currentDay() ? "today" : ""
//       daysInMonth.push(
//         <td key={dayNum} 
//         value={dayNum}
//         onClick={this.consoleLog}
//         className={`calendar-day ${currentDay}`}>{dayNum}</td>
//       )
//     }

//     // Total slots in a month
//     const totalSlots = [...blanks, ...daysInMonth]
//     let rows = []
//     let cells = []

//     // Create calendar structure
//     totalSlots.forEach((row, i) => {
//       if (i % 7 !== 0) {
//         cells.push(row); // If index not equal 7 that means to keep populating the week
//       } else {
//         rows.push(cells); // When reach next week we contain all td in last week to rows 
//         cells = []; // Empty container 
//         cells.push(row); // In current loop we still push current row to new container
//       }
//       if (i === totalSlots.length - 1) { // When end loop we add remaining dates
//         rows.push(cells);
//       }
//     });
    
//     let dayinmonth = rows.map((day, i) => {
//       return <tr key={i}>{day}</tr>
//     })

//     return (
//       <div>
//         <h2 className="calendar-container">Calendar</h2>
//         <div className="months">
//           <table>
//             <MonthList 
//               data={moment.months()}
//               dateObject={this.state.dateObject}
//               setMonth={this.setMonth}
//               />
//           </table>
//         </div>
//         <div className="date-and-year">
//           <div className="current-month">
//             {this.state.selectedMonth}
//           </div>
//           <div className="current-year">
//             {this.year()}
//           </div>
//         </div>
//         <table className="calendar">
//           {this.state.showDateTable && (
//             <div className="calendar-date">
//               <table className="calendar-day">
//                 <thead>
//                   <tr>{weekDayShortName}</tr>
//                 </thead>
//                 <tbody>{dayinmonth}</tbody>
//               </table>
//             </div>
//           )}
//         </table>
//         <div>{this.state.currentMonth} {this.state.selectedDay}, {this.state.currentYear}</div>
//         <p></p>
//       </div>
//     );
//   }
// }

// function MonthList (props) {
//   // Start of creation of month list for user to choose which month to display

//   let months = []
//   props.data.map(data => {
//     months.push(
//       <td>
//         <span onClick={e => props.setMonth(e, data)}>{data}</span>
//       </td>
//     );
//   });

//   let rows = []
//   let cells = []
//   months.forEach((row, i) => { 
//     if (i % 3 !== 0 || i == 0) { // except zero index 
//         cells.push(row); 
//     } else { 
//         rows.push(cells); 
//         cells = [];
//         cells.push(row); 
//     }
//   });

//   rows.push(cells); // add last row

//   let monthlist = rows.map((data, i) => {
//     return <tr key={i}>{data}</tr>;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Select a Month</th>
//         </tr>
//       </thead>
//       <tbody>{monthlist}</tbody>
//     </table>
//   )
// }

// export default Calendar



