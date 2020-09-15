import React from 'react';
import '../../App.css';
import * as ReactBootStrap from 'react-bootstrap';
import './Forum.css';

export default function Forum() {
    return (
        <div className='page'>
            <h1 className='forum'>Forum</h1>

            <button className='open' type="button">Open new post</button>

            <ReactBootStrap.Table className='forumTable'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Poster name</th>
                        <th>Post date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>How to solve tension problem when playing violin?</td>
                        <td>Josie White</td>
                        <td>2 Sep 2020</td>
                    </tr>
                    <tr>
                        <td>Recommandation for a good shoulder rest</td>
                        <td>Paul Williams</td>
                        <td>27 Aug 2020</td>
                    </tr>
                    <tr>
                        <td>Stentor Student 1 vs Christina Vo2</td>
                        <td>Liz Michael</td>
                        <td>15 Aug 2020</td>
                    </tr>
                    <tr>
                        <td>How do I play this note?</td>
                        <td>Peter Gouth</td>
                        <td>13 Aug 2020</td>
                    </tr>
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}