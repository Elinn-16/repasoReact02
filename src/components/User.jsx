import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function user() {
    const [users, setUsers] = useState([]);
    
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response => {
            setUsers(response.data);})
        .catch(error => {
            console.log('Error fetching data:', error);
    })


    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.title}</p>
                </div>
            ))}
        </div>
    );
    
    })
}
