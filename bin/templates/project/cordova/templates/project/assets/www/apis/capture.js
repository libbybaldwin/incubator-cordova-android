function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Error!');
    document.getElementById('capture-result').innerHTML = "<strong>Error</strong>";
}
function formatError(error) {
    alert("Error getting file format data: " + error.code); 
}

// api-capture
function captureAudioSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        document.getElementById('format-data').innerHTML = 
            "Duration: <strong>" + mediaFile.duration/1000 + "s</strong><br/>";
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        document.getElementById('capture-result').innerHTML = "<strong>" + (i+1) + " files</strong>";
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureAudioSuccess");
}
function captureImageSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        document.getElementById('format-data').innerHTML = 
            "Height: <strong>" + mediaFile.height + "</strong><br/>" +
            "Width: <strong>" + mediaFile.width + "</strong><br/>";
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        document.getElementById('capture-result').innerHTML = "<strong>" + (i+1) + " file(s)</strong>";
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureImageSuccess");
}
function captureVideoSuccess(mediaFiles) {  
    var i, len;
    var formatSuccess = function (mediaFile) {
        document.getElementById('format-data').innerHTML = 
            "Height: <strong>" + mediaFile.height + "</strong><br/>" +
            "Width: <strong>" + mediaFile.width + "</strong><br/>" +
            "Duration: <strong>" + mediaFile.duration/1000 + "s</strong><br/>";
    };
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        // uploadFile(mediaFiles[i]);
        document.getElementById('capture-result').innerHTML = "<strong>" + (i+1) + " files</strong>";
        mediaFiles[i].getFormatData(formatSuccess, formatError);
    } 
    console.log("captureMediaSuccess");
}

//api-capture   Capture Audio
function captureAudio() {
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureAudio(captureAudioSuccess, captureError, {limit: 1});
}

// api-capture  Capture Image
function captureImage(){
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureImage(captureImageSuccess, captureError, {limit: 1});    
}
// api-capture  Capture Video
function captureVideo(){
    document.getElementById('format-data').innerHTML = "";
    document.getElementById('capture-result').innerHTML = "";
    navigator.device.capture.captureVideo(captureVideoSuccess, captureError, {limit: 1});    
}
