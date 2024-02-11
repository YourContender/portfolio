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
						<a>Home</a>
					</div>
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
					<span className="footer-contacts-elem">
						<TfiEmail />
						<p className="footer-contacts-elem-value">
							sayenkosergey12345@gmail.com
						</p>
					</span>
					<span className="footer-contacts-elem">
						<FaInstagram />
						<p className="footer-contacts-elem-value">your_contender</p>
					</span>
					<span className="footer-contacts-elem">
						<FaTelegramPlane />
						<p className="footer-contacts-elem-value">@your_contender</p>
					</span>
					<span className="footer-contacts-elem">
						<BsFillTelephoneInboundFill />
						<p className="footer-contacts-elem-value">068-945-01-66</p>
					</span>
					<span className="footer-contacts-elem">
						<FaGithub />
						<p className="footer-contacts-elem-value">YourContender</p>
					</span>
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
