import React, { Component } from 'react';

class Overview extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {firstName, lastName, email, phoneNo} = this.props.form;      

        return (
            <div id='edited-info'>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Phone no.: {phoneNo}</p>
                <button onClick= {this.props.onclick}>Edit</button>
            </div>
        );
    }
}

export default Overview;