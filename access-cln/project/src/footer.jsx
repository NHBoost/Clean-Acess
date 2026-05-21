// Footer — dark, organized, with social icons

function Footer({ onNavigate }) {
  return (
    <footer style={{ background: '#061d35', color: 'rgba(255,255,255,0.75)', padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
      {/* Brand accent stripe at top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--sky), var(--blue), var(--accent), transparent)',
      }}/>

      <div className="container">
        {/* Top CTA */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center',
          paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 56,
        }} className="footer-cta">
          <div>
            <h3 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'white', marginBottom: 12 }}>
              Prêt à confier<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>vos lieux à une équipe sûre ?</span>
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 480 }}>
              Devis gratuit sous 24h. Aucun engagement.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }} className="footer-cta-btns">
            <button className="btn btn-accent" onClick={() => onNavigate('quote')} style={{ padding: '16px 24px' }}>
              Obtenir un devis <Icon.Arrow />
            </button>
            <a href="tel:+32491916464" className="btn btn-ghost" style={{ padding: '16px 24px', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
              <Icon.Phone size={16}/> +32 491 91 64 64
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
        }} className="footer-cols">
          <div>
            <div style={{ marginBottom: 20 }}>
              <img src="assets/logo.png" alt="Accès Clean" style={{ height: 80, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.92 }} />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 24, maxWidth: 320 }}>
              Nettoyage professionnel à Bruxelles depuis 2014. Bureaux, commerces, résidentiel, fin de chantier.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { Icon: Icon.Instagram, label: 'Instagram' },
                { Icon: Icon.Facebook, label: 'Facebook' },
                { Icon: Icon.Linkedin, label: 'LinkedIn' },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                ><s.Icon /></a>
              ))}
            </div>
          </div>

          <FooterCol title="Services">
            {SERVICES.slice(0, 6).map(s => (
              <FooterLink key={s.id} onClick={() => onNavigate('quote')}>{s.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Entreprise">
            <FooterLink onClick={() => onNavigate('about')}>À propos</FooterLink>
            <FooterLink onClick={() => onNavigate('why')}>Pourquoi nous</FooterLink>
            <FooterLink onClick={() => onNavigate('quote')}>Obtenir un devis</FooterLink>
          </FooterCol>

          <FooterCol title="Contact">
            <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start', fontSize: 14 }}>
              <Icon.Phone size={16} />
              <a href="tel:+32491916464" style={{ color: 'rgba(255,255,255,0.85)' }}>+32 491 91 64 64</a>
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start', fontSize: 14 }}>
              <Icon.Mail size={16} />
              <a href="mailto:contact@acces-clean.be" style={{ color: 'rgba(255,255,255,0.85)' }}>contact@acces-clean.be</a>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 12 }}>
              Avenue Louise 123<br/>
              1050 Ixelles, Bruxelles
            </div>
            <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', marginTop: 16, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Lun–Ven · 8h–19h
            </div>
          </FooterCol>
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontSize: 13, color: 'rgba(255,255,255,0.5)',
        }}>
          <div>© {new Date().getFullYear()} Accès Clean. Tous droits réservés.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-cta { grid-template-columns: 1fr !important; }
          .footer-cta-btns { justify-content: flex-start !important; }
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) { .footer-cols { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 style={{
        fontSize: 12, fontFamily: 'var(--font-mono)', textTransform: 'uppercase',
        letterSpacing: '0.1em', color: 'white', marginBottom: 16,
      }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

function FooterLink({ children, onClick }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
      style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
    >{children}</a>
  );
}

Object.assign(window, { Footer });
