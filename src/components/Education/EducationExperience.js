import React, { Component } from 'react';
import EditedEducation from './EditedEducation';

class EducationExperience extends Component {
    constructor() {
        super();
        this.state = {
            institution: '',
            typeOfStudies:'',
            fieldOfStudies:'',
            dateFrom:'',
            dateTo:'',
            edited: false,
        }
    }
    
    handleInstitution = (e) => {
        this.setState({
            institution: e.target.value, 
        });
    }

    handleTypeOfStudies = (e) => {
        this.setState({
            typeOfStudies: e.target.value,
        });
    }

    handleFieldOfStudies = (e) => {
        this.setState({
            fieldOfStudies: e.target.value,
        });
    }

    handleDateFrom = (e) => {
        this.setState({
            dateFrom: e.target.value,
        });
    }

    handleDateTo = (e) => {
        this.setState({
            dateTo: e.target.value,
        });
    }

    handleSubmit = () => {
        this.setState({
            edited: !this.state.edited,
        });
    }

    render() {
        return (
            this.state.edited ?
            <EditedEducation form = {this.state} handleClick = {this.handleSubmit} />
            : <form>
                <label for='institution'>Institution: <input type='text' id='institution' value={this.state.institution} onChange={this.handleInstitution}></input></label>
                <label for='type-of-studies'>Diploma: <input id='type-of-studies' value={this.state.typeOfStudies} onChange={this.handleTypeOfStudies}></input></label>
                <label for='field-of-studies'>Field of studies: <input id='field-of-studies' value={this.state.fieldOfStudies} onChange={this.handleFieldOfStudies}></input></label>
                <label for='dateFrom'>From: <input type='date' id='dateFrom' value={this.state.dateFrom} onChange={this.handleDateFrom}></input></label>
                <label for='dateTo'>To: <input type='date' id='dateTo' value={this.state.dateTo} onChange={this.handleDateTo}></input></label>
                <button onClick = {this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default EducationExperience;