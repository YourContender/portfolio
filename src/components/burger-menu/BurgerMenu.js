import "./BurgerMenu.scss";

const BurgerMenu = ({ toggleSidebar, showBurgerMenu }) => {
	return (
		<div className={`burger ${showBurgerMenu ? "slideIn" : ""}`}>
			<button className="burger-btn" onClick={() => toggleSidebar(false)}>
				&times;
			</button>

			<div className="burger-container">
				<div className="burger-empty"></div>

				<div className="burger-list">
					<div className="burger-item">
						<a>Home</a>
					</div>
					<div className="burger-item">
						<a>About me</a>
					</div>
					<div className="burger-item">
						<a>Skills</a>
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
