
var React = require('react');
var AppActions = require('../actions/AppAction.js');
var AppStore = require('../stores/AppStore.js');


var SearchForm = React.createClass({

    onSubmit:function(e){
        e.preventDefault();
        console.log(this.refs.title.value);

        var movie = {title:this.refs.title.value.trim()};

        AppActions.searchMovies(movie);


    },



    render: function () {
        return (
            <div className='container serachForm'>
                <h1 className="text-center">Search For A Movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title" />
                    </div>
                    <button className="btn btn-success">Search Movie</button>
                </form>
            </div>
        );
    }

});

module.exports = SearchForm;