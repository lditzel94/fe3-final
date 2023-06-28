import React from "react";
import doctorImage from "../../assets/doctor.jpg";
import {useCard} from "./useCard";
import {
    CardContainer,
    CardFavoriteButton,
    CardFavoriteButtonIcon,
    CardImg,
    CardName,
    CardUsername,
    StyledCard
} from "./styles";

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const {isFavorite, showDetail, toggleFavorite} = useCard(
        {name, username, id, favorites, updateFavorites}
    )

    return (
        <CardContainer>
            <StyledCard onClick={showDetail}>
                <CardImg src={doctorImage} alt={id}/>
                <CardName value={name}/>
                <CardUsername value={username}/>
                <CardFavoriteButton onClick={(e) => toggleFavorite(e)}>
                    <CardFavoriteButtonIcon isFavorite={isFavorite}/>
                </CardFavoriteButton>
            </StyledCard>
        </CardContainer>
    );
};

export default Card;
