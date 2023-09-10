import React from 'react';
import Form from "./Components/Form/UserInputs";

const addToList = (formData) => {
    console.log(formData);
}

function App() {
    return (
        <div>
            <Form onAdd={addToList}/>
        </div>
    );
}

export default App;
