// the chosen superheroes that will appear on the page 

var initialSuperhero = ["Batman", "Superman", "Wolverine", "Wonder Woman"];


// function to display the content in HTML
function displaySuperheroGif () {
	var superhero = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=10&api_key=eMA8eKcCmLoyx44adeNuksVdO8uG7LFO";
	console.log(superhero);
	console.log(queryURL);


//Ajax copied from old in class activity
$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

	// master div to hold all everything
	divAll = $('<div>');
	// loop for all the gifs
	for (var i = 0; i < 10; i++) {
	// div holding a single gif and rating
	divEnvelope = $("<div class='gifs'>");
	// div to keep the rating
	divRating = $('<div>');
	divRating.append("the rating is: " + response.data[i].rating);
	//div for the gif
	divGif = $('<div>');

	var image = $("<img class='gif' data-state='still'>");
		image.attr("src", response.data[i].images.fixed_height_still.url);
		image.attr("data-still", response.data[i].images.fixed_height_still.url);
		image.attr("data-animate", response.data[i].images.fixed_height.url)
	divGif.append(image);

	// put rating and gif into envelope
	divEnvelope.append(divRating);
	divEnvelope.append(divGif);
	// put envelope into divAll
	divAll.append(divEnvelope);


	} // end of loop

	//put everything into a divAll into the html
	$('#displayInfo').html(divAll);


	});// end of AJAX

} // end of displaySuperheroGif

function mkButton() {
	$('#button-view').empty();

	// loop through superhero array
	for (var i = 0; i < initialSuperhero.length; i++) {
		var a = $("<button class='superhero'>");
		a.attr("data-name", initialSuperhero[i]);
		a.text(initialSuperhero[i]);
		$("#buttons-view").append(a);
	}// end of loop

}// function end?






