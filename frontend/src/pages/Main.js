import React from 'react';
import logo from '../assets/logo.svg';

import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match}){

    return (
        <div className = "main-container">
            <img src = {logo} alt = "Dev" />  
            <ul>
                <li>
                       <img src = "https://avatars0.githubusercontent.com/u/2787467?v=4" alt = "Avatar" /> 
                       <footer>
                           <strong>And</strong>
                           <p>SSSS</p>
                        </footer>
                        <div className = "buttons">
                            <button type ="button"><img src = {dislike} alt = "Dislike"></button>
                            <button type ="button"><img src = {like} alt = "Like"></button>
                        </div>
                </li>
            </ul>

        </div>

    );

}