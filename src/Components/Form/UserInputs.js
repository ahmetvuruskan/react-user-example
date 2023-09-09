import React from "react";
import userInputs from "../../Css/AddUser.module.css";
import button from "../../Css/Button.module.css";
import Card from "../Card";
import Button from "../Buttons/Button";

const UserInputs = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={userInputs.input} >
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" placeholder="Enter your name"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default UserInputs;
