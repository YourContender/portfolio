import { data } from "../../data";
import SkillItem from "./SkillItem";
import "./Skills.scss";

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<div className="skills-container">
				<div className="skills-title">
					<h1>Most often I use:</h1>
				</div>
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
