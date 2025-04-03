// src/services/profileService.js
const profiles = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://via.placeholder.com/100',
      description: 'Software Engineer',
      address: { lat: 34.0522, lng: -118.2437 } // Los Angeles
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/100',
      description: 'Graphic Designer',
      address: { lat: 40.7128, lng: -74.0060 } // New York
    }
  ];
  
  const getProfiles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profiles);
      }, 1000);
    });
  };
  
  export default { getProfiles };
  