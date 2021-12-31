import React from 'react';
import '../../static/css/button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOURS = ['primary', 'blue', 'green']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColour
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColour = COLOURS.includes(buttonColour) ? buttonColour : null;

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColour}`} onClick={onClick} type={type}>{children}</button>
    )
}