import React from "react";
import buttons from "../../Css/Button.module.css";

const Button = (props) => {
    return <button className={buttons.button} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
}

export default Button;