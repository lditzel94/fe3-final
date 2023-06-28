import React from "react";

export const PageContainer = ({children}) => {
    const pageContainer = {
        display: "flex",
        alignItems: "center",
        minHeight: "50vh",
    }

    return (
        <div style={pageContainer}>
            {children}
        </div>
    );
}

export const FormContainer = ({children}) => {
    const formContainer = {
        maxWidth: "20rem",
        padding: "1rem",
    }

    return (
        <div style={formContainer}>
            {children}
        </div>
    );
}

export const MainForm = ({children, ...props}) => (
    <form {...props}>
        {children}
    </form>
)

export const FormButton = ({value, disabled, ...props}) => {
    const submitButton = {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: disabled ? "gray" : "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
    }

    return (
        <button disabled={disabled}
                style={submitButton}
                {...props}>
            {value}
        </button>
    )
}

export const InputGroup = ({children}) => {
    const formGroup = {
        marginBottom: "20px",
    }

    return (
        <div style={formGroup}>
            {children}
        </div>
    );
}

export const InputLabel = ({value, ...props}) => {
    const label = {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
    }

    return (
        <label style={label} {...props}>{value}</label>
    );
}

export const Input = ({...props}) => {
    const input = {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ced4da",
        borderRadius: "4px",
    }

    return (
        <input style={input} {...props}/>
    );
}

export const ErrorMessage = ({errorMessage}) => {
    const errorMessageStyles = {
        color: "red",
        marginTop: "5px",
    }

    return (
        errorMessage && <p style={errorMessageStyles}>{errorMessage}</p>
    );
}