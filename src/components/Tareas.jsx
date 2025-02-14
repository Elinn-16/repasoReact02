import {useState, useEffect} from "react";  
import axios from "axios";  

const API_URL = "http://localhost:5000/tareas";

const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    useEffect(() => {
        obtenerTareas();
    }, []);

    const obtenerTareas = async () => {
        try {
            const response = await axios.get(API_URL);
            setTareas(response.data);
        } catch (error) {
            console.error("Error al obtener tareas:", error);
        }
    };
    
    

    const agregarTarea = async () => {
        if (nuevaTarea.trim() === "") return;
        
        const response = await axios.post(API_URL, {
            titulo: nuevaTarea,
            completado: false
        });
    
        setTareas([...tareas, response.data]);
        setNuevaTarea("");
    };
    

    const eliminarTarea = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };
    

    const toggleCompletar = async (id, completado) => {
        await axios.put(`${API_URL}/${id}`, { titulo: tareas.titulo, completado: !completado });

        obtenerTareas(); 
    };
    


    return (
        <div>
            <h2>Lista de Tareas</h2>
            
            {/* Input y botón para agregar tarea */}
            <input 
                value={nuevaTarea} 
                onChange={(e) => setNuevaTarea(e.target.value)} 
            />
            <button onClick={agregarTarea}>Agregar</button>
    
            {/* Lista de tareas */}
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <span 
                            style={{ textDecoration: tarea.completado ? "line-through" : "none" }}
                        >
                            {tarea.titulo}
                        </span>
    
                        <button onClick={() => toggleCompletar(tarea.id, tarea.completado)}>
                            ✔️
                        </button>
    
                        <button onClick={() => eliminarTarea(tarea.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default Tareas;