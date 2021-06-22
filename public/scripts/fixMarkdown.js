

async function fixMarkdown() {

	// Make all links open in a new tab.
	var links = document.links;
	for (var i = 0; i < links.length; ++i) {
		if (links[i].hostname != window.location.hostname) {
			links[i].target = '_blank';
		} 
	}

	// Lazy load all images.
	var images = document.images;
	for (var i = 0; i < images.length; ++i) {
		images[i].loading = 'lazy';
	}

	// Replace YouTube hyperlinks with an embedded video.
	var links = document.links;
	for (var i = 0; i < links.length; ++i) {
		if (links[i].href.startsWith("https://www.youtube.com/watch?v=") && links[i].href.endsWith("?")) {
			const src = "https://www.youtube.com/embed/" + links[i].href.substr(links[i].href.indexOf("=") + 1);
			links[i].parentNode.innerHTML = `
				<div style="overflow:hidden;padding-bottom:56.25%;position:relative;height:0;">
				<iframe
					width="853"
					height="480"
					src="${src}"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded YouTube"
					style="left:0;top:0;height:100%;width:100%;position:absolute;"
					/>
				</div>
			`;
		}
	}
}
