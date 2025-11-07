import React from 'react';

// 1. Define the type for a single navigation link object
interface NavLink {
  path: string;
  label: string;
}

// 2. Define the links for the Victory Pizza site
const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  
  { path: '/contact', label: 'Contact' },
];

// 3. Define the Navbar component
const Navbar: React.FC = () => {
  // We'll use simple inline styles for now. You can put this in a separate CSS file later.
  const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    backgroundColor: '#ff6b35', // Your primary-color
    color: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle: React.CSSProperties = {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: '600',
    transition: 'color 0.3s',
  };

  return (
    <nav style={navStyle}>
      {/* Brand/Logo */}
      <div style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '1px' }}>
        VICTORY PIZZA
      </div>

      {/* Navigation Links */}
      <div>
        {navLinks.map((link) => (
          // In a real app, you would use a 'Link' component from a router library (like react-router-dom) here.
          <a key={link.path} href={link.path} style={linkStyle}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;