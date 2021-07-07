
import style from "./softwareBox.module.css"

// function GetIconTitle(path) {
// 	path = path.replace("/images/icons/", "").replace(/\.([a-z]){3,4}/g, "");

// 	const map = {
// 		"amazonaws": "Amazon AWS",
// 		"android": "Android",
// 		"cloudflare": "CloudFlare",
// 		"discord": "Discord",
// 		"epicgames": "Epic Online Services",
// 		"fmod": "Fmod",
// 		"github": "GitHub",
// 		"gmail": "Gmail",
// 		"ios": "iOS",
// 		"itchdotio": "itch.io",
// 		"mongodb": "MongoDB",
// 		"nextdotjs": "Next.js",
// 		"nintendoswitch": "Nintendo Switch",
// 		"npm": "NPM",
// 		"playstation": "PlayStation",
// 		"steam": "Steam",
// 		"teamsize": "Team Size",
// 		"unity": "Unity",
// 		"unrealengine": "Unreal Engine",
// 		"wwise": "Audiokinetic Wwise",
// 		"xbox": "Xbox"
// 	}
// 	return path in map ? map[path] : "";
// }

export default function SoftwareBox({ icons }) {
	// TODO: Find a way to use require with a parameter.
	const map = {
		"amazonaws": require("../public/images/icons/amazonaws.svg?include"),
		"android": require("../public/images/icons/android.svg?include"),
		"cloudflare": require("../public/images/icons/cloudflare.svg?include"),
		"discord": require("../public/images/icons/discord.svg?include"),
		"epicgames": require("../public/images/icons/epicgames.svg?include"),
		"fmod": require("../public/images/icons/fmod.svg?include"),
		"github": require("../public/images/icons/github.svg?include"),
		"gmail": require("../public/images/icons/gmail.svg?include"),
		"ios": require("../public/images/icons/ios.svg?include"),
		"itchdotio": require("../public/images/icons/itchdotio.svg?include"),
		"mongodb": require("../public/images/icons/mongodb.svg?include"),
		"nextdotjs": require("../public/images/icons/nextdotjs.svg?include"),
		"nintendoswitch": require("../public/images/icons/nintendoswitch.svg?include"),
		"npm": require("../public/images/icons/npm.svg?include"),
		"playstation": require("../public/images/icons/playstation.svg?include"),
		"steam": require("../public/images/icons/steam.svg?include"),
		"unity": require("../public/images/icons/unity.svg?include"),
		"unrealengine": require("../public/images/icons/unrealengine.svg?include"),
		"wwise": require("../public/images/icons/wwise.svg?include"),
		"xbox": require("../public/images/icons/xbox.svg?include"),
	}
	return (
		<div className={style.softwareBox}>
			{icons ? (
				icons.map((image) => (
					<div key={image} dangerouslySetInnerHTML={{ __html: image in map ? map[image] : "" }} />
					// <img src={image} key={image} loading='lazy' title={GetIconTitle(image)} alt={GetIconTitle(image)} />
				)
			)) : (<></>)}
		</div>
	)
}
