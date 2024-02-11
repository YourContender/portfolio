import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Preview from "./components/preview/Preview";
import Skills from "./components/skills/Skills";

const App = () => {
	return (
		<div>
			<Header />
			<Preview />
			<Skills />
			<About />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default App;
