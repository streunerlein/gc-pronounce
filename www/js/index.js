
var mediaRec, started = false;
// Record audio
// 
function recordAudio() {
    var src = "myrecording.mp3";
    mediaRec = new Media(src,
        // success callback
        function() {
            alert("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            alert("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}

function stopAudio() {
	mediaRec.stopRecord();
}

$("#recordbutton").click(function() {
	if (started) {
        $(this).text("Start");
		stopAudio();
	}
	else {
        $(this).text("Stop");
		recordAudio();
	}

	started = !started;
});