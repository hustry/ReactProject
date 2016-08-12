
var React = require('react');
var AppActions = require('../actions/AppAction.js');
var AppStore = require('../stores/AppStore.js');
var SearchForm =  require('./serachForm.js');
var MovieResults = require('./movieResults.js');


function getAppState(){
    return {
        movies:AppStore.getMovieResults()
    }
}


var App = React.createClass({

    getInitialState:function(){
        return  getAppState();

    },

    componentDidMount:function(){

        AppStore.addChangeListener(this._onChange);

    },

    componentWillUnmount:function(){
        AppStore.removeChangeListener(this._onChange);
    },
    
    
    render: function () {

        if(this.state.movies == ''){
            var movieResult = '';
        }
        else{
            var movieResult = <MovieResults movies={this.state.movies} />
        }

        return (
            <div>
                <SearchForm />
                {movieResult}
            </div>
        );
    },

    _onChange:function(){
        this.setState(getAppState());
    }
    
});

module.exports = App;