import React, {useState} from "react";
import userInputs from "../../Css/AddUser.module.css";
import Card from "../Card";
import Button from "../Buttons/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserInputs = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        id: Math.round(Math.random() * 1000).toFixed().toString()
    });
    const [error, setError] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        if (formData.name.trim().length === 0 || formData.age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+formData.age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAdd(formData);
        event.preventDefault();
        setFormData({
            name: '',
            age: '',
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
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
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
        </Wrapper>
    )
}

export default UserInputs;
