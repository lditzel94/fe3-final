import React, {useContext} from 'react'
import {ContextGlobal} from "../Components/utils/global.context";
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({ jsonData }) => {

    if(!jsonData) {
        return <div>Loading...</div>;
    }

    const {data} = useContext(ContextGlobal)
    console.log(data)



  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {jsonData.map((item) => (
          <Card key={item.id} name={item.name} username={item.username} id={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;