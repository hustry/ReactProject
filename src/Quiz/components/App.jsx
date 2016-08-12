
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx'
import ScoreBox from './ScoreBox.jsx'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions:[
                {
                    id:1,
                    text:'what\'s your name?',
                    choices:[
                        {
                            id:'a',
                            text:'Mike'
                        },
                        {
                            id:'b',
                            text:'asd'
                        },
                        {
                            id:'c',
                            text:'sdsg'
                        }],
                    correct:'c'
                },
                {
                    id:2,
                    text:'what\'s your ll?',
                    choices:[
                        {
                            id:'a',
                            text:'Mike'
                        },
                        {
                            id:'b',
                            text:'asd'
                        },
                        {
                            id:'c',
                            text:'sdsg'
                        }],
                    correct:'c'
                },
                {
                    id:3,
                    text:'what\'s your sss?',
                    choices:[
                        {
                            id:'a',
                            text:'Mike'
                        },
                        {
                            id:'b',
                            text:'asd'
                        },
                        {
                            id:'c',
                            text:'sdsg'
                        }],
                    correct:'c'
                }
            ],
            score:0,
            current:1
        }
    }

    setCurrent(current){
        this.setState({current});
    }

    setScore(score){
        this.setState({score});
    }

    render(){
        return(
            <div>
                <ScoreBox {...this.state} />
                <QuestionList {...this.state}
                    setCurrent = {this.setCurrent.bind(this)}
                    setScore={this.setScore.bind(this)}/>
            </div>
        )
    }
}

export default App