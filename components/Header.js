import Link from 'next/link';

const Header = () => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div />
      <div className="navbar-container">
        <Link href="/">
          <a className="navbar-link">Accueil</a>
        </Link>
        <Link href="/about">
          <a className="navbar-link">À propos</a>
        </Link>
        <Link href="/EventsPage">
          <a className="navbar-link">Événements</a>
        </Link>
        <Link href="/RessourcesPage">
          <a className="navbar-link">Ressources</a>
        </Link>
        <Link href="/contact">
          <a className="navbar-link">Contact</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
