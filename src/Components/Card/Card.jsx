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
    MainCard
} from "./styles";

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const {isFavorite, showDetail, toggleFavorite} = useCard(
        {name, username, id, favorites, updateFavorites}
    )

    return (
        <CardContainer>
            <MainCard className="card" onClick={showDetail}>
                <CardImg className="cardPic" src={doctorImage} alt={id}/>
                <CardName>{name}</CardName>
                <CardUsername>{username}</CardUsername>
                <CardFavoriteButton className="favButton" onClick={(e) => toggleFavorite(e)}>
                    <CardFavoriteButtonIcon isFavorite={isFavorite}/>
                </CardFavoriteButton>
            </MainCard>
        </CardContainer>
    );
};

export default Card;
