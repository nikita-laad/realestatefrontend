import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TopHeader from "./components/layout/TopHeader";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
     </Routes>
     <Footer/>
     </Router>
    
    </>
  );
}

export default App;
