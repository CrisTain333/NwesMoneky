import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Business from './page/Business'
import Entertainment from './page/Entertainment'
import Home from './page/Home'
import General from './page/General'
import Sports from './page/Sports'
import Health from './page/Health'
import Technology from './page/Technology'
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
      <Auth0Provider
    domain="dev-usody80l.us.auth0.com"
    clientId="HAvm3p2JYODJdh8LjtxmJdbRJBaIDofh"
    redirectUri={window.location.origin}
  >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/entertainment" element={<Entertainment/> } />
        <Route path="/general" element={<General />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      </Auth0Provider>
    </>
  );
};

export default App;
