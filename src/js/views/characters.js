import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState({})
	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.people_id, { method: "GET" })
			.then((response) => response.json())
			.then((data) => setPeople(data.result.properties))
			.catch((error) => console.error(error));
		console.log("se cargo vista personajes")
	}, [])
	console.log(params)
	return (
		<div className="jumbotron text-white">
			<h1 className="display-4">{people.name}: {params.people_id}</h1>

			<hr className="my-4" />
			<p>name: {people.name}</p>
			<p>eye_color: {people.eye_color}</p>
			<p>height: {people.height}</p>
			<p>homeworld: {people.homeworld}</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Characters.propTypes = {
	match: PropTypes.object
};
