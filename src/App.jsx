
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
import ApiDentist from "./Routes/ApiDentist"
import NotFound from "./Routes/NotFound"
import { routes } from "./Components/utils/Routes"

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.detailedId} element={<ApiDentist/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
