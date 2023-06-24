import {React, useParams, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const ApiDentist = () => {
    const [dentist, setDentist] = useState({})
    const params = useParams()
    const url=`No me acuerdo donde estaba la url ${params.id}`

    useEffect(() => {
        axios(url)
        .then(res => setDentist(res.data))
    }, [])
  return (
    <>
      <h1>{dentist.name} Info</h1>
      <Card></Card>
    </>
  )
}

export default ApiDentist