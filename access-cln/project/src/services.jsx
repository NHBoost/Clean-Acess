// Services grid — icon-based with hover reveal

const SERVICES = [
  { id: 'bureaux', icon: 'Building', title: 'Bureaux & entreprises', desc: 'Entretien régulier ou ponctuel pour espaces de travail. Équipes disponibles en soirée pour ne pas perturber votre activité.', tag: 'Le plus demandé' },
  { id: 'residentiel', icon: 'Home', title: 'Résidentiel', desc: 'Nettoyage régulier, grand nettoyage de printemps, avant/après location. Sur-mesure pour votre foyer.' },
  { id: 'vitres', icon: 'Window', title: 'Vitres & baies vitrées', desc: 'Intérieur, extérieur, accès en hauteur. Résultat sans traces, matériel professionnel.' },
  { id: 'chantier', icon: 'HardHat', title: 'Fin de chantier', desc: 'Dépoussiérage profond, retrait des résidus de construction, remise en état avant livraison.' },
  { id: 'commerces', icon: 'Factory', title: 'Commerces & industriels', desc: 'Surfaces commerciales, ateliers, entrepôts. Protocoles adaptés à vos contraintes d\'exploitation.' },
  { id: 'desinfection', icon: 'Shield', title: 'Désinfection', desc: 'Traitement en profondeur aux produits homologués, idéal post-maladie ou en prévention.' },
  { id: 'copropriete', icon: 'Stairs', title: 'Copropriétés', desc: 'Entretien de communs, cages d\'escalier, ascenseurs, parkings. Passages programmés.' },
  { id: 'sols', icon: 'Spray', title: 'Traitement des sols', desc: 'Décapage, cristallisation, cirage, shampoing moquette. Redonne vie à toute surface.' },
];

function Services({ onNavigate }) {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }} >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>— Nos services</div>
            <h2 className="h2-uniform" style={{ color: '#1a6599' }}>
              Huit domaines d'expertise,<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>une seule exigence.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--ink-mute)', maxWidth: 440 }}>
            Quel que soit le lieu, le volume ou la fréquence, nous composons une prestation sur mesure avec des équipes formées et du matériel adapté.
          </p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'var(--line)',
        }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} onClick={() => onNavigate('quote')} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="reveal">
          <button className="btn btn-accent" onClick={() => onNavigate('quote')} style={{ padding: '16px 28px', fontSize: 16 }}>
            Demander un devis personnalisé <Icon.Arrow />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, onClick }) {
  const [hover, setHover] = useState(false);
  const IconCmp = Icon[service.icon];
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--blue)' : 'var(--paper)',
        color: hover ? 'var(--paper)' : 'var(--ink)',
        padding: '36px 28px 28px',
        textAlign: 'left',
        transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
      }}>
      {service.tag && (
        <span style={{
          position: 'absolute', top: 16, right: 16,
          fontSize: 10, fontFamily: 'var(--font-mono)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 8px', borderRadius: 999,
          background: hover ? 'var(--sky)' : 'var(--sky-soft)',
          color: hover ? 'var(--ink)' : 'var(--blue-deep)',
          transition: 'all 0.35s',
        }}>{service.tag}</span>
      )}

      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: hover ? 'rgba(255,255,255,0.12)' : 'var(--accent-soft)',
        color: hover ? 'var(--sky)' : 'var(--accent-deep)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transition: 'all 0.35s',
        transform: hover ? 'rotate(-6deg) scale(1.05)' : 'none',
      }}>
        {IconCmp && <IconCmp />}
      </div>

      <h3 style={{ fontSize: 20, marginBottom: 10, letterSpacing: '-0.015em' }}>{service.title}</h3>
      <p style={{
        fontSize: 14,
        color: hover ? 'rgba(255,255,255,0.75)' : 'var(--ink-mute)',
        lineHeight: 1.5,
        flex: 1,
      }}>{service.desc}</p>

      <div style={{
        marginTop: 20,
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 13, fontWeight: 600,
        color: hover ? 'var(--sky)' : 'var(--accent-deep)',
        transform: hover ? 'translateX(4px)' : 'none',
        transition: 'transform 0.3s',
      }}>
        Demander un devis <Icon.Arrow size={14} />
      </div>
    </button>
  );
}

Object.assign(window, { Services, SERVICES });
