import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DatePickerEl extends Component {
    constructor() {
        super()
        this.handleDayClick = this.handleDayClick.bind(this)
        this.state = {
            selectedDay: undefined
        };
    }

    handleDayClick(day, { selected }) {
        if (selected) {
            this.setState({ selectedDay: undefined })
            return;
        }
        this.setState({ selectedDay: day })
    }

    render() {
        return (<div>
            <div className="title is-3"><DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} />
                {this.state.selectedDay ? (<p>You selected {this.state.selectedDay.toLocaleDateString()}</p>) : (<p>Please select a day</p>)}
            </div>
        </div>);
    }
}



export default DatePickerEl;