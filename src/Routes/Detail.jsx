import {React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentist, setDentist] = useState([]);
  const url = 'Poner la url correcta de la api'
  useEffect(() => {
    axios(url)
    .then(res => setDentist(/*no se como lo devuelve la api*/))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='container'>
        {dentist.map(apiDentist => <Link to={`/${apiDentist.id}`}><Card className='card'>{apiDentist.id}</Card></Link>)}
      </div>
    </>
  )
}

export default Detail