
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';

function App() {

  const matches = [
    {
      team1: "RCB",
      team2: "CSK",
      date: "28 March 2026",
      venue: "Bengaluru"
    },
    {
      team1: "MI",
      team2: "KKR",
      date: "29 March 2026",
      venue: "Mumbai"
    },
    {
      team1: "SRH",
      team2: "RR",
      date: "30 March 2026",
      venue: "Hyderabad"
    },
    {
      team1: "CSK",
      team2: "MI",
      date: "31 March 2026",
      venue: "Chennai"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <h2>Upcoming IPL Matches</h2>

      {matches.map((match, index) => (
        <MatchCard
          key={index}
          team1={match.team1}
          team2={match.team2}
          date={match.date}
          venue={match.venue}
        />
      ))}
    </>
  );
}

export default App;
