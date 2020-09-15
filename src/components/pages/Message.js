import React from 'react';
import '../../App.css';
import * as ReactBootStrap from 'react-bootstrap';
import './Message.css';

export default function Message() {
    return (
        <div className='page'>
            <h1 className='message'>Message</h1>

            <button className='received' type="button">Received message</button>
            <button className='delivered' type="button">Delivered message</button>
            <button className='send' type="button">Send new message</button>
        </div>
    )
}