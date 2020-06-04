import React from 'react';

const Button = (props) => {
    return(
        <button type = {props.type} id = {props.id} name = {props.name} onClick = {() => props.onPress()}>
            <img src={props.icon} alt = "Icon" className = {props.iconClass}/>
        </button>
    )
}

export default Button;