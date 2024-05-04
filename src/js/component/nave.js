import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Characters } from "./characters";

export const Nave = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Nave info.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <Link to={"/single/1"}>
                    <span>Ver nave</span>
                </Link>
            </div>
        </div>
    );
};
/*<nav className="navbar bg-transparent p-2">
    <Link to="/">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
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
</nav>*/