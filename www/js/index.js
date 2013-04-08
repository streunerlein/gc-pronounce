
var mediaRec, started = false;
// Record audio
// 
function recordAudio() {
    var src = "myrecording.mp3";
    mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}

function stopAudio() {
	mediaRec.stopRecord();
}

$("#recordbutton").click(function() {
	if (started) {
		stopAudio();
		$(this).text("Start");
	}
	else {
		recordAudio();
		$(this).text("Stop");
	}

	started = !started;
});