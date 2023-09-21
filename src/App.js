import React, {useState,Fragment} from 'react';
import Form from "./Components/Form/UserInputs";
import UserList from "./Components/List/UserList";
import ErrorModal from "./Components/ErrorModal/ErrorModal"
import Wrapper from "./Components/Helpers/Wrapper";

function App() {
    const [userData, setUserData] = useState([])
    const addToList = (formData) => {
        setUserData((prevState) => {
            return [
                ...prevState,
                formData
            ]
        })
    }
    return (
        <Fragment>
            <Form onAdd={addToList}/>
            <UserList users={userData}></UserList>
        </Fragment>
    );
}

export default App;
