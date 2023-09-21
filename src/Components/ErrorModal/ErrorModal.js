import React from "react";
import Card from "../Card"
import Button from "../Buttons/Button";
import classes from "../../Css/ErrorModal.module.css";
import Wrapper from "../Helpers/Wrapper";

const ErrorModal = (props) => {

    return (
        <Wrapper>
            <div onClick={props.onConfirm} className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm} >Okay</Button>
                </footer>
            </Card>
        </Wrapper>
    )
}

export default ErrorModal;