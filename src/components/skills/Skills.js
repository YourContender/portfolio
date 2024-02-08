import { data } from "../../data";
import SkillItem from "./SkillItem";
import "./Skills.scss";

const Skills = () => {
	return (
		<div className="skills">
			<div className="skills-container">
				<h1 className="skills-title">Most often I use:</h1>
				<div className="skills-list">
					{data.map((item) => (
						<SkillItem item={item} />
					))}
				</div>

				<button className="skills-btn">Full list</button>
			</div>
		</div>
	);
};

export default Skills;
