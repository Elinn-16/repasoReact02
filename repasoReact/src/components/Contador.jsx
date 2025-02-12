import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const [nombre, setNombre] = useState("");

    const manejarNombre = (e) => {
        console.log(e.target.value); 
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
                <input type="text" label="Nombre" onChange={manejarNombre} />
                <button  >Guardar</button>
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
