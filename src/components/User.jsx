import { useState, useEffect } from "react";
import axios from "axios";


const User = () => {
    const [users, setUsers] = useState([]);


    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => setUsers(response.data))
        .catch(error => console.error("Error:", error));
    }, []);



    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.id}</h3>
                    <p>{user.title}</p>
                </div>
            ))}
        </div>
    );  }



export default User;
