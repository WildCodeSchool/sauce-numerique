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
        <Link href="/events">
          <a className="navbar__link" style={linkStyle}>Événements</a>
        </Link>
        <Link href="/ressources">
          <a className="navbar__link" style={linkStyle}>Ressources</a>
        </Link>
        <Link href="/about">
          <a className="navbar__link" style={linkStyle}>Qui sommes-nous ?</a>
        </Link>
        <Link href="/faq">
          <a className="navbar__link" style={linkStyle}>FAQ</a>
        </Link>
        <Link href="/contact">
        <a className="navbar__link" style={linkStyle}>Contact</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
