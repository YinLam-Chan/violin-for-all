import React from 'react';
import '../../App.css';
import logo from '../images/SchoolOrchestra.jpg';
import './Home.css';

export default function Home() {
    return (
        
        <div className='home'>

            <img className='orchestra-logo'src={logo} />

            <h2 className='school'>Waimea College School Orchestra</h2>

            <p className='description'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <p className='description'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <p className='description'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        
    )
}