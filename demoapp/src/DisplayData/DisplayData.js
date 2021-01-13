import React from 'react';
const DisplayData = (props) =>{
    return(
        <React.Fragment>
            {props.resp.cod === 200? 
            <div>
            <div>{props.city}</div>
            <div> current temperature is {props.resp.main.temp}</div> 
            </div>
            : <div>{props.message}</div>}
        </React.Fragment>
    );
}

export default DisplayData;