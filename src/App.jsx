import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Components/utils/Routes"
import {useGlobalContext} from "./Components/utils/global.context";
import {useEffect} from "react";


function App() {
    const {globalState} = useGlobalContext();
    const {theme} = globalState;

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark" : "light";
    }, [theme]);


    return (
        <div className="App">
            <Navbar/>
            <AppRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
