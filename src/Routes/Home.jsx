import React, {useEffect} from 'react'
import {useGlobalContext} from "../Components/utils/global.context";
import Card from "../Components/Card/Card"
import {useFavorites} from "../Hooks/useFavorites";

const Home = () => {
    const {globalState: {theme, data}} = useGlobalContext()
    const {favorites, updateFavorites} = useFavorites()

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark" : "light";
    }, [theme]);


    return (
        <main>
            <Heading theme={theme} value="Home"/>
            <Grid>
                {data?.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id}
                          favorites={favorites} updateFavorites={updateFavorites}/>
                ))}
            </Grid>
        </main>
    );
};

const Heading = ({theme, value}) => (
    <h1 className={theme === "dark" ? "dark" : "light"}>{value}</h1>
)

const Grid = ({children}) => (
    <div className="card-grid">{children}</div>
)

export default Home;