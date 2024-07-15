import "./App.css";
import { Db } from "./Components/db";

import { Route, Routes, Link } from "react-router-dom";

import React, { useContext } from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { AuthProvider, AuthContext } from "./Components/AuthContect";

import Books from "./Components/Books";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/footer";

function App() {
    const authContext = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      {authContext.auth.email ? "welcome" : <Login />}
      {/* Routes */}
      <Routes>
        <Route path="/Books" element={<Db />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

// export default App;
function AppWithStore() {
  return(
  <AuthProvider>
    <App/>
    </AuthProvider>
  )
}

export default AppWithStore;