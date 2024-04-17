import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar bg-transparent p-2">
            <Link to="/">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                   <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
                        width="90"
                        height="54"
                    />
                </a>
            </div>
            </Link>
            <span className="mainTitle text-white"> A long time ago in a galaxy far, far away....</span>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary btn-outline-success">Favorites</button>
                </Link>
            </div>
        </nav>
    );
};

