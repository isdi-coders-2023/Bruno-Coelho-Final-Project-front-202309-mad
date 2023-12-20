console.log('LOCATION', location);

export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:2700'
    : 'https://bruno-beauty-care.onrender.com';
