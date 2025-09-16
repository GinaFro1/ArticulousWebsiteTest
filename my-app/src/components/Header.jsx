import './Header.css';

function Header() {
  return (
    <header className="glass header">
      <nav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#community">Community</a>
      </nav>
      <button className="join-btn">Join Now</button>
    </header>
  );
}

export default Header;