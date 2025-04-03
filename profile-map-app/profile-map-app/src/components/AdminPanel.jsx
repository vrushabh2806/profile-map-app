// src/components/AdminPanel.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: { lat: 0, lng: 0 } });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', photo: '', description: '', address: { lat: 0, lng: 0 } });
  };

  return (
    <div>
      <h2>Add New Profile</h2>
      <TextField
        label="Name"
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <TextField
        label="Photo URL"
        value={newProfile.photo}
        onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
      />
      <TextField
        label="Description"
        value={newProfile.description}
        onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
      />
      <TextField
        label="Latitude"
        type="number"
        value={newProfile.address.lat}
        onChange={(e) => setNewProfile({ ...newProfile, address: { ...newProfile.address, lat: parseFloat(e.target.value) } })}
      />
      <TextField
        label="Longitude"
        type="number"
        value={newProfile.address.lng}
        onChange={(e) => setNewProfile({ ...newProfile, address: { ...newProfile.address, lng: parseFloat(e.target.value) } })}
      />
      <Button variant="contained" onClick={handleAddProfile}>
        Add Profile
      </Button>
    </div>
  );
};

export default AdminPanel;
