import React from "react";
import "../../styles/home.css";

import { Link } from "react-router-dom";

export const Characters = (props) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://media.c5n.com/p/3535e0d7a056bcc9ceab3dc41f195e65/adjuntos/326/imagenes/000/068/0000068042/790x0/smart/star-warsjpgjpg.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.uid}</p>

                <Link className="btn btn-primary" to={"/people/" + props.uid}>
                    <span>Ver personaje</span>
                </Link>
            </div>
        </div>
    );
};
