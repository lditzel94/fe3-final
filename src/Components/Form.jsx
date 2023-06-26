import React, {useState} from "react";


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

        validateForm();
    };

    const validateFullName = () => {
        if (formData.fullName.length <= 5) {
            setErrorMessages((prevErrorMessages) => ({
                ...prevErrorMessages,
                fullNameError: 'El nombre completo debe ser mayor a 5 caracteres',
            }));
            return false;
        }

        setErrorMessages((prevErrorMessages) => ({
            ...prevErrorMessages,
            fullNameError: '',
        }));

        return true;
    };

    const validateEmail = () => {
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(formData.email)) {
            setErrorMessages((prevErrorMessages) => ({
                ...prevErrorMessages,
                emailError: 'Email inválido',
            }));

            return false;
        }

        setErrorMessages((prevErrorMessages) => ({
            ...prevErrorMessages,
            emailError: '',
        }));

        return true;
    };

    const validateForm = () => {
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        setIsValid(isFullNameValid && isEmailValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data: ", formData)

        alert(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía mail`)

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
                <button type="submit" style={isValid ? styles.submitButton : styles.disabledButton} disabled={!isValid}>Enviar</button>
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
