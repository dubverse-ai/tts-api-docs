import React, { useState, useEffect } from 'react';

export const SpeakerList = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('https://poopy.dubverse.ai/api/v3/data/speakers/')
        .then(response => response.json())
        .then(data => setSpeakers(data))
        .catch(error => console.error('Error fetching speakers:', error));
    }
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div>
      <h2>Available Speakers</h2>
      <ul>
        {speakers.map(speaker => (
          <li key={speaker.id}>
            <strong>{speaker.name}</strong> ({speaker.gender}) - {speaker.language}
            <br />
            Speaker No: {speaker.speaker_no}, Type: {speaker.type}
            <br />
            Description: {speaker.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
