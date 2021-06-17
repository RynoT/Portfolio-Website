
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
				<meta name="description" content="Ryan Thomson portfolio website. WIP." />
				<meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
			</Head>
			<Header/>
			<main className={style.container}>{children}</main>
			<ScrollToTop/>
			<Footer/>
			
			{/* <header className={styles.header}>
				{home ? (
					<>
						<img src="/images/profile.jpg" className={utilStyles.borderCircle} height="144" width="144" alt={name} />
						<h1 className={utilStyles.heading2X1}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img src="/images/profile.jpg" className={utilStyles.borderCircle} height="108" width="108" alt={name} />
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>- Back to Home</a>
					</Link>
				</div>
			)} */}
		</div>
	)
}