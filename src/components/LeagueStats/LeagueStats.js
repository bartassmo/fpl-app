import React, { useEffect, useState } from 'react';
import { getClassicLeagueStandings } from 'services/api';

const LeagueStats = () => {
  const [leagueData, setLeagueData] = useState(null);
  const [leagueCode, setLeagueCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLeagueCodeChange = (e) => {
    setLeagueCode(e.target.value);
  };

  const fetchLeagueData = () => {
    setLoading(true);
    getClassicLeagueStandings(leagueCode)
      .then((response) => {
        console.log(response.data);
        setLeagueData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych ligi klasycznej:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>{leagueData ? leagueData.league.name : 'Brak danych o lidze'}</h2>
      <input
        type="text"
        placeholder="Wprowadź kod ligi"
        value={leagueCode}
        onChange={handleLeagueCodeChange}
      />
      <button onClick={fetchLeagueData}>Pobierz dane ligi</button>

      {loading ? (
        <div>Czekam na dane ligi...</div>
      ) : leagueData ? (
        <div>
          <h3>Wyniki Ligi Klasycznej</h3>
          {leagueData.standings.results.map((result, index) => (
            <div key={index}>
              <p>Miejsce: {result.rank}</p>
              <p>Manager: {result.entry_name}</p>
              <p>Punkty: {result.total}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default LeagueStats;
