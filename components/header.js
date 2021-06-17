
import Link from "next/link"
import styleHeader from "./header.module.css"

export default function Header() {
	return (
		<div className={styleHeader.header}>
			<div className={styleHeader.name}>
				<Link href="/">
					<a><span>{`</> `}</span><span className={styleHeader.firstname}>RYAN</span><span> THOMSON</span></a>
				</Link>
			</div>
			<div className={styleHeader.social}>
				<a href="https://twitter.com/ryanthomson0" target="_blank" rel="noreferrer">
					<img src="/images/twitter.svg" title="Twitter" alt="Twitter" />
				</a>
				<a href="https://github.com/RynoT/" target="_blank" rel="noreferrer">
					<img src="/images/github.svg" title="Twitter" alt="GitHub" />
				</a>
				<a href="https://www.linkedin.com/in/ryanthomson0/" target="_blank" rel="noreferrer">
					<img src="/images/linkedin.svg" title="Twitter" alt="LinkedIn" />
				</a>
			</div>
		</div>
	)
}
  