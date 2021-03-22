import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsCharacter = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = store.characters[params.index];
	let ram = Math.floor(Math.random() * 4);
	return (
		<div className="jumbotron">
			<div className="row">
				<img
					src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
					className="float-left card-img-top mr-5"
					alt="..."
					style={{ width: "32rem", height: "30rem" }}
				/>
				<div className="col">
					<h1 className="display-4 text-center">{character.name}</h1>
					<p style={{ fontSize: 25 }}>{arraFrases[ram]}</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="row col-12 d-flex justify-content-center">
				<div className="col text-danger mx-2">
					<h5>Name</h5>
					<p>{character.name}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Birth Year</h5>
					<p>{character.properties.properties.birth_year}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Gender</h5>
					<p>{character.properties.properties.gender}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Height</h5>
					<p>{character.properties.properties.height}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Skin Color</h5>
					<p>{character.properties.properties.skin_color}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Eye Color</h5>
					<p>{character.properties.properties.eye_color}</p>
				</div>
			</div>
			<hr className="my-5 text-danger" />
			<Link to="/">
				<span className="btn btn-secondary btn-lg" href="#" role="button">
					<img
						src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-41-512.png"
						style={{ width: "80px" }}
					/>
					Back home
				</span>
			</Link>
		</div>
	);
};

DetailsCharacter.propTypes = {
	match: PropTypes.object
};

// Planets

export const DetailsPlanet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let planet = store.planets[params.index];
	let ram = Math.floor(Math.random() * 4);
	return (
		<div className="jumbotron">
			<div className="row">
				<img
					src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
					className="float-left card-img-top mr-5"
					alt="..."
					style={{ width: "32rem", height: "30rem" }}
				/>
				<div className="col">
					<h1 className="display-4 text-center">{planet.name}</h1>
					<p style={{ fontSize: 25 }}>{arraFrases[ram]}</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="row col-12 d-flex justify-content-center">
				<div className="col text-danger mx-2">
					<h5>Name</h5>
					<p>{planet.name}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Climate</h5>
					<p>{planet.properties.properties.climate}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Population</h5>
					<p>{planet.properties.properties.population}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Orbital Period</h5>
					<p>{planet.properties.properties.orbital_period}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Rotation Period</h5>
					<p>{planet.properties.properties.rotation_period}</p>
				</div>
				<div className="col text-danger mx-2">
					<h5>Diameter</h5>
					<p>{planet.properties.properties.diameter}</p>
				</div>
			</div>
			<hr className="my-5 text-danger" />
			<Link to="/">
				<span className="btn btn-secondary btn-lg" href="#" role="button">
					<img
						src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-41-512.png"
						style={{ width: "80px" }}
					/>
					Back home
				</span>
			</Link>
		</div>
	);
};

DetailsPlanet.propTypes = {
	match: PropTypes.object
};

let arraFrases = [
	"«El miedo es el camino hacia el Lado Oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento. Percibo mucho miedo en ti» —Yoda a Anakin en el Consejo Jedi.",
	"«Miedo, el miedo atrae al temeroso, al fuerte, al débil, al inocente, al corrupto. El miedo, el miedo es mi aliado» — Darth Maul.",
	"«Concéntrate en el momento. Siente, no pienses, usa tu instinto» —Qui-Gon Jinn a Anakin Skywalker, antes de la carrera en Boonta Eve.",
	"«La fuerza está contigo joven Skywalker... pero todavía no eres un Jedi» —Darth Vader."
];
