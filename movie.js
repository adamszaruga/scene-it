
function Movie(movieData) {
	// this is the constructor
	this.movieData = movieData;
}

Movie.prototype.like = function() {

}

Movie.prototype.dislike = function() {

}

Movie.prototype.generateHTML = function() {
	var div = $('<div></div>');
	div.html(this.movieData.Title);
	return div;
}

Movie.prototype.addToWatchList = function() {
	// Add this movie instance to local storage
	var watchlist = localStorage.getItem('myWatchList');
	watchlist = JSON.parse(watchlist);

	if (!watchlist) {
		watchlist = {};
	}

	// let's add this move to the watchlist
	watchlist[this.movieData.imdbID]= this.movieData;

	var stringifiedWatchlist = JSON.stringify(watchlist);
	localStorage.setItem('myWatchList', stringifiedWatchlist);
}

Movie.prototype.removeFromWatchList = function() {

}









