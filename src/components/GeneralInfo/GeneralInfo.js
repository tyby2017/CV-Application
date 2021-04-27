import React,{Component} from 'react';
import Overview from './Overview';

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            renderOverview: false,
        };
    }

    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value,
        });
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value,
        });
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }
    handlePhoneNo = (e) => {
        this.setState({
            phoneNo: e.target.value,
        });
    }

    handleClick = (e) => {
        this.setState({
            renderOverview: !this.state.renderOverview,
        });
    }


    render() {
        return(
                this.state.renderOverview ?
                <Overview form = {this.state} onclick={this.handleClick}/>
                :
                <form id='general-info-form'>
                    <label for='first-name'>First Name: <input type='input' id='first-name' value={this.state.firstName} onChange={this.handleFirstName}></input></label>                    
                    <label for='last-name'>Last Name: <input type='input' id='last-name' value={this.state.lastName} onChange={this.handleLastName}></input></label>                    
                    <label for='email'><span>Email:</span> <input type='email' id='email' value={this.state.email} onChange={this.handleEmail}></input></label>                   
                    <label for='phone-no'><span>Phone No.:</span> <input type='tel' id='phone-no' value={this.state.phoneNo} onChange={this.handlePhoneNo}></input></label>                    
                    <button onClick = {this.handleClick}>Submit</button>
                </form>
        );
    }
}


export default GeneralInfo;


