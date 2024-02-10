import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="portfolio-list">
				<PortfolioItem />
				<PortfolioItem />
				<PortfolioItem />
			</div>
		</div>
	);
};

export default Portfolio;
