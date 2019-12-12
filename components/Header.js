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
          <a style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/events">
          <a style={linkStyle}>Événenents</a>
        </Link>
        <Link href="/ressources">
          <a style={linkStyle}>Ressources</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Qui sommes-nous ?</a>
        </Link>
        <Link href="/faq">
          <a style={linkStyle}>FAQ</a>
        </Link>
        <a style={linkStyle}>Contact</a>
      </div>
    </nav>
  </header>
);

export default Header;
