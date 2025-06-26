import './App.css';
import logoCasio from './imagenes/logo-casio.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
// Importar un Hook
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {
  
  // Creamos un estado para la aplicacion llamado input que se le va aplicar una funcion setInpu, el input inicialmente va a ser una cadena vacia  por el useState('')
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor)
  };

  const calcularResultado = () => {
    if (input && typeof(input) === 'string') {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos')
    }
    
  };


  
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo-casio'
          src={logoCasio}
          alt='Logo de Casio' />

      </div>

      <div className='contenedor-calculadora '>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
      
    </div>
  );
}

export default App;
