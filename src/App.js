import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Submit from "./components/Submit/Submit";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/submit" component={Submit}/>
    </Switch>
 
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
