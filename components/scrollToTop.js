
import React, { useEffect, useState } from "react";

import style from "./scrollToTop.module.css"

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.pageYOffset > 500);
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<a className={style.scrollToTop} onClick={scrollToTop}><img src="/images/icons/up.svg" loading='lazy' alt="up" /></a>
			)}
		</div>
	);
}
