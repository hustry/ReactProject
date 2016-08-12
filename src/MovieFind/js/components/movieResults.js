
var React = require('react');
var AppActions = require('../actions/AppAction.js');
var AppStore = require('../stores/AppStore.js');
var Movie = require('./movie.js');



var MovieResults = React.createClass({

    getInitialState:function(){
        return  {};

    },

    render: function () {
        return (
            <div className='container'>
                <h3>Results</h3>
                {
                    this.props.movies.map(function(movie,i){
                        return  <Movie movie={movie} key={i} />
                    })
                }
            </div>
        );
    }

});

module.exports = MovieResults;