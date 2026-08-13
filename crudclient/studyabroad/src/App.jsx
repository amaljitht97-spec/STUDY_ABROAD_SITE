import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";

import "./App.css";


function Navbar() {

    return (

        <nav className="navbar">

            <NavLink
                to="/"
                className="navbar-logo"
            >

                <div className="navbar-logo-box">
                    S
                </div>

                <div className="navbar-logo-text">

                    <span>
                        Student
                    </span>

                    <strong>
                        Portal
                    </strong>

                </div>

            </NavLink>


            <div className="navbar-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Dashboard
                </NavLink>


                <NavLink
                    to="/add-student"
                    className={({ isActive }) =>
                        isActive
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Add Student
                </NavLink>

            </div>

        </nav>

    );

}


function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />


                <Route
                    path="/add-student"
                    element={<Home />}
                />

            </Routes>

        </BrowserRouter>

    );

}


export default App;