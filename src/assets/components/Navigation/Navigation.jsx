import "./Navigation.css";
import { Tabs } from "./Tabs";

export const Navigation = ({ activeTab, setActiveTab }) => {
	return (
		<nav className="nav-container">
			<div className="logo-container dont-show-mobile">
				<p className="nav-logo dont-show-mobile">Raquel</p>
				<p className="nav-logo-contrast dont-show-mobile">Ruiz</p>
			</div>

			<div className="tab-container">
				{Object.entries(Tabs).map(([property, value]) => (
					<button
						key={property}
						className={`tab ${activeTab === property ? "active" : ""}`}
						onClick={() => setActiveTab(property)}
					>
						{value}
					</button>
				))}
			</div>
		</nav>
	);
};
