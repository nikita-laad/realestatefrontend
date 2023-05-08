import LogIn from "./page/auth/LogIn";
import Register from "./page/auth/Register";
import Home from "./page/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TopHeader from "./components/layout/TopHeader";
import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProperties from "./page/properties/allproperties/AllProperties";

function App() {
  return (
    <>
     <Router>
     <TopHeader/>
     <Header/>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<LogIn/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path="/properties" element={<AllProperties/>}></Route>
     </Routes>
     <Footer/>
     </Router>
    
    </>
  );
}

export default App;
