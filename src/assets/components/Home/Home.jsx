import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
	const [index, setIndex] = useState(0);

	const words = ["vida", "creatividad", "color", "sentido", "impacto"];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="home-section" className="home-section">
			<div className="home-content">
				<div className="home-text">
					<p>
						¡Hola! Soy <span className="home-accent">Raquel</span>, Full Stack Developer con alma de
						diseñadora.
					</p>

					<h1 className="main-title">
						Démosle{" "}
						<span key={words[index]} className="animated-word">
							{words[index]}
						</span>{" "}
						a tu visión
					</h1>
				</div>
			</div>
		</section>
	);
};
