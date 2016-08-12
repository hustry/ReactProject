

var AppDispather = require('../dispatchers/AppDisptcher.js');
var AppConstants = require('../constans/AppConstants.js');


var AppActions = {

    searchMovies :function(movie){

        console.log('searching for a movie'+movie.title);

        AppDispather.handleViewAction({
            actionType: AppConstants.SEACH_MOVIES,
            movie:movie
        })

    },

    receiveMovieResults:function(movies){

        console.log(movies);
        AppDispather.handleViewAction({
            actionType:AppConstants.RECEIVE_MOVIES,
            movies:movies
        })
    }



};


module.exports = AppActions;