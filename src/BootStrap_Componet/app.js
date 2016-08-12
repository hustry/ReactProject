
require('./style.css');

var React = require('react');
var ReactDOM = require('react-dom');


//NavBar Componet
var NavBar = React.createClass({

    propTypes:{
        brand:React.PropTypes.string.isRequired
    },

    getDefaultProps:function(){
        return {
            brand: 'Boot',
            color: 'dark'
        }
    },

    render: function () {
        var Navclass = null;
        if(this.props.color == 'dark'){
            Navclass = 'navbar navbar-inverse';
        }
        else{
            Navclass = 'navbar navbar-default';
        }

        var homeActive ='';
        var aboutActive ='';

        if(this.props.page == 'home'){
            homeActive = 'active';
        }
        else{
            aboutActive = 'active';
        }

        return (
            <nav className={ Navclass }>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">{ this.props.brand }</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={homeActive}><a onClick={this.props.homeClick} >Home </a></li>
                            <li className={aboutActive}><a onClick={this.props.aboutClick}>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

//Jumbotorn Componet
var Jumbotron = React.createClass({

    propTypes:{

        heading:React.PropTypes.string.isRequired,
        content:React.PropTypes.string.isRequired,
        link:React.PropTypes.string.isRequired

    },

    getDefaultProps:function(){
        return {
            heading:'Ha111112ha2,Welcome',
            content:'This is the content',
            link:'http://baidu.com'
        }
    },

    render:function(){
        return (
        <div className="jumbotron">
            <div className="container">
                <h1>{this.props.heading}</h1>
                <p>{this.props.content}</p>
                <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more &raquo;</a></p>
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

    getInitialState:function(){
        return {
            page:'home'
        };
    },

    handleHomeClick:function(){
        this.setState({
            page:'home'
        });
    },

    handleAboutClick:function(){
        this.setState({
            page:'about'
        });
    },

    render:function(){

        var jumbotoron;

        if(this.state.page == 'home'){
            jumbotoron = <Jumbotron />;
        }
        else{
            jumbotoron = '';
        }

        return (
            <div>
                <NavBar
                    homeClick={this.handleHomeClick}
                    aboutClick={this.handleAboutClick}
                    page={this.state.page}/>
                {jumbotoron}
                <HomePage />
                <Foot />
            </div>
        );
    }
});

ReactDOM.render(<App />,document.getElementById('content'));
