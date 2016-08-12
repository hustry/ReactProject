
var React = require('react');
var AppActions = require('../actions/AppAction.js');
var AppStore = require('../stores/AppStore.js');



var Movie = React.createClass({

    getInitialState:function(){
        return  {};

    },

    render: function () {
        var link = 'http://www.imdb.com/'+this.props.movie.imdbID;
        return (
            <div className="well">
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='thumbnall' src={this.props.movie.Poster} />
                    </div>
                    <div className='col-md-8'>
                        <h4>{this.props.movie.Title}</h4>
                        <ul className='list-group'>
                            <li className='list-group-item'>Year Released:{this.props.movie.Year}</li>
                            <li className='list-group-item'>imdbID:{this.props.movie.imdbID}</li>
                        </ul>
                        <a className="btn btn-success" href={link}>View on IMDB</a>
                    </div>
                </div>

            </div>
        );
    }

});

module.exports = Movie;