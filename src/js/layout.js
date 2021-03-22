import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { DetailsCharacter, DetailsPlanet } from "./views/details";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "../styles/layout.scss";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/detailsCharacter/:index">
							<DetailsCharacter />
						</Route>
						<Route exact path="/detailsPlanet/:index">
							<DetailsPlanet />
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			<video autoPlay loop muted id="video">
				<source src="https://www.youtube.com/watch?v=tGsKzZtRwxw" type="video/mp4" />
			</video>
		</div>
	);
};

export default injectContext(Layout);
