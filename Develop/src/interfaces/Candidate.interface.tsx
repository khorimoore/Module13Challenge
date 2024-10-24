import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Adjust path as needed

const CandidatesPage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Define the type for candidates array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch candidates data
  const fetchCandidates = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.github.com/users'); // GitHub API for users
      const data: Candidate[] = await response.json();
      setCandidates(data); // Set the candidates in state
    } catch (err) {
      setError('Failed to fetch candidates'); // Handle errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  // Render the component
  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      {error && <p>{error}</p>} {/* Show error message */}

      {/* Render the list of candidates */}
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={candidate.name + "'s avatar"} width={100} />
            <h3>{candidate.name}</h3>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
            <p>{candidate.bio ? candidate.bio : "No bio available"}</p>
            <p>Public Repos: {candidate.public_repos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesPage;