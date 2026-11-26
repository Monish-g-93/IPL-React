
import { useState } from 'react';

function MatchCard(props) {

  const [booked, setBooked] = useState(false);

  return (
    <div>
      <h2>{props.team1} vs {props.team2}</h2>
      <p>Date: {props.date}</p>
      <p>Venue: {props.venue}</p>

      <button onClick={() => setBooked(true)}>
        {booked ? "Ticket Booked!" : "Book Ticket"}
      </button>

    </div>
  );
}

export default MatchCard;

