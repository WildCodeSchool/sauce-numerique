import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Accueil</a>
    </Link>
    <Link href="/getevents">
      <a style={linkStyle}>Événements</a>
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
);

export default Header;
