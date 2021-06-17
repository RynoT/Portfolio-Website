
import styleIntro from "./intro.module.css"

export default function Intro() {
	return (
		<div className={styleIntro.intro}>
			<div className={styleIntro.inner}>
				<div className={styleIntro.innerImage}>
					<img src="./images/ryan.jpg" />
				</div>
				<div className={styleIntro.innerParagraph}>
					<p>Hello, my name is</p>
					<h2>Ryan Thomson</h2>
					<p>I'm a full-stack developer that's experienced with both frontend and backend development.<br/><br/>I specialize in games programming and have a strong background with Unreal Engine C++.</p>
				</div>
			</div>
		</div>
	)
}
  