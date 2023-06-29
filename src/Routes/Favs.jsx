import React from "react";
import Card from "../Components/Card/Card";
import {useFavorites} from "../Hooks/useFavorites";
import NotFound from "./NotFound";
import {useGlobalContext} from "../Components/utils/global.context";

const Favs = () => {
    const {favorites, updateFavorites} = useFavorites()
    const {globalState: {theme}} = useGlobalContext();


    function favoriteCards() {
        return favorites?.map((item) => (
            <Card key={item.id} name={item.name} username={item.username} id={item.id}
                  favorites={favorites} updateFavorites={updateFavorites}/>
        ));
    }

    function notFound() {
        return favorites.length === 0 && (
            <NotFound/>
        );
    }

    return (
        <>
            <Heading theme={theme} value="Dentists Favs"/>
            <Grid>
                {favoriteCards()}
                {notFound()}
            </Grid>
        </>
    );
};

const Heading = ({theme, value}) => (
    <h1 className={theme === "dark" ? "dark" : "light"}>{value}</h1>
)

const Grid = ({children}) => (
    <div className="card-grid">{children}</div>
)

export default Favs;