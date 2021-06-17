
import Link from "next/link"

import Date from "./date"

import styleProjects from "./projects.module.css"

export default function Projects({ data }) {
	return (
		<section className={styleProjects.projects}>
			<h2>
				Projects
			</h2>
			<ul className={styleProjects.projectsList}>
				{ data.map((project) => (
					<li key={project.id}>
						<div className={styleProjects.card}>
							<img src={project.icon}/>
							<div className={styleProjects.cardContent}>
								{/* <Link href="/projects/[id]" href={`/projects/${project.id}`}>
									<a>{project.title}</a>
								</Link> */}
								<h2>{project.title}</h2>
								<br/>
								<small>
									hello {project.date}
								</small>
							</div>
						</div>
					</li>
				)) }
			</ul>
		</section>
	)
}
  