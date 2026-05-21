// Hero — split layout: text left, visual right with quick quote card

function Hero({ onNavigate }) {
  return (
    <section id="top" style={{
      position: 'relative',
      paddingTop: 140,
      paddingBottom: 100,
      overflow: 'hidden',
      background: `
        radial-gradient(ellipse 80% 60% at 80% 20%, var(--sky-soft) 0%, transparent 55%),
        radial-gradient(ellipse 70% 50% at 15% 75%, var(--accent-soft) 0%, transparent 60%),
        radial-gradient(ellipse 40% 30% at 50% 10%, var(--blue-soft) 0%, transparent 70%),
        var(--paper)
      `,
    }}>
      <Bubbles count={18} />

      {/* Decorative leaves */}
      <div className="leaf" style={{ top: '18%', left: '4%', fontSize: 28, animationDelay: '0.5s' }}>
        <Icon.Leaf size={28} />
      </div>
      <div className="leaf" style={{ bottom: '12%', right: '6%', fontSize: 36, animationDelay: '1.5s' }}>
        <Icon.Leaf size={36} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Left — copy */}
          <div>
            <h1 style={{
              fontSize: 'clamp(42px, 6vw, 82px)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 0.98,
              marginBottom: 28,
              color: '#1a6599',
            }}>
              Un nettoyage<br/>
              <span className="serif" style={{ color: '#2d8f7f', fontStyle: 'italic', fontWeight: 400 }}>impeccable,</span><br/>
              sans y penser.
            </h1>

            <p style={{
              fontSize: 19,
              color: 'var(--ink-mute)',
              maxWidth: 500,
              marginBottom: 36,
              lineHeight: 1.55,
            }}>
              Services de nettoyage professionnel pour bureaux, commerces, chantiers et résidentiels à Bruxelles. Équipes formées, produits respectueux, tarifs transparents.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => onNavigate('quote')} style={{ padding: '16px 26px', fontSize: 16 }}>
                Obtenir un devis <Icon.Arrow />
              </button>
              <button className="btn btn-ghost" onClick={() => onNavigate('services')} style={{ padding: '16px 26px', fontSize: 16 }}>
                Voir les services
              </button>
            </div>
          </div>

          {/* Right — visual */}
          <HeroVisual onNavigate={onNavigate} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

function TrustItem({ value, label, highlight }) {
  return (
    <div>
      <div style={{
        fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em',
        display: 'flex', alignItems: 'center', gap: 4,
        color: highlight ? 'var(--sun)' : 'var(--ink)',
      }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 2 }}>{label}</div>
    </div>
  );
}

function HeroVisual({ onNavigate }) {
  const [zoom, setZoom] = useState(1);
  return (
    <div style={{ position: 'relative' }}>
      {/* Circle frame + photo */}
      <div style={{ position: 'relative', aspectRatio: '1/1', maxWidth: 520, margin: '0 auto' }}
        onMouseEnter={() => setZoom(1.05)}
        onMouseLeave={() => setZoom(1)}
      >
        {/* Rings */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          background: 'conic-gradient(from 90deg, var(--accent), var(--sky), var(--blue), var(--accent))',
          filter: 'blur(40px)',
          opacity: 0.25,
        }}/>
        <div style={{
          position: 'absolute', inset: '4%',
          borderRadius: '50%',
          border: '1.5px dashed var(--accent)',
          opacity: 0.4,
          animation: 'spin 30s linear infinite',
        }}/>

        {/* Photo circle */}
        <div style={{
          position: 'absolute', inset: '8%',
          borderRadius: '50%',
          overflow: 'hidden',
          background: `
            radial-gradient(circle at 30% 30%, #e8d9b8, #b89968 70%),
            linear-gradient(135deg, var(--blue-soft), var(--accent-soft))
          `,
          boxShadow: '0 30px 60px -20px rgba(11,25,41,0.3)',
          transform: `scale(${zoom})`,
          transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
            alt="Équipe de nettoyage professionnelle"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* Floating cards */}
        <FloatingCard style={{ top: '10%', left: '-8%', animationDelay: '0s' }}>
          <Icon.Check size={16} />
          <div>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>Équipe en route</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Ixelles · 09:15</div>
          </div>
        </FloatingCard>

        <FloatingCard style={{ bottom: '8%', right: '-6%', animationDelay: '1.2s' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--accent-soft)', color: 'var(--accent-deep)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon.Sparkle size={18} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>Mission terminée</div>
            <div style={{ fontSize: 14, fontWeight: 600, display: 'flex', gap: 2, color: 'var(--sun)' }}>
              {[...Array(5)].map((_,i) => <Icon.Star key={i} size={12}/>)}
            </div>
          </div>
        </FloatingCard>

        {/* Small cta */}
        <button onClick={() => onNavigate('quote')} style={{
          position: 'absolute', bottom: '-4%', left: '50%', transform: 'translateX(-50%)',
          padding: '12px 18px', background: 'var(--ink)', color: 'white',
          borderRadius: 999, fontSize: 14, fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', gap: 10,
          boxShadow: 'var(--shadow-lg)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 1.6s ease-in-out infinite' }}/>
          Disponible cette semaine
        </button>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,143,127,0.7); }
          50% { box-shadow: 0 0 0 8px rgba(45,143,127,0); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

function FloatingCard({ children, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: 'white',
      padding: '12px 14px',
      borderRadius: 14,
      boxShadow: '0 18px 40px -12px rgba(11,25,41,0.22)',
      display: 'flex', alignItems: 'center', gap: 10,
      border: '1px solid var(--line)',
      animation: 'floatUp 4s ease-in-out infinite',
      ...style,
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { Hero });
