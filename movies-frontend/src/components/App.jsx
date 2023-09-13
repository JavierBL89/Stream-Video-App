import React from "react";
import AppNavbar from "./Navbar/AppNavbar";
import WelcomePage from "./WelcomePage/WelcomePage";
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./HomePage/HomePage";
import Movies from "./Movies/Movies";

function App() {
  return (
    <div className="app-main-wraper">
     {/* <AppNavbar></AppNavbar>
     <WelcomePage/>
     <Footer/> */}
     {/* <HomePage /> */}
      <Movies/>
    </div>
  );
}

export default App;
