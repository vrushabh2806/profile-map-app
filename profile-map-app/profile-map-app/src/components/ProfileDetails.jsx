// src/components/ProfileDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Location: {`Lat: ${profile.address.lat}, Lng: ${profile.address.lng}`}</p>
    </div>
  );
};

export default ProfileDetails;
