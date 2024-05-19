import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Charaters } from "./characters";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar bg-transparent p-2">
            <Link to="/">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.starwars.com/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
                            width="90"
                            height="54"
                            alt="Star Wars Logo"
                        />
                    </a>
                </div>
            </Link>
            <span className="mainTitle text-white"> A long time ago in a galaxy far, far away....</span>
            <div className="ml-auto text-white">
                <div className="dropdown" onClick={handleDropdown}>
                    <button className="btn btn-primary btn-outline-success dropdown-toggle" type="button">
                        Favorites <span className="badge badge-light">{store.favorites.length}</span>
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu dropdown-menu-right" style={{ display: "block" }}>
                            {store.favorites.length > 0 ? (
                                store.favorites.map((item, index) => (
                                    <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                        <Link to={`/people/${item.uid}`}>{item.title}</Link>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => actions.removeFavorite(item.uid)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <span className="dropdown-item">No Favorites</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

