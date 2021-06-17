
import Link from "next/link"

import Date from "./date"

import style from "./projects.module.css"

function GetImageTitle(path) {
	path = path.replace("/images/", "").replace(/\.([a-z]){3,4}/g, "");

	const map = {
		"amazonaws": "Amazon AWS",
		"android": "Android",
		"cloudflare": "CloudFlare",
		"csr2": "CSR2",
		"discord": "Discord",
		"epicgames": "Epic Online Services",
		"fmod": "Fmod",
		"github": "GitHub",
		"ios": "iOS",
		"itchdotio": "itch.io",
		"kingofthecastle": "King of the Castle",
		"mongodb": "MongoDB",
		"nextdotjs": "Next.js",
		"nintendoswitch": "Nintendo Switch",
		"npm": "NPM",
		"playstation": "PlayStation",
		"savagelands": "Savage Lands",
		"snaphunt": "SnapHunt",
		"steam": "Steam",
		"teamsize": "Team Size",
		"theconegame-itch": "The Cone Game (PoC)",
		"theconegame": "The Cone Game",
		"thiswebsite": "This website",
		"unity": "Unity",
		"unrealengine": "Unreal Engine",
		"wwise": "Audiokinetic Wwise",
		"xbox": "Xbox"
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
							<img src={project.icon} title={GetImageTitle(project.icon)} alt={GetImageTitle(project.icon)} />
							<div className={style.cardContent}>
								<h2>{project.title}</h2>
								<span className={style.date}><Date start={project.start_date} end={project.end_date} /></span>
								<div className={style.softwareBox}>
									<span>
										{project.software ? (
											project.software.map((image) => (
												<img src={image} key={image} title={GetImageTitle(image)} alt={GetImageTitle(image)} />
											)
										)) : (<></>)}
										{project.team_size ? (
											<>
												<img src="/images/teamsize.svg" title="Team Size" alt="Team Size" />
												<p>x{project.team_size}</p>
											</>
										) : <></>}
									</span>
								</div>
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
