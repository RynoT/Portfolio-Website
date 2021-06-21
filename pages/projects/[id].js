
import Head from 'next/head'
import Date from '../../components/date'
import SoftwareBox from '../../components/softwareBox'
import Layout from "../../components/layout"
import style from '../../styles/id.module.css'
import { getAllProjectIds, getProjectData } from "../../lib/projects"

export async function getStaticPaths() {
	const paths = getAllProjectIds();
	return {
		paths, fallback: false
	}
}

export async function getStaticProps({ params }) {
	const project = await getProjectData(params.id);
	return {
		props: {
			project
		}
	}
}

export default function Post({ project }) {
	return (
		<Layout>
			<Head>
				<title>Ryan Thomson | {project.title} | Games Programmer</title>
				<script async src="/scripts/youtube.js" onLoad="updateYouTubeVideos()" />
				<script async src="/scripts/blanklinks.js" onLoad="updateBlankLinks()" />
			</Head>
			<article className={style.article}>
				<img src={project.banner} />
				<h1>{project.title}</h1>
				<span className={style.date}><Date start={project.start_date} end={project.end_date} /></span>
				<div dangerouslySetInnerHTML={{__html: project.contentHtml}} />
				<SoftwareBox icons={project.software} />
			</article>
		</Layout>
	)
}