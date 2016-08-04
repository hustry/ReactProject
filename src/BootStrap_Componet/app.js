
require('./style.css');

var React = require('react');
var ReactDOM = require('react-dom');


//NavBar Componet
var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">My Bootstrap Componet</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

//Jumbotorn Componet
var Jumbotron = React.createClass({
    render:function(){
        return (
        <div className="jumbotron">
            <div className="container">
                <h1>Hello, world!</h1>
                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
        );
    }
});


//HomePage Componet
var HomePage = React.createClass({
    render:function(){
        return (
            <div className="container">
                <div className="row">
                    Main Content
                </div>
            </div>
        );
    }
});


var Foot =React.createClass({
    render: function () {
        return (
            <div className="container">
                <hr/>
                <footer>
                    <p>&copy; 2016 Company, Inc.</p>
                </footer>
            </div>
        );
    }
});


var App = React.createClass({
    render:function(){
        return (
            <div>
                <NavBar />
                <Jumbotron />
                <HomePage />
                <Foot />
            </div>
        );
    }
});

ReactDOM.render(<App />,document.getElementById('content'));
