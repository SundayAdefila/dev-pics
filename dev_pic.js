var dev_pics_cols = document.getElementsByClassName('dev-pics-cols');
var pic_dir = '/Users/Sunday/Pictures/tkt/'

var errorHandler = function(){
	console.log('error');
};

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
      	// Save files to locasStorage

      	localStorage.setItem('myPictures', e.target.result);

      	var savedPics = localStorage.getItem('myPictures');

      	if(savedPics){
      		alert(savedPics);
      	}



        // Render thumbnail.
        // var span = document.createElement('span');
        // span.innerHTML = ['<img class="thumb" src="', e.target.result,
        //                   '" title="', escape(theFile.name), '"/>'].join('');
        // document.getElementById('list').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('myFiles').addEventListener('change', handleFileSelect, false);



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

