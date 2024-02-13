import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import me1 from "../../../img/me1.jpg";
import { motion } from "framer-motion";
import "./Contact.scss";

const Contact = ({ showModal, toggleModalWindow }) => {
	const modalAnimation = {
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

	const imageAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.5 },
		}),
	};

	const textAnimation = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.4 },
		}),
	};

	return (
		<motion.div initial="hidden" whileInView="visible" className="contact">
			<motion.div
				variants={modalAnimation}
				custom={1}
				className="contact-container"
			>
				<div className="contact-up">
					<h2>Contact me</h2>
					<button
						className="contact-btn"
						onClick={() => toggleModalWindow(showModal)}
					>
						&times;
					</button>
				</div>
				<div className="contact-info">
					<motion.div
						custom={1}
						variants={imageAnimation}
						className="contact-img"
					>
						<img src={me1} alt="" />
					</motion.div>

					<div className="contact-public">
						<a
							className="contact-elem"
							href="mailto:sayenkosergey12345@gmail.com"
							target="_blank"
						>
							<TfiEmail />
							<motion.p
								custom={1}
								variants={textAnimation}
								className="contact-elem-value"
							>
								sayenkosergey12345@gmail.com
							</motion.p>
						</a>
						<a
							className="contact-elem"
							href="https://www.instagram.com/your_contender/"
							target="_blank"
						>
							<FaInstagram />
							<motion.p
								custom={2}
								variants={textAnimation}
								className="contact-elem-value"
							>
								your_contender
							</motion.p>
						</a>
						<a
							className="contact-elem"
							href="https://t.me/your_contender"
							target="_blank"
						>
							<FaTelegramPlane />
							<motion.p
								custom={3}
								variants={textAnimation}
								className="contact-elem-value"
							>
								@your_contender
							</motion.p>
						</a>
						<a className="contact-elem" href="tel:0689123155" target="_blank">
							<BsFillTelephoneInboundFill />
							<motion.p
								custom={4}
								variants={textAnimation}
								className="contact-elem-value"
							>
								068-945-01-66
							</motion.p>
						</a>
						<a
							className="contact-elem"
							href="https://github.com/YourContender"
							target="_blank"
						>
							<FaGithub />
							<motion.p
								custom={5}
								variants={textAnimation}
								className="contact-elem-value"
							>
								YourContender
							</motion.p>
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Contact;
