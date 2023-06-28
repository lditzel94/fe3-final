import React from "react";
import {useForm} from "./useForm";
import {
    ErrorMessage,
    FormButton,
    FormContainer,
    Input,
    InputGroup,
    InputLabel,
    MainForm,
    PageContainer
} from "./styles";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
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
                <MainForm onSubmit={handleSubmit} noValidate>
                    <InputGroup>
                        <InputLabel htmlFor="fullName" value={"Full Name:"}/>
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
                        <InputLabel htmlFor="email" value={"Email:"}/>
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
                    <FormButton type="submit" disabled={!isValidForm} value={"Enviar"}/>
                </MainForm>
            </FormContainer>
        </PageContainer>
    )
}

export default Form;