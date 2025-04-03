// src/components/ProfileList.jsx
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onShowMap }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onShowMap={onShowMap} />
      ))}
    </div>
  );
};

export default ProfileList;
