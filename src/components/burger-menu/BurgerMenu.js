import "./BurgerMenu.scss";

const BurgerMenu = ({ toggleSidebar, showBurgerMenu }) => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		toggleSidebar();
	};

	return (
		<div className={`burger ${showBurgerMenu ? "slideIn" : ""}`}>
			<button className="burger-btn" onClick={() => toggleSidebar(false)}>
				&times;
			</button>

			<div className="burger-container">
				<div className="burger-list">
					<div className="burger-item">
						<a>Home</a>
					</div>
					<div className="burger-item">
						<a onClick={() => scrollToSection("about")}>About me</a>
					</div>
					<div className="burger-item">
						<a onClick={() => scrollToSection("skills")}>Skills</a>
					</div>
					<div className="burger-item">
						<a>Portfolio</a>
					</div>
					<div className="burger-item">
						<a>Contact</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
