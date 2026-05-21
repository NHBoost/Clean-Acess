// About — histoire & valeurs

function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--paper-2)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left — copy */}
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 16 }}>— À propos</div>
            <h2 className="h2-uniform" style={{ marginBottom: 24, color: '#1a6599' }}>
              Dix ans à prendre soin des lieux<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>où vous travaillez et vivez.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-mute)', marginBottom: 20, lineHeight: 1.65 }}>
              Accès Clean est né d'une conviction simple&nbsp;: un espace propre change la manière dont on s'y sent. Depuis 2014, nous accompagnons des bureaux, des commerces et des particuliers bruxellois avec la même rigueur, que la mission dure une heure ou toute l'année.
            </p>
            <p style={{ fontSize: 17, color: 'var(--ink-mute)', marginBottom: 32, lineHeight: 1.65 }}>
              Nous formons nos équipes en interne, privilégions les produits écologiques certifiés, et construisons chaque prestation avec vous — parce qu'aucun lieu ne se nettoie vraiment comme un autre.
            </p>

            <a href="#why" onClick={(e) => { e.preventDefault(); document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 600, color: 'var(--accent-deep)', borderBottom: '1.5px solid var(--accent)', paddingBottom: 4 }}>
              Découvrir notre méthode <Icon.Arrow size={14} />
            </a>
          </div>

          {/* Right — image */}
          <div className="reveal about-image-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="assets/about-cleaner.png" alt="Équipe Accès Clean" style={{
              width: '100%', maxWidth: 560, height: 'auto', display: 'block',
            }}/>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}

function Value({ icon, title, desc }) {
  const IconCmp = Icon[icon];
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <div style={{
        flexShrink: 0,
        width: 40, height: 40, borderRadius: 10,
        background: 'var(--accent-soft)', color: 'var(--accent-deep)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <IconCmp />
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.45 }}>{desc}</div>
      </div>
    </div>
  );
}

Object.assign(window, { About });
