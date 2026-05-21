// Sticky header with scroll-aware styling + mobile menu

function Header({ onNavigate, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'top', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'gallery', label: 'Nos réalisations' },
    { id: 'faq', label: 'FAQ' },
    { id: 'quote', label: 'Devis' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(251, 250, 246, 0.88)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNavigate('top'); }} style={{ display: 'flex', alignItems: 'center', gap: 10 }} aria-label="Accès Clean">
          <img src="assets/logo.png" alt="Accès Clean — L'exigence du propre pour professionnels et particuliers" style={{ height: 56, width: 'auto', display: 'block' }} />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
              style={{
                padding: '10px 14px',
                fontSize: 14,
                fontWeight: 500,
                color: active === l.id ? 'var(--ink)' : 'var(--ink-mute)',
                borderRadius: 999,
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = active === l.id ? 'var(--ink)' : 'var(--ink-mute)'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="tel:+32491916464" className="phone-pill" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 14px', border: '1px solid var(--line-2)', borderRadius: 999,
            fontSize: 13, fontWeight: 600,
          }}>
            <Icon.Phone size={14} /><span className="phone-text">+32 491 91 64 64</span>
          </a>
          <a href="mailto:info@accesclean.com" className="mail-pill" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 14px', border: '1px solid var(--line-2)', borderRadius: 999,
            fontSize: 13, fontWeight: 600,
          }}>
            <Icon.Mail size={14} /><span className="mail-text">info@accesclean.com</span>
          </a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: 'none', padding: 8, borderRadius: 8,
          }}>
            {menuOpen ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: scrolled ? 66 : 82, left: 0, right: 0,
          background: 'white', borderBottom: '1px solid var(--line)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNavigate(l.id); setMenuOpen(false); }}
              style={{ padding: '14px 8px', fontSize: 16, fontWeight: 500, borderBottom: '1px solid var(--line)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .phone-text, .mail-text { display: none; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 560px) {
          .mail-pill { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function LogoMark() {
  return (
    <div style={{
      width: 36, height: 36,
      borderRadius: 10,
      background: 'linear-gradient(135deg, var(--accent) 0%, var(--blue) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'white',
      boxShadow: '0 4px 12px -2px rgba(45, 143, 127, 0.4)',
    }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14 C4 9 8 5 12 5 C16 5 20 9 20 14 C20 18 16 21 12 21 C8 21 4 18 4 14 Z"/>
        <circle cx="9" cy="11" r="1.2" fill="currentColor"/>
      </svg>
    </div>
  );
}

Object.assign(window, { Header, LogoMark });
