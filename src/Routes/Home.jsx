import React, {useContext} from 'react'
import {ContextGlobal} from "../Components/utils/global.context";
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {data} = useContext(ContextGlobal)
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []

    return (
        <main className="">
            <h1>Home</h1>
            <div className="card-grid">
                {data && data.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id}
                          favorites={favorites}/>
                ))}
            </div>
        </main>
    );
};

export default Home;