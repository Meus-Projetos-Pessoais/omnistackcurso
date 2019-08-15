import React from 'react';
//import React, {useState} from 'react';
import logo from '../assets/logo.svg';
//import api from '../services/api';


export default function Main({ match}){

    return (

        <div className = "main-container">
            <img src = {logo} alt="Devs"/>
            <ul>
                <li>
                       <img src = "https://avatars0.githubusercontent.com/u/2787467?v=4" alt = "Avatar" /> 
                </li>
            </ul>

        </div>

    )
}