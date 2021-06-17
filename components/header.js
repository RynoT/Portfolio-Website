
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
				<a href="https://twitter.com/ryanthomson0" target="_blank">
					<img src="/images/twitter.svg" alt="Twitter" />
				</a>
				<a href="https://github.com/RynoT/" target="_blank">
					<img src="/images/github.svg" alt="GitHub" />
				</a>
				<a href="https://www.linkedin.com/in/ryanthomson0/" target="_blank">
					<img src="/images/linkedin.svg" alt="LinkedIn" />
				</a>
			</div>
		</div>
	)
}
  