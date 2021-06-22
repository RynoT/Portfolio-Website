
import Link from "next/link"

import Date from "./date"
import SoftwareBox from "./softwareBox"

import style from "./projects.module.css"

function GetImageTitle(path) {
	path = path.replace("/images/", "").replace(/\.([a-z]){3,4}/g, "");

	const map = {
		"csr2": "CSR2",
		"kingofthecastle": "King of the Castle",
		"savagelands": "Savage Lands",
		"snaphunt": "SnapHunt",
		"theconegame-itch": "The Cone Game (PoC)",
		"theconegame": "The Cone Game",
		"thiswebsite": "This website"
	}
	return path in map ? map[path] : "";
}

export default function Projects({ data }) {
	return (
		<section className={style.projects}>
			<h2>
				Projects
			</h2>
			<ul className={style.projectsList}>
				{data.map((project) => (
					<li key={project.id}>
						<div className={style.card}>
							<div className={style.iconContainer}>
								<Link href="/projects/[id]" href={`/projects/${project.id}`}>
									<a>
										<img src={project.icon} loading='lazy' title={GetImageTitle(project.icon)} alt={GetImageTitle(project.icon)} />
										<img src="/images/icons/external-link.svg" loading='lazy' alt="External Link" />
									</a>
								</Link>
							</div>
							<div className={style.cardContent}>
								<h2>{project.title}</h2>
								<span className={style.date}><Date start={project.start_date} end={project.end_date} /></span>
								<SoftwareBox icons={project.software} />
								<Link href="/projects/[id]" href={`/projects/${project.id}`}>
									<a className={style.button}>View More</a>
								</Link>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
