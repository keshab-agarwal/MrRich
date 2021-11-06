import React, { useState } from 'react';
import logo from '../images/logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const fullListedCorps = ['Apple(AAPL)', 'Cisco(CSCO)', 'Amazon(AMZN)', 'Metaverse(FB)', 'Sony(SONY)', 'Google(GOOG)'];
    const addyListedCorps = ['AAPL', 'CSCO', 'AMZN', 'FB', 'SONY', 'GOOG']
    return (
        <div className='home'>
            <div className='home_upper'>
                <img src={logo} alt='money_logo'/>
                <h1>Mr.Rich</h1>
            </div>
            <h2>start making easy informed investing decisions today</h2>
            <div className='home_mid'>
                <input 
                    type='text'
                    placeholder='search...'
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <div className='home_subMid'>
                    {fullListedCorps.filter((name) => {
                        if (searchTerm === "") {
                            return ""
                        } else if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return name
                        }
                    }).map((name, index) => {
                        let address='./quote/' + addyListedCorps[index];
                        return (
                            <div key={index}>
                                <Link to={address} style={{ textDecoration: 'none', color: 'black' }}>
                                    <h3 className='home_corp'>{name}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>   
            </div>
            <div className='home_low'>
                <h1>now serving for following companies:</h1>
                <div className='home_subLow'>
                    <ul>
                        <li>Apple(AAPL)</li>
                        <li>Cisco(CSCO)</li>
                        <li>Amazon(AMZN)</li>
                    </ul>
                    <ul>
                        <li>Metaverse (FB)</li>
                        <li>Sony (SONY)</li>
                        <li>Google (GOOG)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;
