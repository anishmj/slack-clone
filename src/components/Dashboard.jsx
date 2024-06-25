import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Button as BootstrapButton } from 'react-bootstrap';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GestureIcon from '@mui/icons-material/Gesture';
import LogoutIcon from '@mui/icons-material/Logout';
import Addchannel from './Addchannel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom'; // Import Link to handle navigation within the app
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [muiAnchorEl, setMuiAnchorEl] = useState(null);
  const muiOpen = Boolean(muiAnchorEl);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null); // State for account button dropdown
  const accountOpen = Boolean(accountAnchorEl); // Open state for account dropdown
  const [showAddChannel, setShowAddChannel] = useState(false);
  const [channels, setChannels] = useState([]);

  // Fetch channels from localStorage on component mount
  useEffect(() => {
    const storedChannels = JSON.parse(localStorage.getItem('channels')) || [];
    setChannels(storedChannels);
  }, []);

  // Update localStorage whenever channels state changes
  useEffect(() => {
    localStorage.setItem('channels', JSON.stringify(channels));
  }, [channels]);

  const handleMuiClick = (event) => {
    setMuiAnchorEl(event.currentTarget);
  };

  const handleMuiClose = () => {
    setMuiAnchorEl(null);
  };

  const handleAccountClick = (event) => {
    setAccountAnchorEl(event.currentTarget); // Open account dropdown
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null); // Close account dropdown
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing session data, etc.)
    // After logout, redirect to the main page
    navigate('/mainpage'); // Redirect to the main page (assuming '/mainpage' is your main page route)
  };

  const handleAddChannelClick = () => {
    setShowAddChannel(true);
  };

  const handleBackToDashboard = () => {
    setShowAddChannel(false);
  };

  const handleAddChannel = (channelName) => {
    if (channelName) {
      setChannels(prevChannels => [...prevChannels, channelName]);
      setShowAddChannel(false);
    }
  };

  return (
    <div className="dashboard">
      <div className='sidebar'>
        <div className='des-side'>
          <Button variant="" endIcon={<DragHandleIcon />}></Button>
        </div>
        <div className='user-side'>
          <Button variant="" endIcon={<AccountCircleIcon />}></Button>
        </div>
        <div className='home-side'>
          <Button variant="" endIcon={<HomeIcon />}></Button>
        </div>
        <div className='more-side'>
          <Button variant="" endIcon={<MoreHorizIcon />}></Button>
        </div>
        <div className='account'>
          <Button variant='' endIcon={<LogoutIcon />} onClick={handleAccountClick}></Button>
          <Menu
            anchorEl={accountAnchorEl}
            open={accountOpen}
            onClose={handleAccountClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem component={Link} to="/profile" onClick={handleAccountClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='content'>
        {showAddChannel ? (
          <Addchannel onAddChannel={handleAddChannel} onBack={handleBackToDashboard} />
        ) : (
          <>
            <div className='newChannel'>
              <Button variant="contained" endIcon={<RocketLaunchIcon />}>
                UPDATE PLAN
              </Button>
            </div>
            <div className='threads'>
              <BootstrapButton variant='secondary'>
                <GestureIcon /> Threads
              </BootstrapButton>
            </div>
            <div className='draftssent'>
              <BootstrapButton variant="secondary">
                <RocketLaunchIcon /> Drafts & Sent
              </BootstrapButton>
            </div>
            <div className='opt-button'>
              <Button
                variant="contained"
                endIcon={<ChevronDownIcon />}
                onClick={handleMuiClick}
              >
                Channels
              </Button>
              <Menu
                anchorEl={muiAnchorEl}
                open={muiOpen}
                onClose={handleMuiClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleMuiClose}>Create</MenuItem>
                <MenuItem onClick={handleMuiClose}>Manage</MenuItem>
              </Menu>
              {channels.map((channel, index) => (
                <div className='channel' key={index}>
                  <BootstrapButton variant="secondary">
                    <TagIcon /> {channel}
                  </BootstrapButton>
                </div>
              ))}
              <div className='addchannel'>
                <BootstrapButton
                  variant="secondary"
                  onClick={handleAddChannelClick}
                >
                  <AddIcon /> Add Channel
                </BootstrapButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
