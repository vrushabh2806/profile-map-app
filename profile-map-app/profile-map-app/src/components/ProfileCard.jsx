// src/components/ProfileCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProfileCard = ({ profile, onShowMap }) => {
  return (
    <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h5">{profile.name}</Typography>
        <img src={profile.photo} alt={profile.name} width="100" />
        <Typography variant="body2">{profile.description}</Typography>
        <Button variant="contained" onClick={() => onShowMap(profile)}>
          Summary
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
