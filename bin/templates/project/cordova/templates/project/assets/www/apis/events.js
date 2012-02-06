// IMPORTANT: see device.js for document.addEventListener() for each event
var onSearchKeyDown = function() {
    console.log("searchbutton event fired");
    document.getElementById('eventOutput').innerHTML = 
        '<span id="searchbuttontext" style="color:#2b8;"><code>searchbutton</code> fired</span>';
    //$('#searchbuttontext').fadeOut(1500, function(){});
};
var onMenuButtonDown = function() {
    console.log("menubutton event fired");
    document.getElementById('eventOutput').innerHTML = 
        '<span id="menubuttontext" style="color:#2b8;"><code>menubutton</code> fired</span>';
    //$('#menubuttontext').fadeOut(1500, function(){});
};
var onEventFired = function() {  // generic logging event handler
    console.log("an event fired");
};
// IMPORTANT: see device.js for document.addEventListener() for each event
