import react from "../../img/preview/react-svgrepo-com.svg";
import "./Skills.scss";

const SkillItem = ({ item }) => {
	return (
		<div className={`skills-item ${item.class}`}>
			<div className="skills-wrapper">
				<div className="skills-wrapper-front">
					<img src={item.img} alt="react" />
					<span className="skills-wrapper-name">{item.name}</span>
				</div>
				<div className="skills-wrapper-back">
					<p className="skills-wrapper-descr">{item.descr}</p>
				</div>
			</div>
		</div>
	);
};

export default SkillItem;
