import React, {Component} from 'react'


export default class MessageInput extends Component {
    state = {
        message: '',
    };

    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.onSubmitMessage(this.state.message);
                    this.setState({message: ''})
                }}
                >
                    <input
                        className='message-input-field'
                        placeholder={'Type a message...'}
                        value={this.state.message}
                        onChange={e => this.setState({message: e.target.value})}
                    />
                    <button disabled={!this.state.message}
                            className={`submit-button ${!this.state.message ? 'submit-button-active' : ''}`}
                            type="submit">Send
                    </button>
                </form>
            </div>
        )
    }
}

