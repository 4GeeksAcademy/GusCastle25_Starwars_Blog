import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState({})
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + params.planet_id, { method: "GET" })
            .then((response) => response.json())
            .then((data) => setPlanet(data.result.properties))
            .catch((error) => console.error(error));
        console.log("se cargo vista personajes")
    }, [])
    console.log(params)
    return (
        <div className="jumbotron text-white">
            <h1 className="display-4">{planet.name}: {params.planet_id}</h1>

            <hr className="my-4" />
            <p>name: {planet.name}</p>
            <p>climate: {planet.climate}</p>
            <p>diameter: {planet.diameter}</p>
            <p>population: {planet.population}</p>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Planets.propTypes = {
    match: PropTypes.object
};