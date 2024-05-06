import { Characters } from "../component/characters";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			result: [],
			naves: [
				{
					"uid": "FIRST",
					"name": "white",
					"url": "white"
				},
				{
					"uid": "SECOND",
					"name": "white2",
					"url": "white2"
				}
			],
			personajes: [
				{
					"uid": "FIRST",
					"name": "white",
					"url": "white"
				},
				{
					"uid": "SECOND",
					"name": "white2",
					"url": "white2"
				}
			]

		},
		actions: {
			// Use getActions to call a function within a fuction
			Characters: () => {  
				fetch("https://www.swapi.tech/api/people/" ,{
					method : "GET"
				})
				.then((response) => response.json())
				.then((result) => {
					setStore({characters: result.characters });
					console.log(result.characters)
				}
				)
				.catch((error) => console.error(error));
	},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/starships", { method: "GET" })
				.then((response) => response.json())
				.then((data) => setStore({ naves: data.results }))
				.catch((error) => console.error(error));
				console.log("se cargo desde flux ")
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
