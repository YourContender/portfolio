import { motion } from "framer-motion";
import prod1 from "../../img/app1.png";

const PortfolioItem = () => {
	const cardAnimation = {
		hidden: {
			y: 100,
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
			<img src={prod1} alt="" />
			<div className="portfolio-item-text">
				<h2 className="portfolio-item-text-h">Title project</h2>
				<p className="portfolio-item-text-span">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit
					iste? Quasi enim optio quod delectus officiis aspernatur quas ab.
				</p>

				<div className="portfolio-item-text-links">
					<a className="portfolio-item-text-link" href="#">
						Website
					</a>
					<a className="portfolio-item-text-link" href="#">
						Repository
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioItem;
