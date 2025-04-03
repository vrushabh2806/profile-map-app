// src/pages/Admin.jsx
import React, { useState } from 'react';
import AdminPanel from '../components/AdminPanel';
import profileService from '../services/profileService';

const Admin = () => {
  const [profiles, setProfiles] = useState([]);

  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminPanel profiles={profiles} setProfiles={setProfiles} />
      <h2>Current Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
