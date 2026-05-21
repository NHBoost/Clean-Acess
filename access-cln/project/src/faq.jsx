// FAQ — image à gauche + accordéon à droite, avec titre bi-color

function Faq() {
  const items = [
    {
      q: 'Quels types de lieux nettoyez-vous ?',
      a: 'Nous intervenons dans les bureaux, commerces, cabinets, copropriétés, maisons et appartements. Nous proposons aussi des prestations sur mesure : fin de chantier, remise en état, vitres en hauteur, nettoyage après sinistre.',
    },
    {
      q: 'Vos produits sont-ils écologiques ?',
      a: 'Oui. Nous privilégions des produits certifiés Ecolabel européen, biodégradables et sans solvants toxiques. Nous utilisons aussi des microfibres lavables et réutilisables pour limiter les déchets.',
    },
    {
      q: 'Comment se passe la prise de rendez-vous ?',
      a: 'Remplissez le formulaire de devis en ligne ou appelez-nous. Nous revenons vers vous sous 24h avec une estimation détaillée, puis planifions une visite gratuite pour confirmer le besoin avant de démarrer.',
    },
    {
      q: 'Dois-je être présent·e pendant la prestation ?',
      a: "Ce n'est pas obligatoire. Beaucoup de nos clients nous confient un jeu de clés ou un code d'accès. Nos agents sont tous assurés, formés et signent un accord de confidentialité.",
    },
    {
      q: "Que se passe-t-il si je ne suis pas satisfait·e ?",
      a: "Nous refaisons la prestation gratuitement sous 48h. Notre satisfaction client est notre priorité : chaque intervention se termine par une checklist et une photo transmise à votre interlocuteur dédié.",
    },
    {
      q: 'Proposez-vous un contrat d\'entretien régulier ?',
      a: 'Oui — hebdomadaire, bi-mensuel ou mensuel, ajustable à tout moment. Un seul interlocuteur suit votre dossier, connaît votre lieu, et garantit la continuité en cas d\'absence de votre agent habituel.',
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad" style={{ background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ marginBottom: 56, maxWidth: 900 }}>
          <h2 className="h2-uniform" style={{ lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--ink)' }}>
            Vous avez des <span style={{ color: 'var(--accent)' }}>questions,</span><br/>
            nous avons les <span style={{ color: 'var(--accent)' }}>réponses.</span>
          </h2>
        </div>

        <div className="faq-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Image */}
          <div className="reveal faq-image" style={{
            position: 'relative',
            borderRadius: 28,
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: 'linear-gradient(135deg, #d8ecf7 0%, #b8dcf0 100%)',
          }}>
            <img src="assets/faq-cleaner.png"
              alt="Service de nettoyage"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => e.currentTarget.style.display = 'none'}/>
          </div>

          {/* Accordion */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {items.map((item, i) => (
              <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .faq-image { aspect-ratio: 16/10 !important; max-height: 420px; }
        }
      `}</style>
    </section>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid ' + (open ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 18,
      transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      boxShadow: open ? '0 8px 24px -12px rgba(26, 101, 153, 0.18)' : 'none',
      overflow: 'hidden',
    }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 20, padding: '22px 26px',
          background: 'transparent', border: 'none',
          textAlign: 'left', cursor: 'pointer',
          fontSize: 17, fontWeight: 700, color: 'var(--ink)',
          fontFamily: 'inherit',
        }}
      >
        <span>{item.q}</span>
        <span aria-hidden="true" style={{
          flexShrink: 0,
          width: 28, height: 28,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: open ? 'var(--accent)' : 'var(--ink-mute)',
          transition: 'color 0.2s ease, transform 0.3s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? <line x1="5" y1="12" x2="19" y2="12"/> : (
              <>
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </>
            )}
          </svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{ padding: '0 26px 22px', fontSize: 15, color: 'var(--ink-mute)', lineHeight: 1.6 }}>
          {item.a}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Faq });
