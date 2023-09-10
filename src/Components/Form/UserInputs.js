import React, {useState} from "react";
import userInputs from "../../Css/AddUser.module.css";
import Card from "../Card";
import Button from "../Buttons/Button";

const UserInputs = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        age: ''
    });
    const submitHandler = (event) => {
        event.preventDefault();
        if (formData.name.trim().length === 0 || formData.age.trim().length === 0) {
            return;
        }
        if (+formData.age < 1) {
            return;
        }
        props.onAdd(formData);
        event.preventDefault();
        setFormData({
            name: '',
            age: ''
        });
    }
    const inputChangeHandler = (input, value) => {

        setFormData((prevState) => {
            return {
                ...prevState,
                [input]: value
            }
        })
    }
    return (
        <Card className={userInputs.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(event) => {
                    inputChangeHandler('name', event.target.value)
                }} value={formData.name} placeholder="Enter your name"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" onChange={(event) => {
                    inputChangeHandler('age', event.target.value)
                }} value={formData.age} placeholder="Enter your age"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default UserInputs;
