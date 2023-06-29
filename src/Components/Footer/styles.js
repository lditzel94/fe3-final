import React from "react";
import {styled} from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background: var(--color-secundario);
  color: var(--color-fondo);
`

export const Text = styled.p`
  margin: 0;
`

export const Img = styled.img`
  max-width: 200px;
  padding: 0.8rem;
  margin: 0;
`