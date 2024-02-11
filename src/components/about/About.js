import me1 from "../../img/me1.jpg";
import me2 from "../../img/me2.jpg";
import me3 from "../../img/me3.jpg";
import Slider from "../slider/Slider";
import { motion } from "framer-motion";
import "./About.scss";

const photoAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const textAnimation = {
	hidden: {
		y: -500,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.3 },
	}),
};

const About = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			className="about"
			id="about"
		>
			<div className="about-container">
				<div className="about-block">
					<div className="about-block-left">
						<motion.div
							custom={1}
							variants={photoAnimation}
							className="about-block-wrapper first"
						>
							<img className="about-block-img" src={me1} alt="" />
						</motion.div>
						<motion.div
							custom={2}
							variants={photoAnimation}
							className="about-block-wrapper second"
						>
							<img className="about-block-img" src={me2} alt="" />
						</motion.div>
						<motion.div
							custom={3}
							variants={photoAnimation}
							className="about-block-wrapper reserve"
						>
							<img className="about-block-img" src={me3} alt="" />
						</motion.div>
						<div className="slider">
							<Slider />
						</div>
					</div>
					<motion.div
						variants={textAnimation}
						custom={2}
						className="about-block-middle"
					>
						<h2 className="about-block-middle-h2">About me</h2>
						<span className="about-block-middle-span">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
							iure illum eum illo velit, optio animi veniam corrupti perferendis
							impedit sunt ab ullam. Amet ad enim cumque nulla, numquam nihil
							beatae eum quia mollitia dolor eveniet, magnam ea expedita soluta.
							Velit eius debitis ratione voluptatem mollitia iusto recusandae
							delectus laudantium quaerat vitae tempore rem non nisi veritatis
							porro commodi eaque fugiat exercitationem repudiandae enim,
							voluptatum, possimus, dicta quas? Ipsum, nam!
						</span>
					</motion.div>
					<div className="about-block-right">
						<motion.div
							custom={3}
							variants={photoAnimation}
							className="about-block-wrapper third"
						>
							<img className="about-block-img" src={me3} alt="" />
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
