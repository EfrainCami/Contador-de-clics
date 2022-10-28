import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({texto, esBotonDeClic, manejarClic}){
  return(
    //Dependiendo del tipo de botón que reciba en las propiedades, se le asignará a un tipo de clase o a otro
    <button className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
    onClick={manejarClic}>
      {texto}

    </button>
  );
}

export default Boton;