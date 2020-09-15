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

            <ReactBootStrap.Table className='messageTable'>
                <thead>
                    <tr>
                        <th>Message</th>
                        <th>Sender name</th>
                        <th>Received date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Do you have the sheet music of Moonlight Sonata? Can you send to me?</td>
                        <td>Amber Vogue</td>
                        <td>18 Aug 2020</td>
                    </tr>
                    <tr>
                        <td>Can you give me some tips how to sight read?</td>
                        <td>Jane Houston</td>
                        <td>13 Aug 2020</td>
                    </tr>
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}