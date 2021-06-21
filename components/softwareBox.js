
import style from "./softwareBox.module.css"

function GetIconTitle(path) {
	path = path.replace("/images/icons/", "").replace(/\.([a-z]){3,4}/g, "");

	const map = {
		"amazonaws": "Amazon AWS",
		"android": "Android",
		"cloudflare": "CloudFlare",
		"discord": "Discord",
		"epicgames": "Epic Online Services",
		"fmod": "Fmod",
		"github": "GitHub",
		"gmail": "Gmail",
		"ios": "iOS",
		"itchdotio": "itch.io",
		"mongodb": "MongoDB",
		"nextdotjs": "Next.js",
		"nintendoswitch": "Nintendo Switch",
		"npm": "NPM",
		"playstation": "PlayStation",
		"snaphunt": "SnapHunt",
		"steam": "Steam",
		"teamsize": "Team Size",
		"unity": "Unity",
		"unrealengine": "Unreal Engine",
		"wwise": "Audiokinetic Wwise",
		"xbox": "Xbox"
	}
	return path in map ? map[path] : "";
}

export default function SoftwareBox({ icons }) {
	return (
		<div className={style.softwareBox}>
			{icons ? (
				icons.map((image) => (
					<img src={image} key={image} loading='lazy' title={GetIconTitle(image)} alt={GetIconTitle(image)} />
				)
			)) : (<></>)}
		</div>
	)
}
