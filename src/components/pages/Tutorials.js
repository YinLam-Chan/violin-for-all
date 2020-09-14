import React, { useState, Component } from 'react';
import '../../App.css';
import beginnerviolins from '../images/beginner-violins.jpg';
import intermediateviolins from '../images/intermediate-violin.jpg';
import advancedviolins from '../images/advanced-violin.jpg';
import './Tutorials.css';

export default function Tutorials() {
    return (
        <div className='home'>
            <h1 className='tutorials'>Tutorials</h1>

            <h2 className='level'>Beginner Level</h2>

            <img className='levelImage'src={beginnerviolins} />

            <br />
            <h2 className='level'>Intermediate Level</h2>

            <img className='levelImage'src={intermediateviolins} />

            <br />
            <h2 className='level'>Advanced Level</h2>

            <img className='levelImage'src={advancedviolins} />
        </div>
    )
}