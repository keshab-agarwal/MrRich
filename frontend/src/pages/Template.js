import React, { useState, useEffect } from 'react';
import News from '../components/News.js';
import About from '../components/About.js';
import Graph from '../components/Graph.js';
import logo from '../images/logo.png';
import './Template.css';
import { useParams, Link } from 'react-router-dom';

export const Template = () => {
    const { id } = useParams();
    const id_url = '/' + id;

    useEffect(() => {
        fetch(id_url).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => console.log(data))
    }, []);

    return (
        <div className='template'>
            <div className='template_upper'>
                <Link to= {'/'}>
                    <img className='template_logo' src={logo} alt='money_logo'/>
                </Link>
                <h1>{id}</h1>
            </div>
            <Graph />
            <div className='template_lower'>
               <News />
               <About />
            </div>
        </div>
    )
};