import React from 'react';
import Button from './Button'

const Buttons = (props) => {
    return(
        <div className = "buttonWrapper">
            <Button
                type = "submit"
                id = "buttonSubmiter"
                iconClass = "fas fa-code"
                onPress = {props.submitPress}
            />
            <Button
                type = "submit"
                id = "buttonCleaner"
                iconClass = "far fa-trash-alt"
                onPress = {props.cleanPress}
            />
        </div>
    )
}

 export default Buttons;