import React, {useState} from "react";

const initialInputState = {errorMessage: "", isValid: true};

const validateFullName = (fullName) => {
    if (fullName.length <= 5) {
        return {
            ...initialInputState,
            errorMessage: "El nombre completo debe ser mayor a 5 caracteres",
            isValid: false,
        };
    }
    return initialInputState;
}

const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return {
            ...initialInputState,
            errorMessage: "Email inválido",
            isValid: false,
        };
    }
    return initialInputState;
}

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
    })

    const [errorMessages, setErrorMessages] = useState({
        fullNameError: "",
        emailError: "",
    })

    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        validateField(name, value);
    }

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case "fullName": {
                const {errorMessage} = validateFullName(value);
                setErrorMessages((prevErrorMessages) => ({
                    ...prevErrorMessages,
                    fullNameError: errorMessage,
                }));
                break;
            }

            case "email": {
                const {errorMessage} = validateEmail(value);
                setErrorMessages((prevErrorMessages) => ({
                    ...prevErrorMessages,
                    emailError: errorMessage,
                }));
                break;
            }

            default:
                break;
        }

        validateForm();
    }

    const validateForm = () => {
        const {isValid: isFullNameValid} = validateFullName(formData.fullName);
        const {isValid: isEmailValid} = validateEmail(formData.email);
        setIsValid(isFullNameValid && isEmailValid);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data: ", formData);

        alert(
            `Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`
        );

        setFormData({
            fullName: "",
            email: "",
        });
        setErrorMessages({
            fullNameError: "",
            emailError: "",
        });
        setIsValid(false);
    }

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
                    <FormButton type="submit" isValid={isValid} value={"Enviar"}/>
                </MainForm>
            </FormContainer>
        </PageContainer>
    )
}

const PageContainer = ({children}) => (
    <div style={styles.pageContainer}>
        {children}
    </div>
)

const FormContainer = ({children}) => (
    <div style={styles.formContainer}>
        {children}
    </div>
)

const MainForm = ({children, ...props}) => (
    <form {...props}>
        {children}
    </form>
)

const FormButton = ({value, isValid, ...props}) => (
    <button disabled={!isValid}
            style={isValid ? styles.submitButton : styles.disabledButton}
            {...props}>
        {value}
    </button>
)

const InputGroup = ({children}) => (
    <div style={styles.formGroup}>
        {children}
    </div>
)

const InputLabel = ({value, ...props}) => (
    <label style={styles.label} {...props}>{value}</label>
)

const Input = ({...props}) => (
    <input style={styles.input} {...props}/>
)

const ErrorMessage = ({errorMessage}) => (
    errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>
)

const styles = {
    pageContainer: {
        display: "flex",

        alignItems: "center",
        minHeight: "50vh",
    },

    formContainer: {
        maxWidth: "20rem",
        padding: "1rem",
    },

    formGroup: {
        marginBottom: "20px",
    },

    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
    },

    input: {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ced4da",
        borderRadius: "4px",
    },

    errorMessage: {
        color: "red",
        marginTop: "5px",
    },

    submitButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },

    disabledButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "gray",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "not-allowed",
    },
};

export default Form;
