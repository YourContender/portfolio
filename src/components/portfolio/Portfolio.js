import { useState } from "react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import { cards } from "../../data";

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<div className="portfolio-list">
				{cards.map((item, index) => {
					return <PortfolioItem item={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Portfolio;
