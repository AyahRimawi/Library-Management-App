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
        <Route
          path="/Books"
          element={
            <Books
              id="1"
              title="مقدمة ابن خلدون "
              author="ابن خلدون "
              isbn="1289499030"
            />
          }
        />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      {/* <header className="App-header">
        <Books
          id="1"
          title="مقدمة ابن خلدون "
          author="ابن خلدون "
          isbn="1289499030"
        />

        <Books
          id="2"
          title="الحاوي في الطب "
          author="ابو بكر الرازي "
          isbn="893847239479"
        /> */}

      {/* <Books/> */}
      {/* </header> */}
      <Db />

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