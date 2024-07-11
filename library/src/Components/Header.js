// import React from "react";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Book
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Articles
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">
//                 Author Interviews
//               </a>
//             </li>
//           </ul>

//           <button className="btn btn-outline-success" type="submit">
//             login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { useContext } from "react";

import { AuthContext } from "./AuthContect";
import { Link } from "react-router-dom";

export default function Header() {
  const authContext = useContext(AuthContext);

  function logout(params) {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }

  return (
    <nav className="navbar bg-body-tertiary mt-2 mmb-2">
      <Link to="/" className="navbar-brand mb-0 h1">
        Library
      </Link>
      <Link to="/Books" className="navbar-brand mb-0 h1">
        Books
      </Link>
      <Link to="/AboutUs" className="navbar-brand mb-0 h1">
        About us
      </Link>
      <Link to="/ContactUs" className="navbar-brand mb-0 h1">
        Contact us
      </Link>
      <div>
        {authContext.auth.email ? (
          <div>
            {authContext.auth.email}{" "}
            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          "you need to login"
        )}
      </div>
    </nav>
  );
}

