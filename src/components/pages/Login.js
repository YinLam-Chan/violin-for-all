import React from 'react';
import '../../App.css';
import './Login.css';

export default function Login() {
    return (
        <div className='home'>
            <h1 className='login'>Login</h1>
            <form>
                <label className='label'>Email:</label>
                <input type="text" name="email"></input>
                <br/>
                <label className='label'>Password:</label>
                <input type="text" name="password"></input>
            </form>

            <button className='create-new' type="button">Create New Account</button>
            <button className='submit' type="button">Login</button>
        </div>
    )
}