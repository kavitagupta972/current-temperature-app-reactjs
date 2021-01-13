import React from 'react';
const DisplayData = (props) =>{

    return(
        <React.Fragment>
            {props.err && <div>please enter a valid city</div>}
            {props.resp.cod !== 200? 
            <div>
            <div>{props.city}</div>
            <div> current temperature is {props.resp.main.temp}</div> 
            </div>
            : null}
            {props.resetBtn && <button className="button" onClick={props.onButtonClick}>Reset</button>}
        </React.Fragment>
    );
}

export default DisplayData;