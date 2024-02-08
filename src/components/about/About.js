import me1 from "../../img/me1.jpg";
import me2 from "../../img/me2.jpg";
import me3 from "../../img/me3.jpg";
import Slider from "../slider/Slider";
import "./About.scss";

const About = () => {
	return (
		<div className="about">
			<div className="about-container">
				<div className="about-block">
					<div className="about-block-left">
						<div className="about-block-wrapper first">
							<img className="about-block-img" src={me1} alt="" />
						</div>
						<div className="about-block-wrapper second">
							<img className="about-block-img" src={me2} alt="" />
						</div>
						<div className="about-block-wrapper reserve">
							<img className="about-block-img" src={me3} alt="" />
						</div>
						<div className="slider">
							<Slider />
						</div>
					</div>
					<div className="about-block-middle">
						<h2 className="about-block-middle-h2">About me</h2>
						<span className="about-block-middle-span">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
							iure illum eum illo velit, optio animi veniam corrupti perferendis
							impedit sunt ab ullam. Amet ad enim cumque nulla, numquam nihil
							beatae eum quia mollitia dolor eveniet, magnam ea expedita soluta.
							Velit eius debitis ratione voluptatem mollitia iusto recusandae
							delectus laudantium quaerat vitae tempore rem non nisi veritatis
							porro commodi eaque fugiat exercitationem repudiandae enim,
							voluptatum, possimus, dicta quas? Ipsum, nam!
						</span>
					</div>
					<div className="about-block-right">
						<div className="about-block-wrapper third">
							<img className="about-block-img" src={me3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
