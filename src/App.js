import React from "react";
// import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//import styled components
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
      
    </div>
  );
}

export default App;
 