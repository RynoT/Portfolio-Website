
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
				<title>Ryan Thomson | Portfolio | Games Programmer</title>
			</Head>
			<Intro/>
			<Skills/>
			<Projects data={projectData} />
		</Layout>
	)
}
