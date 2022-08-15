import React from "react";
import Home from './component/Home/Home';
import About from './component/About/About';
import Help  from './component/Help/Help';
import Login from './component/Login/Login';
import Metal from './component/Metal/Metal';
import Forget from './component/Forget/Forget';
import Register from './component/Register/Register';
import Container from "./component/Container/Container";
import DashboardContainer from "./component/Container/DashboardContainer";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App=()=> 
  {
  return(
<React.Fragment>
<Router>
  <Routes>
 <Route  exact path="/" element={<Container/>}>
   <Route path="/" element={<Navigate replace to='home'/>}/>
   <Route path="home" element={<Home/>}/>
   <Route path="about" element={<About/>}/>
   <Route path="help" element={<Help/>}/>
   <Route path="login" element={<Login/>}/>
   <Route path="register" element={<Register/>}/>
   <Route path="metal" element={<Metal/>}/>
   <Route path="forget-password" element={<Forget/>}/>
  </Route> 
  <Route path="/dashboard" element={<DashboardContainer/>}>
  </Route>
  <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </Router>
  </React.Fragment>
  )
  }                       
 export default App;
