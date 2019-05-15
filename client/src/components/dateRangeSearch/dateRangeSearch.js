import React from 'react';
import './dateRangeSearch.css';
import moment from 'moment'

class dateRangeSearch extends React.Component{

    state = {
        dateRangeStart: "", 
        dateRangeEnd: ""
    }
    
    updateValue = async event => {
        let name = event.target.name
        let value = event.target.value
        await this.setState({ [name]: value} )
    }

    render(){
        return(
            <div>
                <br></br>
                <h6>Select a date to see that day's entry or select range of dates.</h6>
                <div className="input-range">
                    <form>
                        <div className="form-group dropdown">
                            <br></br>
                                <label for="startMonth">Month</label>
                                    <select className="form-control drop-down1" id="startMonth" onChange={this.props.updateValue} name={`startMonth`} defaultValue={`January`}>
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
                        <div className="form-group dropdown2">
                            <br></br>
                                <label for="startDay">Day</label>
                                    <select className="form-control drop-down2" id="startDay" onChange={this.props.updateValue} name= {`startDay`} defaultValue={`01`}>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                        </div>
                        <div className="form-group dropdown3">
                            <br></br>
                                <label for="startYear">Year</label>
                                    <select className="form-control drop-down2" id="startYear" onChange={this.props.updateValue} name= {`startYear`} defaultValue={`2019`}>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
     
                                    </select>
                        
                        </div>
        {/*END DATE INPUT*/}
        <div className="dropdown">
        <br></br>
        <br></br>
        <br/>
        <h6>TO:</h6>
        </div>
        <div className="form-group dropdown">
                            <br></br>
                                <label for="endMonth">Month</label>
                                    <select className="form-control drop-down1" id="endMonth" onChange={this.props.updateValue} name= {`endMonth`} defaultValue={`January`}>
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
                        <div className="form-group dropdown2">
                            <br></br>
                                <label for="endDay">Day</label>
                                    <select className="form-control drop-down2" id="endDay" onChange={this.props.updateValue} name= {`endDay`} defaultValue={`01`}>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                        </div>
                        <div className="form-group dropdown3">
                            <br></br>
                                <label for="endYear">Year</label>
                                    <select className="form-control drop-down2" id="endYear" onChange={this.props.updateValue} name={`endYear`} defaultValue={`2019`}>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
     
                                    </select>
                        
                        </div>
                        <button type="button" onClick={this.props.grabDateRange} className="btn btn-secondary btn-range">Search</button>
                    </form>
                
                </div>    
            
              
        </div>
        )
    }
}

export default dateRangeSearch;