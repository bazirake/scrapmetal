import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Contact from './component/Contact'
import Help  from './component/Help'
import { Container } from "react-bootstrap";
import About from "./component/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App=()=> 
  {
return(
 <React.Fragment>
 <Header/>
 
    <Router>
    <Routes>
    <Route  exact path="" element={<Home/>}>
      </Route>
    <Route path="/about" element={<About/>}>
    </Route>
    <Route path="/contact" element={<Contact/>}>
    </Route>
    <Route path="/help" element={<Help/>}>
    </Route>
    </Routes>
  </Router>
 <Footer/>
 </React.Fragment>
  )
  }                      
export default App;
