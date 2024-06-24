import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import './mainpage.css'; // Styles for Mainpage
import logo from './assets/slack_logo.jpeg';
import hello from './assets/hello.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';

function Mainpage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <header className="navbar">
                <img src={logo} alt="Slack Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Enterprise</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </nav>

                <div className="search-box">
                    <button className="main-button" onClick={handleLoginClick}>
                        Get Started
                    </button>
                </div>
            </header>

            <div className='blue-nav'>
                <nav>
                    <span>✅ There’s a new way to manage projects and tasks in Slack. Start using lists</span>
                </nav>
            </div>

            <div className='welcome-back'>
                <nav>
                    <img src={hello} alt="Hello" className="hello" />
                    <span>Welcome back</span>
                </nav>
            </div>

            <div className='cards'>
                <div className='card'>
                    <img src={img1} alt='Image 1' className='card-img'></img>
                    <div className='card-content'>
                        <h3>Your quick start guide to Slack</h3>
                       
                        <button className='card-button'>Get Started</button>
                    </div>
                </div>

                <div className='card'>
                    <img src={img2} alt='Image 1' className='card-img'></img>
                    <div className='card-content'>
                        <h3>Find and Start Conversations</h3>
                        
                        <button className='card-button'>Get Started</button>
                    </div>
                </div>

                <div className='card'>
                    <img src={img3} alt='Image 1' className='card-img'></img>
                    <div className='card-content'>
                        <h3>How to use Channels Effectively</h3>
                       
                        <button className='card-button'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;
