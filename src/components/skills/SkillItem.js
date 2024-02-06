import react from "../../img/preview/react-svgrepo-com.svg";

const SkillItem = () => {
	return (
		<div className="skills-item">
			<img src={react} alt="react" />
			<span className="skills-item-name">React</span>
			{/* <p className="skills-item-descr">
                React is a JavaScript library for building interactive user
                interfaces and web applications quickly and efficiently with
                significantly less code than you would with vanilla JavaScript.
            </p> */}
		</div>
	);
};

export default SkillItem;
