import React from 'react';
import classes from './CockPit.module.css';

const cockpit = (props) => {
    const assignedClasses = ['red', 'bold'];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.cockpit}>
            <h1>{props.AppTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;



