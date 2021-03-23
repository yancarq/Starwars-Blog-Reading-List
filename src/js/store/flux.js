const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			characters: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			AddFavorites: name => {
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const favorit = store.favorites;
				//	if (favorit.findIndex(name) < 0) {
				setStore({ favorites: favorit.concat(name) });
				// } else {
				// 	alert("Ya esta agregado, querido Padawan.");
				// }
			},
			RemoveFavorites: val => {
				const store = getStore();
				const favorites = store.favorites.filter((elm, index) => {
					return val != index;
				});

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				setStore({ favorites: favorites.concat() });
			},

			loadAllCharacters: async () => {
				let lista = [];
				const result = await fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(response => {
						lista = response.results;
					})
					.catch(error => alert("El servidor se unió al lado oscuro")); //if is error.

				const resultProp = await Promise.all(
					lista.map(async function(elem, index) {
						const res = await fetch(elem.url)
							.then(res => res.json())
							.then(response => (elem.properties = response.result))
							.catch(error => console.log("Error al conectar con el servidor")); //if is error.
					})
				);

				setStore({ characters: lista });
			},

			loadAllPlanets: async () => {
				let lista = [];
				const result = await fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(response => {
						lista = response.results;
					})
					.catch(error => console.log("Error al conectar con el servidor")); //if is error.
				const resultProp = await Promise.all(
					lista.map(async function(elem, index) {
						const res = await fetch(elem.url)
							.then(res => res.json())
							.then(response => (elem.properties = response.result))
							.catch(error => console.log("Error al conectar con el servidor")); //if is error.
					})
				);
				setStore({ planets: lista });
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
