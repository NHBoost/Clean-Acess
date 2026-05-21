// Why us — grid of reasons with icons + stats band

function Why() {
  const reasons = [
    { icon: 'Clock', title: 'Disponibilité rapide', desc: 'Intervention sous 48h pour la plupart des demandes, même en urgence.' },
    { icon: 'Shield', title: 'Équipes assurées', desc: 'Tous nos agents sont déclarés, formés et couverts par notre RC pro.' },
    { icon: 'Eco', title: 'Produits écologiques', desc: 'Nous privilégions les produits certifiés Ecolabel, meilleurs pour vous et pour nos équipes.' },
  ];

  return (
    <section id="why" className="section-pad" style={{ background: 'linear-gradient(160deg, #0f3a63 0%, #1a6599 60%, #0b4a7a 100%)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <Bubbles count={10} tint="rgba(255,255,255,0.15)" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ marginBottom: 16, color: 'var(--sky)' }}>— Pourquoi nous contacter</div>
          <h2 className="h2-uniform" style={{ color: 'var(--paper)' }}>
            Six raisons de<br/>
            <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>nous confier vos lieux.</span>
          </h2>
        </div>

        <div className="why-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}>
          {reasons.map((r, i) => (
            <ReasonCard key={i} reason={r} idx={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 560px) {
          .why-grid + div { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function ReasonCard({ reason, idx }) {
  const IconCmp = Icon[reason.icon];
  const [hover, setHover] = useState(false);
  return (
    <div className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 32,
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 'var(--radius-lg)',
        background: hover ? 'rgba(255,255,255,0.04)' : 'transparent',
        transition: 'all 0.3s',
        transitionDelay: `${idx * 60}ms`,
        cursor: 'default',
        position: 'relative',
      }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hover ? 'var(--sky)' : 'rgba(255,255,255,0.06)',
        color: hover ? 'var(--ink)' : 'var(--sky)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transition: 'all 0.3s',
        transform: hover ? 'rotate(-6deg)' : 'none',
      }}>
        <IconCmp />
      </div>
      <h3 style={{ fontSize: 20, marginBottom: 10, color: 'var(--paper)' }}>{reason.title}</h3>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>{reason.desc}</p>
      <div style={{
        position: 'absolute', top: 20, right: 24,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
      }}>
        0{idx + 1}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(29,172,243,0.04) 0%, var(--ink) 100%)',
      padding: '36px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 700,
        letterSpacing: '-0.03em', color: 'var(--sky)',
        marginBottom: 6,
      }}>{value}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
    </div>
  );
}

Object.assign(window, { Why });
