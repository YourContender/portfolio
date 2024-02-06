import me from "../../img/123.png";
import react from "../../img/preview/react-svgrepo-com.svg";
import redux from "../../img/preview/redux-svgrepo-com.svg";
import sass from "../../img/preview/sass-svgrepo-com.svg";
import js from "../../img/preview/js-svgrepo-com.svg";
import mui from "../../img/preview/material-ui-svgrepo-com.svg";
import ts from "../../img/preview/typescript-svgrepo-com.svg";
import git from "../../img/preview/github-color-svgrepo-com.svg";
import "./Preview.scss";

const Preview = () => {
	return (
		<div className="preview">
			<div className="preview-container">
				<div className="preview-left">
					<span className="preview-left-text">Hello</span>
					<h1 className="preview-left-name">I`m Sergey Sayenko</h1>
					<span className="preview-left-descr">
						react frontend developer from Kryvyi Rih.
					</span>
					<button className="preview-left-btn">Contact me</button>
				</div>
				<div className="preview-right">
					<img src={me} alt="" className="preview-me" />
					<div className="preview-skills react">
						<img src={react} alt="react" />
					</div>
					<div className="preview-skills redux">
						<img src={redux} alt="react" />
					</div>
					<div className="preview-skills sass">
						<img src={sass} alt="react" />
					</div>
					<div className="preview-skills js">
						<img src={js} alt="react" />
					</div>
					<div className="preview-skills mui">
						<img src={mui} alt="react" />
					</div>
					<div className="preview-skills git">
						<img src={git} alt="react" />
					</div>
					<div className="preview-skills ts">
						<img src={ts} alt="react" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
