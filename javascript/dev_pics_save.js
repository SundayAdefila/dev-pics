function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var pics = [];

  // Loop through the image files and populate pics array with the link to images
  for (var i = 0; i < files.length; i++) {
    readFile(files[i], function(url) {
      pics.push(url);
      if(pics.length == files.length) {
        // save our url array to crome storage
        saveToStorage(pics);
      };
    });
  }
};

function saveToStorage(pics) {
  console.log(pics);
  chrome.storage.local.set({'myPictures': pics}, function() {
    alert('Settings saved');
  });
}

function readFile(f, cb) {
  var reader = new FileReader();
  // Closure to capture the file information, fired when readAsDataURL concludes.
  reader.onload = function(e) {
    cb(e.target.result);
  };
  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}

function retrieve() {
  chrome.storage.local.get("myPictures" , function(pics) {
    items = pics['myPictures'];

    // Render thumbnail.
    if (items == null) {
      document.getElementById('notice').innerHTML = "No Pictures selected Yet for display";
      return;
    }else{
      document.getElementById('notice').innerHTML = '';
      // Render thumbnail.
      for (var i=0; i<items.length; i++) {
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', items[i], '"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
      }
    }



  });
};

document.getElementById('myFiles').addEventListener('change', handleFileSelect, false);

document.getElementById('check').addEventListener("click", retrieve);