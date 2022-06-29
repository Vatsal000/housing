import React from 'react'

function Alert(props) {

    const capitalize=(word)=>{
        //firstly we will change word to lower case.
        const lower=word.toLowerCase();
        //change firstcharacter to upperchase by charat(0) and then slice means remove firstcharacter and append to remaining word
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}   
        </div>
    )
}

export default Alert
