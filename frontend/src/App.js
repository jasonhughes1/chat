import React, {Component} from 'react'
import './App.css'
import ChatAppController from './ChatAppController'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="logo-container">
                        <img src={require('./assets/guild.png')} className='guild-image'></img>
                    </div>
                    <div>
                        <h1 className="App-title">Chat App</h1>
                    </div>
                </header>
                <ChatAppController/>
            </div>
        )
    }
}
