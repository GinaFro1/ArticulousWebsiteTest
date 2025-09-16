import './About.css';
import GameCard from './GameCard';

function About() {
  return (
    <section id="about" className="about glass">
      <h2>About Us</h2>
      <p>
        Articulous Network is a unique Minecraft server that combines elements of Genshin
        Impact and Hypixel, offering a captivating adventure for players of all ages.
      </p>

      <div className="cards">
        <GameCard 
          title="Duels" 
          icon="⚔️" 
          description="Battle head-to-head against other players in exciting duels!" 
        />
        <GameCard 
          title="Bedwars" 
          icon="🛡️" 
          description="Protect your bed and destroy your opponents in this strategic game." 
        />
        <GameCard 
          title="Murder Mystery" 
          icon="🔍" 
          description="Find the murderer before it’s too late in this thrilling game mode." 
        />
      </div>
    </section>
  );
}

export default About;
