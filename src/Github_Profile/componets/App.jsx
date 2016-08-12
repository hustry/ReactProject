

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'



class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'hustry',
            userData:[],
            userRepos:[],
            perPage:5
        };
    }

    //Get user data from github
    getUserData(){
        $.ajax({
            url:'https://api.github.com/users/'+this.state.username,
            dataType:'json',
            cache:false,
            success: function (data) {
                this.setState({userData:data});
                console.log(data);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return (
            <div>
                <Profile userData={this.state.userData} />
            </div>
        )
    }

}

App.propTypes = {
    clientId:React.PropTypes.string,
    clientSecret:React.PropTypes.string
}

App.defaultProps={
    clientId:'sa222d',
    clientSecret:'fresfcrc'
}


export default App