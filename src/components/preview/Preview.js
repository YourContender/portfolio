import me from "../../img/123.png";
import react from "../../img/preview/react-svgrepo-com.svg";
import redux from "../../img/preview/redux-svgrepo-com.svg";
import sass from "../../img/preview/sass-svgrepo-com.svg";
import js from "../../img/preview/js-svgrepo-com.svg";
import mui from "../../img/preview/material-ui-svgrepo-com.svg";
import ts from "../../img/preview/typescript-svgrepo-com.svg";
import git from "../../img/preview/github-color-svgrepo-com.svg";
import { motion } from "framer-motion";
import "./Preview.scss";
import { useState } from "react";
import Contact from "../modal/contact/Contact";

const Preview = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModalWindow = () => {
		setShowModal(!showModal);
		document.body.style.overflow = showModal ? "auto" : "hidden";
	};

	const textAnimation = {
		hidden: {
			x: -300,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	};

	const skillsAnimation = {
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

	return (
		<motion.div className="preview" initial="hidden" whileInView="visible">
			<div className="preview-container">
				<motion.div className="preview-left">
					<motion.span
						custom={1}
						variants={textAnimation}
						className="preview-left-text"
					>
						Hello
					</motion.span>
					<motion.h1
						custom={2}
						variants={textAnimation}
						className="preview-left-name"
					>
						I`m Sergey Sayenko
					</motion.h1>
					<motion.span
						custom={3}
						variants={textAnimation}
						className="preview-left-descr"
					>
						react frontend developer from Kryvyi Rih.
					</motion.span>
					<motion.button
						custom={4}
						variants={textAnimation}
						className="preview-left-btn"
						onClick={() => toggleModalWindow(!showModal)}
					>
						Contact me
					</motion.button>

					{showModal ? (
						<Contact
							showModal={showModal}
							toggleModalWindow={toggleModalWindow}
						/>
					) : null}
				</motion.div>
				<div className="preview-right">
					<img src={me} alt="" className="preview-me" />
					<motion.div
						custom={3}
						variants={skillsAnimation}
						className="preview-skills react"
					>
						<img src={react} alt="react" />
					</motion.div>
					<motion.div
						custom={2}
						variants={skillsAnimation}
						className="preview-skills redux"
					>
						<img src={redux} alt="react" />
					</motion.div>
					<motion.div
						custom={4}
						variants={skillsAnimation}
						className="preview-skills sass"
					>
						<img src={sass} alt="react" />
					</motion.div>
					<motion.div
						custom={1}
						variants={skillsAnimation}
						className="preview-skills js"
					>
						<img src={js} alt="react" />
					</motion.div>
					<motion.div
						custom={5}
						variants={skillsAnimation}
						className="preview-skills mui"
					>
						<img src={mui} alt="react" />
					</motion.div>
					<motion.div
						custom={6}
						variants={skillsAnimation}
						className="preview-skills git"
					>
						<img src={git} alt="react" />
					</motion.div>
					<motion.div
						custom={7}
						variants={skillsAnimation}
						className="preview-skills ts"
					>
						<img src={ts} alt="react" />
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Preview;
