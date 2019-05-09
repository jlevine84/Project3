import React, {useState} from 'react';


function viewByDateForm(props){
    
    const [day, setDay] = useState("01")
    const [month, setMonth] = useState("January")
    const [year, setYear] = useState("2019")
    console.log(day,month,year)
    return(
    
         <form onSubmit = {(event)=>{
             event.preventDefault()
             props.viewByDate(day, month, year)}}>
             <button type="submit">See a specific day's data!</button>
            <div className="form-group smallForm">
                <label for="monthForm">Example select</label>
                    <select class="form-control" id="monthForm" value={month} onChange={(event)=>setMonth(event.target.value)} >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </select>
             </div>
             <div className="form-group smallForm">
                <label for="dayForm">Example select</label>
                    <select class="form-control" id="dayForm" value={day} onChange={(event)=>setDay(event.target.value)}>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    </select>
             </div>
             <div className="form-group smallForm">
                <label for="yearForm">Example select</label>
                    <select class="form-control" id="yearForm" value={year} onChange={(event)=>setYear(event.target.value)}>
                    <option>2019</option>
                    <option>2020</option>
                    </select>
             </div>
                 
         </form>
    
    )
}


export default viewByDateForm;