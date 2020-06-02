import React from 'react';

const Button = (props) => {
    return(
        <button type = {props.type} id = {props.id} onClick = {() => props.onPress()}>
            <i className={props.iconClass}></i>
        </button>
    )
}

export default Button;