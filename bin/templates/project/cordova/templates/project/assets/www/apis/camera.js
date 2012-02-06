var pictureSource;   // picture source
var destinationType; // sets the format of returned value 
// See the above in device.js for their assignments

// api-camera
function onPhotoDataSuccess(imageData) {
    console.log("* * * onPhotoDataSuccess");
    var image = document.getElementById('cameraImage');
    image.style.display = 'block';
    image.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
    console.log("* * * onPhotoURISuccess");
    // Uncomment to view the image file URI 
    // console.log(imageURI);
    var image = document.getElementById('cameraImage');
    image.style.display = 'block';
    image.src = imageURI;
}

function take_pic() {
    navigator.camera.getPicture(onPhotoDataSuccess, function(ex) {
        alert("Camera Error!");
    }, { quality : 30, destinationType: destinationType.DATA_URL });
}

function album_pic() { 
    navigator.camera.getPicture(onPhotoURISuccess, function(ex) {
            alert("Camera Error!"); }, 
            { quality: 30, 
        destinationType: destinationType.FILE_URI,
        // Android Quirk: Camera.PictureSourceType.PHOTOLIBRARY and 
        // Camera.PictureSourceType.SAVEDPHOTOALBUM display the same photo album.
        sourceType: pictureSource.SAVEDPHOTOALBUM });
}
