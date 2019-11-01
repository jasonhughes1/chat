import React, {Component} from 'react'
import MessageInput from './MessageInput.js'
import MessageContainer from './MessageContainer'

const url = 'ws://localhost:3030';

export default class ChatAppController extends Component {
    state = {
        messages: [],
        user: ''
    };

    ws = new WebSocket(url);

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('server is connected')
        };

        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            this.createMessage(message)
        };

        this.ws.onclose = () => {
            this.setState({
                ws: new WebSocket(url),
            })
        }
    }

    createMessage = (message) => {
        this.setState((state) => ({messages: [message, ...state.messages]}))
    };

    sendMessage = (newMessage) => {
        let generateMessage = {user: this.state.user, message: newMessage};
        this.ws.send(JSON.stringify(generateMessage));
        this.createMessage(generateMessage)
    };

    render() {
        return (
            <div className='chat-container'>
                <div className='chat-message-container'>
                    {this.state.messages.map((message, index) =>
                        <MessageContainer
                            key={index}
                            message={message.message}
                            user={message.user}
                        />
                    )}
                </div>
                <div className='name-and-message'>
                    <input
                        className='name-input-field'
                        placeholder={'Enter your name...'}
                        value={this.state.user}
                        onChange={e => this.setState({user: e.target.value})}
                    />
                    <MessageInput
                        onSubmitMessage={messageString => this.sendMessage(messageString)}
                    />
                </div>
            </div>
        )
    }
}
