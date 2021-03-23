import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Trash } from "react-bootstrap-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://cdn.iconscout.com/icon/free/png-512/starwars-5-555964.png"
						style={{ width: "80px" }}
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						onClick={() => ShowHideDropDown()}>
						<img
							src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-41-512.png"
							style={{ width: "50px" }}
						/>
						Favorites <span className="bg-light text-secondary p-1 rounded">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ width: "230px" }}>
						{store.favorites.length == 0 ? (
							<span className="float-left">Empty</span>
						) : (
							store.favorites.map(function(eleme, index) {
								return (
									<a className="dropdown-item border-bottom" key={index + "list"}>
										{eleme}
										<span className="float-right" onClick={() => actions.RemoveFavorites(index)}>
											<Trash />
										</span>
									</a>
								);
							})
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

const ShowHideDropDown = () => {
	let drop = document.querySelector(".dropdown-menu");
	if (drop.style.display === "none") {
		drop.style.display = "block";
	} else {
		drop.style.display = "none";
	}
};
