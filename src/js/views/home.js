import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardView } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadAllCharacters();
	}, []);

	let componetCard = "";

	return (
		<div>
			<div className="container">
				<h4 className="text-danger">Characters</h4>
				<div className="inline">
					{store.characters.map(function(eleme, index) {
						return <CardView title={eleme.title} key={index + "character"} />;
					})}
				</div>
				<div className="mt-5">
					<h4 className="text-danger">Planets</h4>
					<div className="inline">
						{store.characters.map(function(eleme, index) {
							return <CardView title={eleme.title} key={index + "planet"} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
