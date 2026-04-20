import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);           // header search
  const [sidebarSearchOpen, setSidebarSearchOpen] = useState(false); // sidebar search
  const [query, setQuery] = useState('');

  const headerSearchRef = useRef(null);
  const sidebarSearchRef = useRef(null);
  const searchInputRef = useRef(null);
  const sidebarInputRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (sidebarSearchOpen && sidebarInputRef.current) sidebarInputRef.current.focus();
  }, [sidebarSearchOpen]);

  // Click outside header search
  useEffect(() => {
    function handleClickOutside(e) {
      if (headerSearchRef.current && !headerSearchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Click outside sidebar search
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarSearchRef.current && !sidebarSearchRef.current.contains(e.target)) {
        setSidebarSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape closes searches and sidebar
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSidebarSearchOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  const submitSearch = (term) => {
    const q = (term || '').trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setSidebarSearchOpen(false);
    setOpen(false);
  };

  const handleHeaderSubmit = (e) => {
    e.preventDefault();
    submitSearch(query);
  };

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    const val = sidebarInputRef.current?.value || '';
    submitSearch(val);
  };

  return (
    <>
      <header className={`header ${open ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">

            {/* HAMBURGER */}
            <button
              className={`hamburger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <svg className="icon-menu" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g className="menu-lines" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line className="line line1" x1="3" y1="6" x2="21" y2="6" />
                  <line className="line line2" x1="3" y1="12" x2="21" y2="12" />
                  <line className="line line3" x1="3" y1="18" x2="21" y2="18" />
                </g>
              </svg>
            </button>

            {/* NAV IZQUIERDA */}
            <nav className="nav nav-left" aria-hidden={open}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/products" className={`nav-link ${isActive('/products')}`}>PRODUCTS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/where-to-buy" className={`nav-link ${isActive('/where-to-buy')}`}>WHERE TO BUY</Link>
                </li>
              </ul>
            </nav>

            {/* LOGO CENTRADO */}
            <div className="logo logo-center">
              <Link to="/" onClick={() => { setOpen(false); setSearchOpen(false); setSidebarSearchOpen(false); }}>
                <img src="/img/LOGO_NOCCIOLA.jpg" alt="Nocciola Logo" />
              </Link>
            </div>

            {/* NAV DERECHA */}
            <nav className="nav nav-right nav-desktop" aria-hidden={open}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${isActive('/about')}`}>ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>CONTACT</Link>
                </li>

                {/* LUPA HEADER */}
                <li className="nav-item nav-item--search" ref={headerSearchRef}>
                  <button
                    type="button"
                    className={`nav-link nav-link--icon ${searchOpen ? 'open' : ''}`}
                    aria-label={searchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
                    aria-expanded={searchOpen}
                    onClick={() => { setSearchOpen(s => !s); setSidebarSearchOpen(false); }}
                  >
                    <svg className="icon-search" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </button>

                  <form
                    className={`search-form ${searchOpen ? 'visible' : ''}`}
                    onSubmit={handleHeaderSubmit}
                    role="search"
                    aria-hidden={!searchOpen}
                  >
                    <input
                      ref={searchInputRef}
                      className="search-input"
                      type="search"
                      name="q"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Buscar..."
                      aria-label="Buscar en el sitio"
                    />
                    <button type="submit" className="search-submit" aria-label="Buscar">Go</button>
                  </form>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div className={`overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-header">
          <div className="sidebar-title">Menú</div>
          <button className="sidebar-close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="sidebar-search-block" ref={sidebarSearchRef}>
          <button
            type="button"
            className={`nav-link nav-link--icon sidebar-lupa ${sidebarSearchOpen ? 'open' : ''}`}
            aria-label={sidebarSearchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
            aria-expanded={sidebarSearchOpen}
            onClick={() => { setSidebarSearchOpen(s => !s); setSearchOpen(false); }}
          >
            <svg className="icon-search" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>

          <form
            className={`search-form sidebar-search-form ${sidebarSearchOpen ? 'visible' : ''}`}
            onSubmit={handleSidebarSubmit}
            role="search"
            aria-hidden={!sidebarSearchOpen}
          >
            <input
              ref={sidebarInputRef}
              className="search-input"
              type="search"
              name="q"
              defaultValue=""
              placeholder="Buscar..."
              aria-label="Buscar en el sitio"
            />
            <button type="submit" className="search-submit" aria-label="Buscar">Go</button>
          </form>
        </div>

        <nav>
          <ul className="sidebar-list">
            <li><Link to="/products" onClick={() => setOpen(false)}>PRODUCTS</Link></li>
            <li><Link to="/where-to-buy" onClick={() => setOpen(false)}>WHERE TO BUY</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <small>© Nocciola</small>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
