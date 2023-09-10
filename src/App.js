import React, {useState} from 'react';
import Form from "./Components/Form/UserInputs";
import UserList from "./Components/List/UserList";
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
