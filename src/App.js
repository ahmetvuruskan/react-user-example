import React, {useState} from 'react';
import Form from "./Components/Form/UserInputs";
import UserList from "./Components/List/UserList";
import ErrorModal from "./Components/ErrorModal/ErrorModal"

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
        <div>

            <Form onAdd={addToList}/>
            <UserList users={userData}></UserList>
        </div>
    );
}

export default App;
