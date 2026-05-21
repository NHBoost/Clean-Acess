// Process — 4 étapes minimalistes, numérotées, animées

function WorkProcess() {
  const steps = [
    {
      n: '01',
      title: 'Contact',
      desc: "Vous nous exposez votre besoin en quelques lignes — par formulaire, mail ou téléphone.",
    },
    {
      n: '02',
      title: 'Visite & devis',
      desc: "Nous venons sur place, mesurons, écoutons, puis vous remettons un devis détaillé sous 24h.",
    },
    {
      n: '03',
      title: 'Intervention',
      desc: "Une équipe dédiée, du matériel adapté, des produits écologiques — tout est prêt le jour J.",
    },
    {
      n: '04',
      title: 'Suivi',
      desc: "Photos de fin de mission, checklist validée, et un interlocuteur unique pour la suite.",
    },
  ];

  return (
    <section id="process" className="section-pad" style={{ background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 60, alignItems: 'end', marginBottom: 80,
        }} data-process-head>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>— Notre méthode</div>
            <h2 className="h2-uniform" style={{ lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1a6599' }}>
              Un process clair,<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>quatre étapes.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--ink-mute)', lineHeight: 1.65, maxWidth: 440, justifySelf: 'end' }}>
            De la première prise de contact au suivi post-intervention, chaque étape est pensée pour vous faire gagner du temps et vous rassurer.
          </p>
        </div>

        {/* Timeline */}
        <div className="process-timeline" style={{ position: 'relative' }}>
          {/* Animated connector line */}
          <ProcessLine />

          <div className="process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            position: 'relative',
            zIndex: 2,
          }}>
            {steps.map((s, i) => (
              <ProcessStep key={s.n} step={s} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-process-head] { grid-template-columns: 1fr !important; gap: 20px !important; }
          [data-process-head] > p { justify-self: start !important; }
          .process-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .process-line { display: none !important; }
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(29, 172, 243, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(29, 172, 243, 0); }
        }

        .process-step-dot {
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .process-step:hover .process-step-dot {
          background: var(--accent);
          transform: scale(1.2);
        }
        .process-step:hover .process-step-num {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}

function ProcessLine() {
  const ref = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProgress(1);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="process-line" style={{
      position: 'absolute',
      top: 12, left: '6%', right: '6%',
      height: 1, zIndex: 1,
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: 'var(--line)',
      }}/>
      <div style={{
        position: 'absolute', top: 0, left: 0,
        height: '100%',
        width: `${progress * 100}%`,
        background: 'linear-gradient(to right, var(--accent), var(--sky))',
        transition: 'width 1.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}/>
    </div>
  );
}

function ProcessStep({ step, index }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.35 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const delay = 0.25 + index * 0.18;

  return (
    <div ref={ref} className="process-step" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      cursor: 'default',
    }}>
      {/* Dot on the line */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 32, position: 'relative', height: 24 }}>
        <div className="process-step-dot" style={{
          width: 24, height: 24, borderRadius: '50%',
          background: 'var(--paper)',
          border: '2px solid var(--accent)',
          position: 'relative',
          animation: visible ? `dotPulse 2.4s ease-in-out infinite ${delay + 0.3}s` : 'none',
        }}>
          <div style={{
            position: 'absolute', inset: 4,
            borderRadius: '50%',
            background: 'var(--accent)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0)',
            transition: `all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay + 0.4}s`,
          }}/>
        </div>
      </div>

      {/* Number */}
      <div className="process-step-num serif" style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: 64,
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        color: 'var(--ink-mute)',
        marginBottom: 16,
        transition: 'color 0.3s ease',
      }}>
        {step.n}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        marginBottom: 10,
        color: 'var(--ink)',
      }}>
        {step.title}
      </h3>

      {/* Desc */}
      <p style={{
        fontSize: 15,
        color: 'var(--ink-mute)',
        lineHeight: 1.6,
      }}>
        {step.desc}
      </p>
    </div>
  );
}

Object.assign(window, { WorkProcess });
