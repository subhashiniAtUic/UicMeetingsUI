import React, {Component} from 'react';


class Customers extends Component{
    constructor(){
        super();
        this.state = {
            customers :[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/getposts')
            .then(res=>res.json())
            .then(customers=> this.setState({customers},()=>console.log('Fetched',customers)));
    }
    render(){
        return(
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer=>
                        <li key={customer.id}>{customer.body}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Customers;