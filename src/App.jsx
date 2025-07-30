import { useState } from "react";
import "./App.css";
import { Tabs } from "./assets/components/Navigation/Tabs";
import { Navigation } from "./assets/components/Navigation/Navigation";
import { Home } from "./assets/components/Home/Home";
import { Experience } from "./assets/components/Experience/Experience";
import { cvData } from "./assets/data/cvData";
import { Education } from "./assets/components/Education/Education";

const INITIAL_TAB = Object.keys(Tabs)[0];

export const App = () => {
	const [activeTab, setActiveTab] = useState(INITIAL_TAB);

	return (
		<>
			<div className="app-container">
				<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

				<section id="home-section">
					<Home />
				</section>

				<section id="experience-section">
					<Experience data={cvData.experience} />
				</section>

				<section id="education-section">
					<Education data={cvData.education} />
				</section>
			</div>
		</>
	);
};

export default App;
