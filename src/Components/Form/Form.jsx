import React from "react";
import {useForm} from "./useForm";
import {ErrorMessage, FormButton, FormContainer, Input, InputGroup, InputLabel, PageContainer} from "./styles";

const Form = () => {
    const {
        data: {
            formData,
            isValidForm,
        },
        error: {
            errorMessages,
        },
        actions: {
            handleSubmit,
            handleInputChange,
        },
    } = useForm()

    return (
        <PageContainer>
            <FormContainer>
                <form onSubmit={handleSubmit} noValidate>
                    <InputGroup>
                        <InputLabel htmlFor="fullName">Full Name</InputLabel>
                        <Input
                            autoComplete="off"
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                        <ErrorMessage errorMessage={errorMessages.fullNameError}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            autoComplete="off"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <ErrorMessage errorMessage={errorMessages.emailError}/>
                    </InputGroup>
                    <FormButton type="submit" disabled={!isValidForm}>Enviar</FormButton>
                </form>
            </FormContainer>
        </PageContainer>
    )
}

export default Form;