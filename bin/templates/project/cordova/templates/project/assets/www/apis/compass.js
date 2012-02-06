//api-compass
var compassWatch = null;

function updateHeading(h) {
    document.getElementById('heading').innerHTML = h.magneticHeading;
}
function compassError(error) {
    alert('Compass Error: ' + error.code);
    document.getElementById('heading').innerHTML = "Error";
}
function toggleCompass() {
    if (compassWatch !== null) {
        navigator.compass.clearWatch(compassWatch);
        compassWatch = null;
        updateHeading({ magneticHeading : ""});
    } else { 
        // Compass Options: Android: filter is not supported
        var options = { frequency: 1000 };
        compassWatch = navigator.compass.watchHeading(
                updateHeading, compassError, options);
    }
}
function getCurrentHeading() {
    if (compassWatch !== null) {
        navigator.compass.clearWatch(compassWatch);
        compassWatch = null;
        updateHeading({ magneticHeading : ""});
    }
    navigator.compass.getCurrentHeading(updateHeading, compassError);
}
