import './styles/Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__initials" href="#" aria-label="Alicia Fakolujo, back to top">
        A.F.
      </a>

      <nav className="navbar__nav" aria-label="Main">
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="navbar__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="navbar__email" href="mailto:aliciafakolujo@gmail.com">
        aliciafakolujo@gmail.com
      </a>
    </header>
  )
}

export default Navbar
