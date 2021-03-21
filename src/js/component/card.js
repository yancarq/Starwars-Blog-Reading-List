import React from "react";
import PropTypes from "prop-types";

import { Star } from "react-bootstrap-icons";

export const CardView = props => {
	return (
		<div className="col-sm-4">
			<div className="card" style={{ width: "20rem" }}>
				<img
					src="http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">props.description</p>
					<a href="#" className="btn btn-outline-primary float-left">
						Learn more!
					</a>
					<a href="#" className="btn btn-outline-warning float-right">
						<Star />
					</a>
				</div>
			</div>
		</div>
	);
};

CardView.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};
