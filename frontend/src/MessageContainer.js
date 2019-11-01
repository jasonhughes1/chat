import React from 'react'


const MessageContainer = ({ user, message }) => {
    return (
        <div>
            <div className='message-container'>
                <h3 className='name'>{user}:</h3>
                <p className='message'>{message}</p>
            </div>
        </div>
    )
};

export default MessageContainer

