import React, { Component } from 'react';

class EditedEducation extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {institution, typeOfStudies, fieldOfStudies, dateFrom, dateTo} = this.props.form;
        return (
            <div id='edited-education'>
                <p>Institution: {institution}</p>
                <p>Diploma: {typeOfStudies}</p>
                <p>Field of studies: {fieldOfStudies}</p>
                <p>From: {dateFrom}</p>
                <p>Until: {dateTo}</p>
                <button onClick = {this.props.handleClick}>Edit</button>
            </div>
        );
    }
    
};

export default EditedEducation;