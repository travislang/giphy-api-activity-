import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux';

class App extends Component {

    handleClick = () => {
        axios.get('/random')
            .then(res => {
                console.log(res.data)
                this.props.dispatch({ type: 'SET_RANDOM', payload: res.data })
            }).catch(err => console.log(err))
    }
    render() {
        let picture;
        if (this.props.random.image_url) {
            picture = <div><img src={this.props.random.image_url} alt='random gif' /></div>
        }
        else {
            picture = <div></div>
        }
        
        return (
            <div>
                <header className="App-header">
                    <h1>Random Giphy API</h1>
                </header>
                <div>
                    <button onClick={this.handleClick}>Show Random GIF</button>
                </div>
                {picture}
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => {
    return {
        random: reduxStore.random
    }
}

export default connect(mapReduxStateToProps)(App);
