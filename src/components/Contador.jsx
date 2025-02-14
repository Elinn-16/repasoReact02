import { useState, useEffect } from "react";
import '../App.css';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const [nombre, setNombre] = useState("");


    useEffect(() => {
        document.title = `Contador: ${contador}`;
      }, [contador]); 
      

    //funcion para menejar el cambio de nombre 
    const manejarNombre = (e) => {
        setNombre(e.target.value); // valor del input
    };

    const mas = () => {
        setContador(contador + 1);
    };

    const menos = () => {
        setContador(contador - 1);
    };



    return (
        <div className="container">
            <h1>CONTADOR</h1>
            <div>
                <p>Ingresa tu nombre</p>
                <input type="text" label="Nombre" onChange={manejarNombre} />
            </div>
            <div>
                <h1>Hola {nombre}, este es tu contador </h1>
                <h2>Contador: {contador}</h2>
                <button onClick={menos}>-</button>
                <button onClick={mas}>+</button>
            </div>
            
        </div>
    );
};


export default Contador;
