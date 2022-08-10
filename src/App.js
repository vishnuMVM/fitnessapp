import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
