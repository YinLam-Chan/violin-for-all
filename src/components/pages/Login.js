import React from 'react';
import '../../App.css';

export default function Login() {
    return (
        <div className='home'>
            <h1 className='login'>Login</h1>
            <form>
                <label>Email:</label>
                <input type="text" name="email"></input>

                <label>Password:</label>
                <input type="text" name="password"></input>
            </form>

            <button type="button">Create New Account</button>
            <button type="button">Login</button>
        </div>
    )
}