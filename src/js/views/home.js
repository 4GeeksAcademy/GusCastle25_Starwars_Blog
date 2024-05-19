import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";

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
			<h1 className="text-center mt-5 text-white">Naves</h1>
			<div className="row flex-row flex-nowrap overflow-auto mx-3">
				{store.naves.map((item) => <Nave key={item.uid} uid={item.uid} title={item.name} />)}
			</div>

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
