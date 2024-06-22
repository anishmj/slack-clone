import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import './mainpage.css'; // Styles for Mainpage
import logo from './assets/slack_logo.jpeg';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
                    <Button
                        variant="outlined"
                        color="primary"
                        className="talk-sales"
                        endIcon={<PhoneIcon/>}
                    >
                        TALK TO SALES
                    </Button>
                </div>
            </header>

            <div className='blue-nav'>
            <button>
            <nav>
                <span>✅ There’s a new way to manage projects and tasks in Slack.Start using lists</span>
                </nav>
            </button>
            </div>
            <main className="main-content">
                <h1>Welcome to Slack</h1>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLoginClick}
                    className="main-button"
                >
                    Get Started
                </Button>
                <br />
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={handleLoginClick}
                    className="main-button mt-2"
                >
                    Login
                </Button>
            </main>
        </div>
    );
}

export default Mainpage;
