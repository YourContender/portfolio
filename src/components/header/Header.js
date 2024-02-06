import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
	const [burgerMenu, setBurgerMenu] = useState(false);

	return (
		<header className="header">
			<div className="header-container">
				<div className="header-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="header-items">
					<div className="header-item">
						<span>Home</span>
					</div>
					<div className="header-item">
						<span>About me</span>
					</div>
					<div className="header-item">
						<span>Skills</span>
					</div>
					<div className="header-item">
						<span>Portfolio</span>
					</div>
					<div className="header-item">
						<span>Contact</span>
					</div>

					<div className="header-burger">
						<RxHamburgerMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
