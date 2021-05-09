import React, { useState } from 'react'
import "./css/app.css"

const App = () => {
  const [ persona, setPersona ] = useState([
    { id:1,
      name: 'Arto Hellas' }
  ]) 
  const [ nombre, setNombre ] = useState('')
  

  const handleChange = (event) => {
    const nuevoNombre = event.target.value
    setNombre(nuevoNombre)
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("estoy clickeando", persona)
    const nuevaPersona= {
      id: persona.length+1,
      name: nombre,
    }
    setPersona([
      ...persona,
      nuevaPersona,
    ])

    setNombre("")
  }


  return (
    <div className="contenido">
      <h2 className="titulo">Directorio Telefonico</h2>
        <form onSubmit={handleSubmit}>
        <div className="nombre">
          Nombre: <input className="caja" onChange={handleChange}  value={nombre}/>
        </div>
        <div>
          <button type="submit" >Añadir</button>
        </div>
        </form>
      <h2>Numeros</h2>
      {
        persona.map(per =>
          <div key ={per.id}>
            <p className="nom">{per.name}</p>
          </div>
          )
      }
    </div>
  )
}

export default App
