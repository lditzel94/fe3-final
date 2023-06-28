import {useState} from "react";

export const useForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
    })

    const [errorMessages, setErrorMessages] = useState({
        fullNameError: "",
        emailError: "",
    })

    const [isValidForm, setIsValidForm] = useState(false);

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
        setIsValidForm(isFullNameValid && isEmailValid);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        validateField(name, value);
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
        setIsValidForm(false);
    }

    return {
        data: {
            formData,
            isValidForm
        },
        error: {
            errorMessages,
        },
        actions: {
            handleInputChange,
            handleSubmit
        },
    }
}