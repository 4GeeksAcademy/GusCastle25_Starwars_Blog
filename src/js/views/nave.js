import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
	const [starship, setStarship] = useState({})
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/starships/" + params.nave_id, { method: "GET" })
			.then((response) => response.json())
			.then((data) => setStarship(data.result.properties))
			.catch((error) => console.error(error));
		console.log("se cargo vista naves")
	}, [])
	console.log(params)
	return (
		<div className="jumbotron text-white">
			<h1 className="display-4">{starship.name}: {params.nave_id}</h1>

			<hr className="my-4" />
			<p>Model: {starship.model}</p>
			<p>manufacturer: {starship.manufacturer}</p>
			<p>name: {starship.name}</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Nave.propTypes = {
	match: PropTypes.object
};
