import React from 'react'
import LOLLIPOP_404 from "../assets/LOLLIPOP_404.svg"
import {styled} from "styled-components";

const NotFound = () => {
    return (
        <Container>
            <ErrorImage src={LOLLIPOP_404} alt="404 Page not found"/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorImage = styled.img`
  height: 60vh;
`

export default NotFound
