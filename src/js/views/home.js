import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [starships, setStarships] = useState([])

	return (
		<div className="text-center mt-5">
			<Characters />
			{/*<Planet />*/}
			<Nave title="Nave comp 1" />
			<h1>Naves desde FLUX</h1>
			{store.naves.map((item) => <Nave key={item.uid} title={item.name} />)}

			{/*<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>*/}
		</div>
	);
};
