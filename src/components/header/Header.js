import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../img/logo.png";
import "./Header.scss";
import BurgerMenu from "../burger-menu/BurgerMenu";

const Header = () => {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false);

	const toggleSidebar = () => {
		setShowBurgerMenu(!showBurgerMenu);
		document.body.style.overflow = showBurgerMenu ? "auto" : "hidden";
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="header-items">
					<div className="header-item">
						<a>Home</a>
					</div>
					<div className="header-item">
						<a onClick={() => scrollToSection("about")}>About me</a>
					</div>
					<div className="header-item">
						<a onClick={() => scrollToSection("skills")}>Skills</a>
					</div>
					<div className="header-item">
						<a>Portfolio</a>
					</div>
					<div className="header-item">
						<a>Contact</a>
					</div>

					<div className="header-burger">
						<RxHamburgerMenu onClick={() => toggleSidebar(true)} />
						{showBurgerMenu && (
							<BurgerMenu
								showBurgerMenu={showBurgerMenu}
								toggleSidebar={toggleSidebar}
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
