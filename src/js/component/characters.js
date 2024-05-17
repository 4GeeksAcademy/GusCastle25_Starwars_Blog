import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = (props) => {
    const { store, actions } = useContext(Context);
    

    return (
        <div className="card mx-1" style={{ width: "18rem" }}>
            <img src="https://media.c5n.com/p/3535e0d7a056bcc9ceab3dc41f195e65/adjuntos/326/imagenes/000/068/0000068042/790x0/smart/star-warsjpgjpg.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <Link className="btn btn-primary" to={"/people/" + props.uid}><span className="more">Ver personaje</span></Link>
                <button onClick={() => actions.addFavorites(props.title) }>Cambiar msj</button>
            </div>
        </div>
    );
};
