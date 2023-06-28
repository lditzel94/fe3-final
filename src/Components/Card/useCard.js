import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useCard = ({name, username, id, favorites, updateFavorites}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(favorites.some((user) => user.id === id));
    }, [favorites, id]);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const updatedFavorites = isFavorite
            ? favorites.filter((user) => user.id !== id)
            : [...favorites, {name, username, id}];

        updateFavorites(updatedFavorites);
        setIsFavorite(!isFavorite);
    };

    const showDetail = () => navigate(`/detail/${id}`);

    return {isFavorite, showDetail, toggleFavorite}
}