import React, { useState, useEffect } from 'react';
import { searchGithubUser } from '../api/API'; // Assuming searchGithubUser is the API fetch function

interface Candidate {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
}

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Initialize as an empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch candidates data
  const fetchCandidates = async () => {
    try {
      const username = 'example_username'; // Replace with actual username or fetch dynamically
      const data = await searchGithubUser(username); // Fetch from API

      // Check if the data is an array before setting it
      setCandidates(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch candidates');
      setLoading(false);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCandidates();
  }, []);

  // JSX to render the component
  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {candidates.length > 0 ? (
        <ul>
          {candidates.length > 0 && (
            <>
              {(() => {
                const items = [];
                for (let i = 0; i < candidates.length; i++) {
                  const candidate = candidates[i];
                  items.push(
                    <li key={candidate.id}>
                      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                        <img src={candidate.avatar_url} alt={candidate.login} width="50" height="50" />
                        <span>{candidate.login}</span>
                      </a>
                      <p>Public Repos: {candidate.public_repos}</p>
                    </li>
                  );
                }
                return items;
              })()}
            </>
          )}
        </ul>
      ) : (
        !loading && <p>No candidates found.</p>
      )}
    </div>
  );
};

export default CandidateSearch;