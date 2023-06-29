import React from 'react'
import Form from '../Components/Form/Form'
import {useGlobalContext} from '../Components/utils/global.context'

const Contact = () => {
    const {globalState: {theme}} = useGlobalContext();

    return (
        <ContactContainer theme={theme}>
            <Heading theme={theme} value="Want to know more?"/>
            <SubHeading theme={theme}
                        value="Send us your questions and we will contact you"/>
            <Form/>
        </ContactContainer>
    )
}

const ContactContainer = ({theme, children}) => (
    <div className={`contact-container ${theme === "dark" ? "dark" : "light"}`}>
        {children}
    </div>
)

const Heading = ({theme, value}) => (
    <h2 className={theme === "dark" ? "dark" : "light"}>
        {value}
    </h2>
)

const SubHeading = ({theme, value}) => (
    <p className={theme === "dark" ? "dark" : "light"}>
        {value}
    </p>
)

export default Contact