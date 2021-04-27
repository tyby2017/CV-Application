import React from 'react';

const EditedExperience = (props) => {
    const {companyName, positionTitle, mainTasks, dateFrom, dateUntil} = props.form;
    return (
        <div id='edited-experience'>
            <p>Company name: {companyName}</p>
            <p>Position title: {positionTitle}</p>
            <p>Main tasks: {mainTasks}</p>
            <p>Date: {dateFrom}</p>
            <p>Until: {dateUntil}</p>
            <button onClick={props.handleClick}>Edit</button>
        </div>

    );
}


export default EditedExperience;