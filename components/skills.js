
import styleSkills from "./skills.module.css"

function TickIcon() {
	return (
		<div dangerouslySetInnerHTML={{ __html: require("../public/images/icons/check.svg?include") }} />
		/* <img src="/images/icons/check.svg" title="Tick" alt="Tick" /> */
	)
}

export default function Skills() {
	const frontend = ["JavaScript", "Webpack", "Node.js / NPM",, "HTML / CSS3 / SASS", "React / Angular / Next.js"];
	const backend = ["C / C++", "Java", "Python", "C# / .NET", "NoSQL / MySQL / MongoDB"];
	const other = ["DevOps", "Unreal / Unity", "Jira / Confluence", "AWS / CloudFlare", "Git / SVN / Perforce"];
	return (
		<div className={styleSkills.skills}>
			<h2>
				Skills Overview
			</h2>
			<div className={styleSkills.skillsBox}>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<TickIcon />
					</div>
					<h3>Frontend</h3>
					<ul>
						{ frontend.map((next) => (
							<li key={next}>
								<TickIcon />
								<p>{next}</p>
							</li>
						)) }
					</ul>
				</div>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<TickIcon />
					</div>
					<h3>Backend</h3>
					<ul>
						{ backend.map((next) => (
							<li key={next}>
								<TickIcon />
								<p>{next}</p>
							</li>
						)) }
					</ul>
				</div>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<TickIcon />
					</div>
					<h3>Other</h3>
					<ul>
						{ other.map((next) => (
							<li key={next}>
								<TickIcon />
								<p>{next}</p>
							</li>
						)) }
					</ul>
				</div>
			</div>
		</div>
	)
}
  