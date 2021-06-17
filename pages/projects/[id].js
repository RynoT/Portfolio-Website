
import Head from 'next/head'
import Date from '../../components/date'
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
	const postData = await getProjectData(params.id);
	return {
		props: {
			postData
		}
	}
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>Ryan Thomson | {postData.title} | Games Programmer</title>
			</Head>
			<article className={style.article}>
				<h1>{postData.title}</h1>
				<div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
			</article>
		</Layout>
	)
}