import React from 'react';
import '../../App.css';
import './SheetMusic.css';
import * as ReactBootStrap from 'react-bootstrap';

export default function SheetMusic() {
    const music = [
        {name: "River flows in you", file: "PDF file download"},
        {name: "Canon in D", file: "PDF file download"}
    ]

    const renderMusic = (music, index) => {
        return (
            <tr key={index}>
                <td>{music.name}</td>
                <td>{music.file}</td>
            </tr>
        )
    }

    return (
        <div className='page'>
            <h1 className='sheetMusic'>Sheet Music</h1>

            <h2 className='level'>Easy</h2>

            <div>
                <ReactBootStrap.Table className='musicTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>File</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mary has a little lamb</td>
                            <td>PDF file download</td>
                        </tr>
                        <tr>
                            <td>Twinkle twinkle little star</td>
                            <td>PDF file download</td>
                        </tr>
                        <tr>
                            <td>Happy birthday to you</td>
                            <td>PDF file download</td>
                        </tr>
                    </tbody>
                </ReactBootStrap.Table >

                <h2 className='level'>Intermediate</h2>

                <ReactBootStrap.Table className='musicTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>File</th>
                        </tr>
                    </thead>
                    <tbody>
                        {music.map(renderMusic)}
                    </tbody>
                </ReactBootStrap.Table>

                <h2 className='level'>Difficult</h2>

                <ReactBootStrap.Table className='musicTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>File</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Moonlight Sonata</td>
                            <td>PDF file download</td>
                        </tr>
                        <tr>
                            <td>Swan lake</td>
                            <td>PDF file download</td>
                        </tr>
                    </tbody>
                </ReactBootStrap.Table>

                <button className='upload' type="button">Upload new sheet music</button>
            </div>
        </div>
    );
}