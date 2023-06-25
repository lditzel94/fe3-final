import {Route, Routes} from "react-router-dom";
import Home from "../../Routes/Home";
import Favs from "../../Routes/Favs";
import Detail from "../../Routes/Detail";
import Contact from "../../Routes/Contact";
import NotFound from "../../Routes/NotFound";

export const routes = {
    home: '/',
    favs: 'favs',
    detail: '/detail/:id',
    contact: '/contact',
    notFound: '*',
}

let jsonData;
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((res) => res.json()
.then((data) => jsonData = data
 ))


const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home jsonData={jsonData}/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
        </Routes>
    )
}
export default AppRoutes;