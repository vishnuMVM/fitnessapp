import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Submit from "./components/Submit/Submit";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/submit" element={<Submit />}/>
    </Routes>
 
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
