/*
	1.Capture the click events a link to an image
*/
var $overlay = $("<div class='overlay'></div>"); //create overlay
var $image = $("<img>");//create image
$($overlay).append($image); //add image into overaly
$("body").append($overlay);	//add overlay into the document.
$("#imageGallery a").click(function(e){//note: add apss event as a parameter
	e.preventDefault(); //prevent the defalut even happens which is image being opended.
	var $imgLoca = $(this).attr("href");//get the address of the image that we clicked on
	$image.attr('src', $imgLoca); //set image inside overaly as the image we clicked
	$overlay.show(); //show the overlay
});
$($overlay).click(function(e){
	e.preventDefault();
	$overlay.hide();
});





	//1.1 show the overlay
	//1.2pdate overlay with the image linked in the line
	//1.3. get child's alt attributes and set caption
//2.add an overlay
	//2.1 an image
	//2.2 an caption
//3.when overlay is clicked, 
	//3.1 hide the overaly
