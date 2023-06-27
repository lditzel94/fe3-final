import React, {useState} from "react";

const initialInputState = {errorMessage: '', isValid: true}

const validateFullName = (fullName) => {
    if (fullName.length <= 5) {
        return {...initialInputState, errorMessage: 'El nombre completo debe ser mayor a 5 caracteres', isValid: false};
    }
    return initialInputState;
};

const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return {...initialInputState, errorMessage: 'Email inválido', isValid: false}
    }
    return initialInputState;
};

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        fullNameError: '',
        emailError: '',
    });

    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        validateField(name, value);
    };

    const validateField = (fieldName, value) => {

        switch (fieldName) {
            case 'fullName': {
                const {errorMessage} = validateFullName(value);
                setErrorMessages((prevErrorMessages) => ({
                    ...prevErrorMessages,
                    fullNameError: errorMessage,
                }));
                break;
            }

            case 'email': {
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

        validateForm()
    };

    const validateForm = () => {
        const {isValid: isFullNameValid} = validateFullName(formData.fullName)
        const {isValid: isEmailValid} = validateEmail(formData.email)
        setIsValid(isFullNameValid && isEmailValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data: ', formData);

        alert(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`);

        setFormData({
            fullName: '',
            email: '',
        });
        setErrorMessages({
            fullNameError: '',
            emailError: '',
        });
        setIsValid(false);
    };

    return (
        <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} noValidate>
                <div style={styles.formGroup}>
                    <label htmlFor="fullName" style={styles.label}>Full Name:</label>
                    <input
                        autoComplete="off"
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errorMessages.fullNameError && (
                        <p style={styles.errorMessage}>{errorMessages.fullNameError}</p>
                    )}
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    {errorMessages.emailError && (
                        <p style={styles.errorMessage}>{errorMessages.emailError}</p>
                    )}
                </div>
                <button type="submit" style={isValid ? styles.submitButton : styles.disabledButton}
                        disabled={!isValid}>Enviar
                </button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '10rem'
    },

    formGroup: {
        marginBottom: '20px',
    },

    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },

    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
    },

    errorMessage: {
        color: 'red',
        marginTop: '5px',
    },

    submitButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },

    disabledButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'not-allowed',
    },
};

export default Form;
