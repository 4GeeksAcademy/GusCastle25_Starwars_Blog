import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Nave = (props) => {
    const { store, actions } = useContext(Context);

    const [imageError, setImageError] = useState(false);

    const isFavorite = store.favorites.some(favorite => favorite.uid === props.uid);

    const handleAddFavorites = () => {
        isFavorite ? actions.removeFavorite(props.uid) :
            actions.addFavorites({ title: props.title, uid: props.uid });
    };
    const handleImageError = () => {
        setImageError(true);
    };
    return (
        <div className="card mx-1" style={{ width: "18rem" }}>
            {imageError ? ( // Si hay un error al cargar la imagen, mostrar una imagen alternativa
                <img
                    src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Millennium-Falcon-1.jpg"
                    className="card-img-top"
                    alt="Character"
                />
            ) : (
                <img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} className="card-img-top" alt="..." onError={handleImageError} />
            )}
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