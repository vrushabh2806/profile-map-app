// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import ProfileList from '../components/ProfileList';
import Map from '../components/Map';
import profileService from '../services/profileService';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await profileService.getProfiles();
        setProfiles(data);
      } catch (error) {
        setError('Failed to fetch profiles.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ProfileList profiles={profiles} onShowMap={handleShowMap} />
      {selectedProfile && <Map address={selectedProfile.address} />}
    </div>
  );
};

export default Home;
