import { React, useEffect } from "react";
import AppNavbar from "./Navbar/AppNavbar";
import WelcomePage from "./WelcomePage/WelcomePage";
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./HomePage/HomePage";
import navigationTab from "../scripts/navigationTab";


function App() {

  useEffect(() => {
    const navigationTabScript = document.createElement('script');
    navigationTabScript.src = "src/scripts/navigationTab.js";
    navigationTabScript.type = "text/jsx";
    document.body.appendChild(navigationTabScript);

    return () => {
      document.body.removeChild(navigationTabScript);
    }
  }, []);

  return (
    <div className="app-main-wraper">
      {/* <AppNavbar></AppNavbar>
     <WelcomePage/>
     <Footer/> */}
      <HomePage />
    </div>
  );
}

export default App;
