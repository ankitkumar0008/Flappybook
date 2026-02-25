import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo-dot"></div>
        <h1 className="brand-title">Flappy Book</h1>
      </div>

      <nav className="nav">
        <a href="#hero" className="nav-link">Home</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#cta" className="nav-link">Contact</a>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;