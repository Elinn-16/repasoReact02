import { useState, useEffect } from "react";
//import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos/") // Hace una petición GET a la API
        .then(response => response.json())
        .then(json => setPosts(json)) // Guarda los posts en el estado
        .catch(error => console.error("Error fetching data:", error));

    }, []);


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    );
    
}


export default Post;