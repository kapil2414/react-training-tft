// UserProfile.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './UserProfile.scss';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <Card className="search-card">
        <TextField
          label="Enter GitHub Username"
          variant="outlined"
          value={username}
          onChange={handleChange}
          className="search-input"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Card>
      
      {userData && (
        <Card className="user-details-card">
          <h2>User Details</h2>
          <img src={userData.avatar_url} alt="User Avatar" />
          <p>Name: {userData.name}</p>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Location: {userData.location}</p>
          <p>Website: <a href={userData.blog}>{userData.blog}</a></p>
        </Card>
      )}
    </div>
  );
};

export default UserProfile;
