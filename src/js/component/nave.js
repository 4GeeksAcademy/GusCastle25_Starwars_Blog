import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Nave = (props) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(favorite => favorite.uid === props.uid);

    const handleAddFavorites = () => {
        isFavorite ? actions.removeFavorite(props.uid) :
            actions.addFavorites({ title: props.title, uid: props.uid });
    };
    return (
        <div className="card mx-1" style={{ width: "18rem" }}>
            <img src="https://frikipolis.com/wp-content/uploads/2022/09/El-Halco%CC%81n-Milenario-Star-Wars.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary" to={"/nave/" + props.uid}><span className="more">Ver personaje</span></Link>
                <button className="btn btn-outline-warning" onClick={handleAddFavorites}>
                    <i className={isFavorite ? "fa fa-heart text-danger" : "fa fa-heart text-black"}></i>
                </button>
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