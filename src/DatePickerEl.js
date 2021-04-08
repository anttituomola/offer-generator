import React, {Component, useState} from 'react'
import DatePicker from 'react-datepicker'


class DatePickerEl extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        function testFunction() {
            const [startDate, setStartDate] = this.useState(new Date());
            return (
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            )
        }
        testFunction();
    }

    
    render() { 
        return ( <div>
            <DatePickerEl />
            </div> );
    }
}
 
export default DatePickerEl;