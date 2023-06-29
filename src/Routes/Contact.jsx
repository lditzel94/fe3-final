import React from 'react'
import Form from '../Components/Form/Form'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    const { globalState: { theme } } = useGlobalContext();


    return (
        <div className={`contact-container ${theme === "dark" ? "dark" : "light"}`}>
            <h2 className={theme === "dark" ? "dark" : "light"}>Want to know more?</h2>
            <p className={theme === "dark" ? "dark" : "light"}>Send us your questions and we will contact you</p>
            <Form/>
        </div>
    )
}

export default Contact