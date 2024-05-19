import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Nave } from "../component/nave";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";
import { BackToTopButton } from "../component/tobutton";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [starship, setStarship] = useState([])

	return (
		<div className="text-center mt-5">
			<h1 className="text-center mt-5 text-white">Characters</h1>
			<div className="row flex-row flex-nowrap overflow-auto mx-3">
				{store.personajes.map((item) => <Characters key={item.uid} uid={item.uid} title={item.name} />)}
			</div>
			{/*<Planet />*/}
			<h1 className="text-center mt-5 text-white">Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto mx-3">
				{store.planet.map((item) => <Planets key={item.uid} uid={item.uid} title={item.name} />)}
			</div>
			<h1 className="text-center mt-5 text-white">Starships</h1>
			<div className="row flex-row flex-nowrap overflow-auto mx-3">
				{store.naves.map((item) => <Nave key={item.uid} uid={item.uid} title={item.name} />)}
			</div>
			<BackToTopButton />
		</div>
	);
};
