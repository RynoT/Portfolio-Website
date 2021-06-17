
import Head from 'next/head'

import Layout from '../components/layout'

import Intro from '../components/intro'
import Skills from '../components/skills'
import Projects from '../components/projects'

import { getSortedProjectData } from '../lib/projects'

export async function getStaticProps() {
	const projectData = getSortedProjectData()
	return {
		props: {
			projectData
		}
	}
}

export default function Home({ projectData }) {
	return (
		<Layout home>
			<Head>
				<title>Ryan Thomson | Games Programmer</title>
			</Head>
			<Intro/>
			<Skills/>
			<Projects data={projectData} />
			 {/* <section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you'll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">out Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{
						allPostsData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br/>
								<small className={utilStyles.lightText}>
									<Date dateString={date}/>
								</small>
							</li>
						))
					}
				</ul>
			</section>  */}
		</Layout>
	)
}
