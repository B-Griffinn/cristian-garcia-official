import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Services.css';

function Services() {

    //state management
    const [ clicked, setClicked ] = useState() 

    const history = useHistory();

    // handle click
    const handleClick = () => {
        history.push('/contact')
    }

    return (
        <div className='services-wrapper'>
            <div className="services-content">

                <div className="programs">
                    <h2>Programs</h2>
                <div className="session">
                    <ul
                        className='session-list'
                        >
                        Current Offered Programs:
                    <li 
                        className="program-link 10-week-program"
                    >
                        <button 
                            onClick={handleClick}
                            className="session-btn"
                        >
                            10 WEEKS
                        </button>
                    </li>
                    <li 
                        className="program-link 12-week-program"
                    >
                        <button 
                            onClick={handleClick}
                            className="session-btn"
                        >
                            12 WEEKS
                        </button>
                    </li>
                    </ul>
                    </div>
                </div>

                <div className="programs">
                <h2>Sessions</h2>
                <div className="session">
                    <ul className='session-list'>
                    In person training options:
                        <li className='sessiont-item'>
                            <button
                                onClick={handleClick}
                                className='session-btn'
                            >
                            Power Crush Napa
                            </button>
                        </li>
                        <li className='sessiont-item'>
                            <button
                                onClick={handleClick}
                                className='session-btn'
                            >
                            My Home Gym
                            </button>
                        </li>
                        <li className='sessiont-item'>
                            <button
                                onClick={handleClick}
                                className='session-btn'
                            >
                            Zoom
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Services
