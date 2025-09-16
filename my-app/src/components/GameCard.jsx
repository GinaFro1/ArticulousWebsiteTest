import { useState } from 'react';
import './GameCard.css';

function GameCard({ title, icon, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`game-card glass ${expanded ? 'expanded' : ''}`} 
      onClick={() => setExpanded(!expanded)}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      {expanded && <p>{description}</p>}
    </div>
  );
}

export default GameCard;
