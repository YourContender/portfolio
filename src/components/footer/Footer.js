import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-nav">
					<div className="footer-nav-item">
						<a onClick={() => scrollToSection("about")}>About me</a>
					</div>
					<div className="footer-nav-item">
						<a onClick={() => scrollToSection("skills")}>Skills</a>
					</div>
					<div className="footer-nav-item">
						<a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
					</div>
				</div>
				<div className="footer-contacts">
					<a
						href="mailto:sayenkosergey12345@gmail.com"
						className="footer-contacts-elem"
						target="_blank"
					>
						<TfiEmail />
					</a>
					<a
						href="https://www.instagram.com/your_contender/"
						className="footer-contacts-elem"
						target="_blank"
					>
						<FaInstagram />
					</a>
					<a
						href="https://t.me/your_contender"
						className="footer-contacts-elem"
						target="_blank"
					>
						<FaTelegramPlane />
					</a>
					<a
						className="footer-contacts-elem"
						href="tel:0689123155"
						target="_blank"
					>
						<BsFillTelephoneInboundFill />
					</a>
					<a
						className="footer-contacts-elem"
						href="https://github.com/YourContender"
						target="_blank"
					>
						<FaGithub />
					</a>
				</div>
				<div className="footer-other">
					<button
						onClick={() => scrollToSection("header")}
						className="footer-other-btn"
					>
						<FaArrowUp />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
