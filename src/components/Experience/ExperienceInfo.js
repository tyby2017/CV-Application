import React, { Component } from 'react';
import EditedExperience from './EditedExperience';

class ExperienceInfo extends Component {
    constructor() {
        super();
        this.state = {
            companyName: '',
            positionTitle: '',
            mainTasks: '',
            dateFrom: '',
            dateUntil: '',
            edited: false,
           }
    }

    handleCompanyName = e => {
        this.setState({
            companyName: e.target.value,
        });
    }

    
    handlePositionTitle = (e) => {
        this.setState({
            positionTitle: e.target.value,
        });
    }

    handleMainTasks = (e) =>{
        this.setState({
            mainTasks: e.target.value,
        });
    }

    handleDateFrom = (e) => {
        this.setState({
            dateFrom: e.target.value,
        });
    }

    handleDateUntil = (e) => {
        this.setState({
            dateUntil: e.target.value,
        });
    }

    handleOnSubmit = () => {
        this.setState({
            edited: !this.state.edited,
        });
    }

    handleNewSection = () => {
        return <ExperienceInfo />
    }

    render() {
        return (
            this.state.edited ?
            <EditedExperience form={this.state} handleClick={this.handleOnSubmit} />
            : <form>
                <label for='company-name'>Company name: <input id='company-name' value={this.state.companyName} onChange={this.handleCompanyName}></input></label>
                <label for='position-title'>Position title: <input id='position-title' value={this.state.positionTitle} onChange={this.handlePositionTitle}></input></label>
                <label for='main-tasks'>Main tasks: <textarea id='main-tasks' value={this.state.mainTasks} onChange={this.handleMainTasks}></textarea></label>
                <label for='date-from'>From: <input type='date' id='date-from' value={this.state.dateFrom} onChange={this.handleDateFrom}></input></label>
                <label for='date-until'> Until: <input type='date' id='date-until' value={this.state.dateUntil} onChange={this.handleDateUntil}></input></label>
                <button onClick={this.handleOnSubmit}>Submit</button>
            </form>
        );
    }
}


export default ExperienceInfo;

