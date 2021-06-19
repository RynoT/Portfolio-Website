
import Head from "next/head"
import Header from "./header"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop"

import style from './layout.module.css'

export default function Layout({ children, home }) {
	return (
		<div className={style.layout}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="author" content="Ryan Thomson" />
				<meta name="keywords" content="Portfolio, Games, Programming" />
				<meta name="description" content="The portfolio website for Ryan Thomson." />
  				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

				<meta property="og:title" content="Ryan Thomson | Portfolio | Games Programmer" />
				<meta property="og:description" content="The portfolio website for Ryan Thomson." />
				<meta property="og:image" content="/images/ogimage.png" />
				<meta property="og:url" content="https://ryan.makegames.dev" />
				{/* <meta property="og:site_name" content="Ryan Thomson | Portfolio | Games Programmer" /> */}

				<meta name="twitter:title" content="Ryan Thomson | Portfolio | Games Programmer" />
				<meta name="twitter:description" content="The portfolio website for Ryan Thomson." />
				<meta name="twitter:image" content="/images/ogimage.png" />
				<meta name="twitter:image:alt" content="Ryan Thomson Portfolio" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ryanthomson0" />
			</Head>

			<Header />

			<main className={style.container}>
				{children}
			</main>

			<ScrollToTop />

			<Footer />
		</div>
	)
}