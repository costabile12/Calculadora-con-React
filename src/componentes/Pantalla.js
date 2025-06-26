import React from "react";
import '../hojas-de-estilo/Pantalla.css'

// Otra forma de llamar a un componente
                  // Sintaxis de desestructuracion
const Pantalla = ( {input} ) => (
  <div className="input">
    {input}
  </div>
)

export default Pantalla;