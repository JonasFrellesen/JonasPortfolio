type NavItem = {
  href: string;
  label: string;
  submenu?: Array<{
    href: string;
    label: string;
  }>;
};

const semesterOrder = [
  'First semester',
  'Second semester',
  'Third semester',
  'Fourth semester',
  'Fifth semester',
  'Sixth semester',
  'Seventh semester',
  'Eighth semester',
  'Ninth semester',
  '10. semester',
];

function semesterToId(semester: string) {
  return semester
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  {
    href: '#projects',
    label: 'Projects',
    submenu: semesterOrder.map((semester) => ({
      href: `#${semesterToId(semester)}`,
      label: semester,
    })),
  },
  { href: '#voluntary-work', label: 'Voluntary Work' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">My Portfolio</div>
      <nav aria-label="Primary">
        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.href} className={item.submenu ? 'nav-item nav-item-dropdown' : 'nav-item'}>
              <a href={item.href}>{item.label}</a>
              {item.submenu ? (
                <div className="nav-dropdown" aria-label={`${item.label} semesters`}>
                  <span className="nav-dropdown-label">Choose semester</span>
                  <div className="nav-dropdown-links">
                    {item.submenu.map((submenuItem) => (
                      <a key={submenuItem.href} href={submenuItem.href} className="nav-dropdown-link">
                        {submenuItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
