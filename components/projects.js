
import Link from "next/link"

import Date from "./date"

import style from "./projects.module.css"

export default function Projects({ data }) {
	return (
		<section className={style.projects}>
			<h2>
				Projects
			</h2>
			<ul className={style.projectsList}>
				{ data.map((project) => (
					<li key={project.id}>
						<div className={style.card}>
							<img src={project.icon}/>
							<div className={style.cardContent}>
								{/* <Link href="/projects/[id]" href={`/projects/${project.id}`}>
									<a>{project.title}</a>
								</Link> */}
								<h2>{project.title}</h2>
								<span className={style.date}><Date start={project.start_date} end={project.end_date} /></span>
								<div className={style.softwareBox}>
									<span>
										{ project.software ? ( 
											project.software.map((image) => (
												<img src={image}/>
											)
										)) : (<></>) }
										{ project.team_size ? (
											<>
												<img src="/images/teamsize.svg"/>
												<p>x{project.team_size}</p>
											</>
										) : <></> }
									</span>
								</div>
								<Link href="/projects/[id]" href={`/projects/${project.id}`}>
									<a className={style.button}>View More</a>
								</Link>
							</div>
						</div>
					</li>
				)) }
			</ul>
		</section>
	)
}
  