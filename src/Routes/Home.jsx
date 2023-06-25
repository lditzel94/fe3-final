import React, {useContext, useEffect, useState} from 'react'
import {ContextGlobal} from "../Components/utils/global.context";
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [users, setUsers] = useState([]);
    const {data} = useContext(ContextGlobal)

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || []

        if (data) {
            console.log("Data: ", data)
            setUsers(data.map(user => ({...data, isFav: false})))
            console.log("Users: ", users)
        }
    }, [data]);


    return (
        <main className="">
            <h1>Home</h1>
            <div className="card-grid">
                {data && data.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id} isFav={item.fav}/>
                ))}
            </div>
        </main>
    );
};

export default Home;