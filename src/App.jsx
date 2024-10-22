
import { useState } from 'react'
import './App.css'


function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [error, setError] = useState({});

  const paraTodo = (event) => {
    if(event.target.name === 'nombre'){
      setNombre(event.target.value)
    }
    else if (event.target.name === 'correo'){
      setCorreo(event.target.value);
  } 
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido';
    }

    if (!formData.correo) {
      errors.correo = 'El correo electrónico es requerido';
    }

    return errors;
  };

  const errores = (event) => {
    event.preventDefault();
    const errors = validateForm({ nombre, correo });

    if (Object.keys(errors).length === 0) {
      console.log("Nombre:", nombre);
      console.log("Correo:", correo);
    }
    setError(errors);
  };

 
  return (
    <>
    <h1>FORMULARIO</h1>

    <form onSubmit={errores}>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={paraTodo}
          placeholder="Escriba su nombre aquí..."
        />
        {error.nombre && <p>{error.nombre}</p>}
        <input
          type="email"
          name="correo"
          value={correo}
          onChange={paraTodo}
          placeholder="Escriba su correo electrónico aquí..."
        />
        <button type="submit" >Enviar</button>
      </form>
    


    </>
  )
}
export default App
