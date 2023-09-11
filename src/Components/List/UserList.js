import React from "react";
import userList from "../../Css/UserList.module.css";
import Card from "../Card";

const UserInputs = (props) => {
   let content;

   const removeListener = (event) => {
         console.log(event.target)
   }

   if (props.users.length > 0) {
       content = <Card className={userList.users}>
           <ul>
               {props.users.map((user) => {
                       console.log(user)
                       return <li onClick={removeListener} key={user.id}>{user.name} ({user.age} years old)</li>
                   }
               )}

           </ul>
       </Card>
   }


    return content;
}

export default UserInputs;