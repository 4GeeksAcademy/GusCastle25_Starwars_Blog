import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
    const { store, actions } = useContext(Context);
    const [planets, setPlanets] = useState({})
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + params.planets_id, { method: "GET" })
            .then((response) => response.json())
            .then((data) => setPlanets(data.result.properties))
            .catch((error) => console.error(error));
        console.log("se cargo vista personajes")
    }, [])
    console.log(params)
    return (
        <div className="jumbotron text-white">
            <h1 className="display-4">{planets.name}: {params.planets_id}</h1>

            <hr className="my-4" />
            <p>name: {planets.name}</p>
            <p>climate: {planets.climate}</p>
            <p>diameter: {planets.diameter}</p>
            <p>population: {planets.population}</p>
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