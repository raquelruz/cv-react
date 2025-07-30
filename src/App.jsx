import { useState } from "react";
import "./App.css"
import { Tabs } from "./assets/components/Tabs";
import { Navigation } from "./assets/components/Navigation";
import { Home } from "./assets/components/Home/Home";

const INITIAL_TAB = Object.keys(Tabs)[0];

export const App = () => {
	const [activeTab, setActiveTab] = useState(INITIAL_TAB);
	
	return (
		<>
			<div className="app-container">
				<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			
			<section id="Home-section">
				<Home />
			</section>
			</div>
		</>
	);
};

export default App;
