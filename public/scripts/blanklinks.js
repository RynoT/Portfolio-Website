

function updateBlankLinks() {
	var links = document.links;
	for (var i = 0; i < links.length; ++i) {
		if (links[i].hostname != window.location.hostname) {
			links[i].target = '_blank';
		} 
	}

	var images = document.images;
	for (var i = 0; i < images.length; ++i) {
		images[i].loading = 'lazy';
	}
}
