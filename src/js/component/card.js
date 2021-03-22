import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Star } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardViewCharacter = props => {
	const { store, actions } = useContext(Context);

	let imgName = props.title;
	imgName = imgName.replace(" ", "_");
	let img = "../../img/characters/" + imgName + ".jpg";

	return (
		<div className="col-sm-4">
			<div className="card" style={{ width: "20rem" }}>
				<img
					src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
					className="card-img-top"
					alt="..."
					style={{ width: "20rem" }}
				/>
				<div className="card-body">
					<h5 className="card-title font-weight-bold">{props.title}</h5>
					<p className="card-text text-capitalize">
						<span className="font-weight-bold">Gender:</span> {props.gender}
					</p>
					<p className="card-text text-capitalize">
						<span className="font-weight-bold">Hair-Color:</span> {props.hairColor}
					</p>
					<p className="card-text text-capitalize">
						<span className="font-weight-bold">Eye-Color:</span> {props.eyeColor}
					</p>
					<Link to={"/detailsCharacter/" + props.index} className="btn btn-outline-primary float-left">
						Learn more!
					</Link>
					{/* <a href="#" className="btn btn-outline-primary float-left" /> */}
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => actions.AddFavorites(props.title)}>
						<Star />
					</button>
				</div>
			</div>
		</div>
	);
};

CardViewCharacter.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	index: PropTypes.number
};

export const CardViewPlanets = props => {
	let img = props.Title;
	img = img.replace(" ", "_");
	const { store, actions } = useContext(Context);

	return (
		<div className="col-sm-4">
			<div className="card" style={{ width: "20rem" }}>
				<img
					src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title font-weight-bold">{props.Title}</h5>
					<p className="card-text text-capitalize">
						<span className="font-weight-bold">Population:</span> {props.Population}
					</p>
					<p className="card-text text-capitalize">
						<span className="font-weight-bold">Terrain:</span> {props.Terrain}
					</p>
					<Link to={"/detailsPlanet/" + props.index} className="btn btn-outline-primary float-left">
						Learn more!
					</Link>
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => actions.AddFavorites(props.Title)}>
						<Star />
					</button>
				</div>
			</div>
		</div>
	);
};
CardViewPlanets.propTypes = {
	Title: PropTypes.string,
	Terrain: PropTypes.string,
	Population: PropTypes.string,
	index: PropTypes.number
};
