import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardViewCharacter, CardViewPlanets } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<h4 className="text-danger">Characters</h4>
				<div className="inline">
					{store.characters.map(function(eleme, index) {
						return (
							<CardViewCharacter
								title={eleme.name}
								gender={eleme.properties.properties.gender}
								hairColor={eleme.properties.properties.hair_color}
								eyeColor={eleme.properties.properties.eye_color}
								index={index}
								key={index + "character"}
							/>
						);
					})}
				</div>
				<div className="mt-5 mb-5">
					<h4 className="text-danger">Planets</h4>
					<div className="inline">
						{store.planets.map(function(eleme, index) {
							return (
								<CardViewPlanets
									Title={eleme.name}
									Population={eleme.properties.properties.population}
									Terrain={eleme.properties.properties.terrain}
									index={index}
									key={index + "planet"}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
