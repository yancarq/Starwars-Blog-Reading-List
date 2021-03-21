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
			AddFavorites: () => {},
			loadAllCharacters: async () => {
				let result = await fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					//.then(response => setStore({characters: JSON.stringify(response.results)}) )
					.then(response => {
						let lista = response.results;
						lista.map(function(elem, index) {
							fetch(elem.url)
								.then(res => res.json())
								.then(response => (elem.properties = response.result))
								.catch(error => console.log("Error 1", error)); //if is error.
						});
						setStore({ characters: lista });
					})
					.catch(error => console.log("Error 1", error)); //if is error.
			},

			loadPlanets: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(response => setStore(JSON.stringify(response.results)))
					.catch(error => console.error("Error:", error));
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
