import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./vlab.png"
								alt="vlab"
								className="work-image"
							/>
							<div className="work-title">Penn Venture Lab</div>
							<div className="work-subtitle">
								Operations Associate
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./penn.jpeg"
								alt="penn"
								className="work-image"
							/>
							<div className="work-title">Penn Crypto and Society Lab</div>
							<div className="work-subtitle">
								Research Assistant
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./btg.png"
								alt="btg"
								className="work-image"
							/>
							<div className="work-title">BTG Pactual</div>
							<div className="work-subtitle">
								IT Open Finance Summer Intern 
							</div>
							<div className="work-duration">2024</div>
						</div>
						<div className="work">
							<img
								src="./caldeira.png"
								alt="caldeira"
								className="work-image"
							/>
							<div className="work-title">Instituto Caldeira</div>
							<div className="work-subtitle">
								Community Manager
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
						<div className="work">
							<img
								src="./matricial.jpeg"
								alt="matricial"
								className="work-image"
							/>
							<div className="work-title">Matricial Engineering Consulting</div>
							<div className="work-subtitle">
								Software Engineering Summer Intern
							</div>
							<div className="work-duration">2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
