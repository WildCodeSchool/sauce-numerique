import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div />
      <div className="navbar-container">
        <Link href="/">
          <a className="navbar-link" style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/about">
          <a className="navbar-link" style={linkStyle}>À propos</a>
        </Link>
        <Link href="/EventsPage">
          <a className="navbar-link" style={linkStyle}>Événements</a>
        </Link>
        <Link href="/RessourcesPage">
          <a className="navbar-link" style={linkStyle}>Ressources</a>
        </Link>
        <Link href="/contact">
          <a className="navbar-link" style={linkStyle}>Contact</a>
        </Link>
      <style jsx>{`
       

      `}</style>
      </div>
    </nav>
  </header>
);

export default Header;
