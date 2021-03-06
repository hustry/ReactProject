

var AppDispather = require('../dispatchers/AppDisptcher.js');
var AppConstants = require('../constans/AppConstants.js');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');


var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({},EventEmitter.prototype,{

    setMovieResults:function(movies){
        _movies = movies

    },
    getMovieResults:function(){
        return _movies;

    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on('change',callback);
    },

    removeChangeListener:function(callback){
        this.removeChangeListener('change',callback);
    }

});

AppDispather.register(function (payload) {
    var action = payload.action;
    switch(action.actionType){

        case AppConstants.SEACH_MOVIES:
            console.log('disptch');
            AppAPI.serachMovies(action.movie);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_MOVIES:
            AppStore.setMovieResults(action.movies);
            AppStore.emit(CHANGE_EVENT);
            break;


    }

    return true;


});

module.exports = AppStore;