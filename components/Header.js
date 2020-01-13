import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div />
      <div className="navbar__navigation-items">
        <Link href="/">
          <a className="navbar__link" style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/about">
          <a className="navbar__link" style={linkStyle}>À propos</a>
        </Link>
        <Link href="/EventsPage">
          <a className="navbar__link" style={linkStyle}>Événements</a>
        </Link>
        <Link href="/RessourcesPage">
          <a className="navbar__link" style={linkStyle}>Ressources</a>
        </Link>
        <Link href="/contact">
        <a className="navbar__link" style={linkStyle}>Contact</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
