import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Components/utils/Routes"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRoutes/>
            <Footer/>
        </div>
    );
}

export default App;
