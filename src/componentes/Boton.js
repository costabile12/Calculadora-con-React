import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton (props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.' && (valor !== '='));
  };

  return(
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}> 
    {/* Si no le pongo el () =>, interpreta que estoy haciendo la llamada a una funcion. Y no que estoy escribiendo una funcion como tal. Es una funcion que va a llamar a otra funcion*/}
      {props.children}
    </div>
  )
}

export default Boton;