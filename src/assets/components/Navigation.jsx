import { Tabs } from "../data/tabs";
import { useToggleTheme } from "../hooks/UseToggleTheme";
import { Sun, Moon } from "lucide-react";

export const Navigation = ({ activeTab, setActiveTab }) => {
	const { theme, toggleTheme } = useToggleTheme();

	return (
		<nav
			className="fixed top-4 left-1/2 -translate-x-1/2 flex z-50 bg-bg border border-border rounded-2xl shadow-lg px-8 py-3 flex items-center justify-between transition-all duration-300 gap-6"
		>
			{/* Menú de tabs */}
			<div className="flex gap-6">
				{Object.entries(Tabs).map(([property, value]) => (
					<button
						key={property}
						onClick={() => {
							setActiveTab(property);
							const sectionId = `${property.toLowerCase()}-section`;
							const section = document.getElementById(sectionId);
							if (section) {
								section.scrollIntoView({ behavior: "smooth" });
							}
						}}
						className={`relative text-sm font-medium transition-all duration-300 
							${
								activeTab === property
									? "text-accent after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-accent"
									: "text-gray-400 hover:text-accent"
							}`}
					>
						{value}
					</button>
				))}
			</div>

			{/* Botón de tema */}
			<button
				onClick={toggleTheme}
				className="p-2 rounded-full border border-white/20 dark:border-slate-700
				hover:border-accent hover:bg-accent/10 transition-all duration-300"
				title="Cambiar tema"
			>
				{theme === "dark" ? (
					<Sun className="w-5 h-5 text-accent" />
				) : (
					<Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
				)}
			</button>
		</nav>
	);
};
