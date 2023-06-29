import React from "react";
import {styled} from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 50vh;
`

export const FormContainer = styled.div`
  max-width: 20rem;
  padding: 1rem;
`

export const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({disabled}) => disabled ? "gray" : "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
`

export const InputGroup = styled.div`
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`

export const ErrorMessage = ({errorMessage}) => {
    const errorMessageStyles = {
        color: "red",
        marginTop: "5px",
    }

    return (
        errorMessage && <p style={errorMessageStyles}>{errorMessage}</p>
    );
}