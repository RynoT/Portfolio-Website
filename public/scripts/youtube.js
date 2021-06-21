
function updateYouTubeVideos() {
	var images = document.images;

	for (var i = 0; i < images.length; ++i) {
		if (images[i].src.startsWith("https://img.youtube.com")) {
			console.log(images[i].src);
			images[i].innerHTML = "<div>ok</div>";
		}
	}	
}
