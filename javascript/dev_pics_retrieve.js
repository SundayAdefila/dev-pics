chrome.storage.local.get("myPictures" , function(pics) {
 
  items = pics['myPictures'];

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