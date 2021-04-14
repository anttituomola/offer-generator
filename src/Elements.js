import React, {Component} from 'react'

const menuElements = [
        {
        name: "ingredient 1",
        description: "delicious ingredient",
        price: 4,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now()
    },
    {
        name: "ingredient 2",
        description: "pretty ok ingredient",
        price: 6,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now()    
    },
    {
        name: "ingredient 3",
        description: "bad ingredient",
        price: 0.5,
        availabilityStart: Date.now(),
        availabilityEnd: Date.now()    
    }   
];

class Elements extends Component {
    render() {
        return <div>
            {menuElements.map((menuElement) => (
                <table className="table">
                <tr>
                    <td>{menuElement.name}</td>                
                    <td>{menuElement.price} €</td>
                </tr>
                </table>
                ))}
        </div>
    }
}

export default Elements;