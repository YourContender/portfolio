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
		y: -100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
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
							Hello again. I am a front-end developer from the beautiful city of
							Kryvyi Rih, my journey began three years ago, as soon as I brought
							the first "Hello World" to the console. Step by step, I learned
							new things, watched various tutorials, read literature, asked
							double-witted friends about things that were not clear. Then there
							were courses, a very large number, I looked at how other
							developers think and work, analyzed them and tried to become like
							that. Then there was an internship at the "Onyx" company, where we
							spent 5 months, the result of which was an interview with the
							possibility of getting a job. I successfully passed the internship
							and the interview, but I could not move to another city because of
							the war, so I had to refuse. A "trainee base" appeared on the
							horizon, where I could further improve my skills, because real
							projects were being developed in the team.
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
