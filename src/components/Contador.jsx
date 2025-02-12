import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const [nombre, setNombre] = useState("");

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
        <div>
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
