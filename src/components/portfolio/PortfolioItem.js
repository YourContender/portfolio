import { motion } from "framer-motion";

const PortfolioItem = ({ item }) => {
	const cardAnimation = {
		hidden: {
			y: 70,
			opacity: 0,
		},
		visible: (custom) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			className="portfolio-item"
			custom={1}
			variants={cardAnimation}
		>
			<img src={item.img} alt="" />
			<div className="portfolio-item-text">
				<div>
					<h2 className="portfolio-item-text-h">{item.h2}</h2>
				</div>
				<div>
					<p className="portfolio-item-text-span">{item.descr}</p>
				</div>

				<div className="portfolio-item-use">
					{item.tech.map((elem) => {
						return <span>{elem}</span>;
					})}
				</div>

				<div className="portfolio-item-text-links">
					{item.website !== "#" && (
						<a
							className="portfolio-item-text-link"
							href={item.website}
							target="_blank"
						>
							Website
						</a>
					)}
					<a
						className="portfolio-item-text-link"
						href={item.repo}
						target="_blank"
					>
						Repository
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioItem;
