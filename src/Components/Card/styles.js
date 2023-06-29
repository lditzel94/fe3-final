import React from "react";
import {styled} from "styled-components";

export const CardContainer = styled.div`
  margin-bottom: 2rem;
`

export const MainCard = styled.div`
  background-color: var(--color-nav-fondo);
  position: relative;
  border-radius: 5%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform .1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
`

export const CardName = styled.h3`
  margin: 0;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 18px;
  font-weight: bold;
  color: var(--color-texto);
`

export const CardUsername = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-secundario);
`

export const CardFavoriteButton = styled.button`
  position: absolute;
  padding: 10px;
  border: none;
  background: none;
  width: 10%;
  height: 10%;
  cursor: pointer;
  top: 2%;
  left: 80%;
`

export const CardFavoriteButtonIcon = ({isFavorite}) => (
    <span role="img">{isFavorite ? "❤️" : "🖤"}</span>
)