import React from 'react';
import logo from '../assets/logo.svg';

export default function Main({ match}){

    return (
        <div className = "main-container">
            <img src = {logo} alt="Devs"/>
            <ul>
                <li>
                       <img src = "https://avatars0.githubusercontent.com/u/2787467?v=4" alt = "Avatar" /> 
                       <footer>
                           <strong>And</strong>
                           <p>SSSS</p>
                        </footer>
                </li>
            </ul>

        </div>

    );

}