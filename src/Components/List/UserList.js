import React from "react";
import userList from "../../Css/UserList.module.css";
import Card from "../Card";

const UserInputs = (props) => {
    return (
        <Card className={userList.users}>
            <ul>
                {props.users.map((user) => {
                    console.log(user)
                        return <li key={user.id} >{user.name} ({user.age} years old)</li>

                    }
                )}

            </ul>
        </Card>
    )
}

export default UserInputs;