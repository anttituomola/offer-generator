import React, {Component} from 'react'

class PrintButton extends Component {

    clickHandler() {
        console.log("Functionality not yet built!")
    }

    render() {
        return <button onClick={this.clickHandler}>Print me!</button>
    }
}

export default PrintButton;