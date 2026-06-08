const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#voluntary-work', label: 'Voluntary Work' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
