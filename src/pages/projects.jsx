import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Some of my ideas that I could bring to life.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on multiple projects throughout the years: 
							from basic guessing game on Python solely based on conditionals, to 
							some more advanced stuff like a fitness app with React Native. 
							Below, there is a selection of some of the recent projects that I have 
							been working on. Surely, I have more interesting projects on my 
							GitHub, but I chose to display these ones as they represent 
							my intent of developing new skills and working with a diverse range of tools. 
							All of them are open-source and available publicly on Github, so feel free to 
							fork, copy, colaborate, or whatever. Also, if you have an interesting 
							idea for a project, feel free to reach out either by email or 
							a LinkedIn message and I will be more than willing to collaborate with you. 
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
