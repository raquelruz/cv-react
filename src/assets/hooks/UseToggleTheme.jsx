// src/hooks/useToggleTheme.js
import { useEffect, useState } from "react";

export const useToggleTheme = () => {
	const getInitial = () => {
		if (typeof window === "undefined") return "light";
		const saved = localStorage.getItem("theme");
		if (saved) return saved;
		return document.documentElement.classList.contains("dark") ? "dark" : "light";
	};

	const [theme, setTheme] = useState(getInitial);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => setTheme((theme) => (theme === "dark" ? "light" : "dark"));

	return { theme, toggleTheme };
};
