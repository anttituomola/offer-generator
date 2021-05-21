import React, { Component } from 'react'

const menuElements = [
    {
        name: "ingredient 1",
        description: "delicious ingredient",
        price: 4,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now(),
        id: 1,
        checked: false
    },
    {
        name: "ingredient 2",
        description: "pretty ok ingredient",
        price: 6,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now(),
        id: 2,
        checked: false
    },
    {
        name: "ingredient 3",
        description: "bad ingredient",
        price: 0.5,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now(),
        id: 3,
        checked: false
    }
];

class Elements extends Component {
    state = {
        elements: menuElements
    };

    handleCheckboxState = this.handleCheckboxState.bind(this);
  
    handleCheckboxState(e) {
        this.setState(prevState => {
            const updatedList = prevState.elements.map(menuElement => {
                const idOfTargetElement = parseInt(e.target.id);
                if (idOfTargetElement === menuElement.id) {
                    return {
                        ...menuElement,
                        checked: !menuElement.checked
                    }
                }
                return menuElement
            });

            return {
                elements: updatedList
            };
        })
    }

    render() {
        return <div>
            <table className="table">
            {this.state.elements.map((menuElement) => (
                    <tbody>
                        <tr>
                            <td><input id={menuElement.id} checked={menuElement.checked} type="checkbox" name={menuElement.name} onChange={this.handleCheckboxState} className="checkbox"/></td>
                            <td>{menuElement.name}</td>
                            <td>{menuElement.price} €</td>
                        </tr>
                    </tbody>
            ))}
            </table>
        </div>
    }
}

export default Elements;