var dev_pics_cols = document.getElementsByClassName('dev-pics-cols');
var pic_dir = '/Users/Sunday/Pictures/tkt/'


// From the File API documentations:

/*
window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
  fs.root.getDirectory('MyPictures', {create: true}, function(dirEntry) {
    
  }, errorHandler);
}, errorHandler);
*/


// THIS DID NOT WORK BECAUSE OF THE NOTORIOUS XSS SECURITY ISSUE:

/*
var tag = document.createElement("img");
dev_pics_cols[0].appendChild(tag);
var className = document.getElementsByTagName("img")[0].setAttribute("class", "anything");
var sourceName = document.getElementsByTagName("img")[0].setAttribute("src", pic_dir);


console.log(pic_dir);
var fileextension = ".png";
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	return;
    }
}
xhttp.open('GET', pic_dir, true);
var result = xhttp.send('');
console.log(result)
*/

