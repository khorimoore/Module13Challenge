import React, { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
}

const CandidatesPage: React.FC = () => {
  
  const [candidates, setCandidates] = useState<Candidate[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
  const fetchCandidates = async () => {
    setLoading(true); 
    try {
      const response = await fetch('https://api.github.com/users');
      const data: Candidate[] = await response.json(); 
      setCandidates(data); 
    } catch (err) {
      setError('Failed to fetch candidates'); 
    } finally {
      setLoading(false); 
    }
  };


  useEffect(() => {
    fetchCandidates(); 
  }, []);

  
  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} 


      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} width={100} />
            <h3>{candidate.name}</h3>
            <p>{candidate.bio || 'No bio available'}</p> 
            <p>Public Repos: {candidate.public_repos}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesPage;