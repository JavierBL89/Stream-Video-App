import React from "react";
import AppNavbar from "./Navbar/AppNavbar";
import WelcomePage from "./WelcomePage/WelcomePage";

function App() {
  return (
    <div className="app-main-wraper">
     <AppNavbar></AppNavbar>
     <WelcomePage/>

    </div>
  );
}

export default App;
