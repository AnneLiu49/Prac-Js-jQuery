//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation
/*solution 2nd: do not like the go button in the mobile version. delete the button and got
the the page when select the option*/


/*solution*/
//create a select
var $select = $("<select></select>");
//append it to #meun
$("#menu").append($select);


//cycle over meny list
$('#menu a').each(function(){
	var $anchor = $(this);//create an opiton as the one we iterated through
	var $option = $('<option></option>'); //create an option
	$option.val($anchor.attr("href")); //set the value of option as the href of anchor
	$option.text($anchor.text()); //set the text of option as the text of anchor
	if($anchor.parent().hasClass('selected')){	//if anchor's parent has a class called selected
  		$option.prop('selected', true);//set the selected attribution of option as true
	};
	$select.append($option);//append option to select
});

var $button = $("<button>Go</button>");//create a button
$('#menu').append($button);//put buttion inside menu
$button.click(function(){//lick the button, set the window locatoin into the value that we selcte.
	window.location = $select.val();
});
/*
	solution 2nd version
	delete the button and goto the page directly
	
*/
var $select = $("<select></select>");
//append it to #meun
$("#menu").append($select);


//cycle over meny list
$('#menu a').each(function(){
	var $anchor = $(this);//create an opiton as the one we iterated through
	var $option = $('<option></option>'); //create an option
	$option.val($anchor.attr("href")); //set the value of option as the href of anchor
	$option.text($anchor.text()); //set the text of option as the text of anchor
	if($anchor.parent().hasClass('selected')){	//if anchor's parent has a class called selected
  		$option.prop('selected', true);//set the selected attribution of option as true
	};
	$select.append($option);//append option to select
});

var $button = $("<button>Go</button>");//create a button
$('#menu').append($button);//put buttion inside menu
$button.click(function(){//lick the button, set the window locatoin into the value that we selcte.
	window.location = $select.val();
});



