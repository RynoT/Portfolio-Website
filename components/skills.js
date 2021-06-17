
import styleSkills from "./skills.module.css"

export default function Skills() {
	return (
		<div className={styleSkills.skills}>
			<h2>
				Skills Overview
			</h2>
			<div className={styleSkills.skillsBox}>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<img src="/images/check.svg" />
					</div>
					<h3>Frontend</h3>
					<ul>
						<li>
							<img src="/images/check.svg" />
							<p>JavaScript</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Webpack</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>React / Angular</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Node.js / NPM</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>HTML / CSS3 / SASS</p>
						</li>
					</ul>
				</div>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<img src="/images/check.svg" />
					</div>
					<h3>Backend</h3>
					<ul>
						<li>
							<img src="/images/check.svg" />
							<p>C / C++</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Java</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Python</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>C# / .NET</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>NoSQL / MySQL / MongoDB</p>
						</li>
					</ul>
				</div>
				<div className={styleSkills.skillsBoxInner}>
					<div className={styleSkills.skillsBoxIcon}>
						<img src="/images/check.svg" />
					</div>
					<h3>Other</h3>
					<ul>
						<li>
							<img src="/images/check.svg" />
							<p>DevOps</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Unity Engine</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Unreal Engine</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Jira / Confluence</p>
						</li>
						<li>
							<img src="/images/check.svg" />
							<p>Git / SVN / Perforce</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
  