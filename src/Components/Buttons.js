import React from 'react';
import Button from './Button'

import iconCode from '../Icons/code-solid.png';
import iconTrash from '../Icons/trash-alt-regular.png';

const Buttons = (props) => {
    return(
        <div className = "buttonWrapper">
            <Button
                name = "Delete Numbers"
                type = "submit"
                id = "buttonSubmiter"
                iconClass = "icon"
                icon = {iconCode}
                onPress = {props.submitPress}
            />
            <Button
                name = "Clean board"
                type = "submit"
                id = "buttonCleaner"
                iconClass = "icon"
                icon = {iconTrash}
                onPress = {props.cleanPress}
            />
        </div>
    )
}

 export default Buttons;