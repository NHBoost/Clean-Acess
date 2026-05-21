// Quote form — 3-step wizard with progress bar

function Quote() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    service: '',
    surface: '',
    frequency: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const steps = ['Type de service', 'Détails du lieu', 'Vos coordonnées'];

  const canNext = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.surface && !!data.frequency;
    if (step === 2) return !!data.name && !!data.email && !!data.phone;
    return false;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!canNext()) return;
    setDone(true);
  };

  return (
    <section id="quote" className="section-pad" style={{ background: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <Bubbles count={8} />
      <div className="leaf" style={{ top: '12%', right: '6%' }}><Icon.Leaf size={32} /></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="quote-grid" style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 72,
          alignItems: 'start',
        }}>
          {/* Left — intro */}
          <div className="reveal" style={{ position: 'sticky', top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>— Obtenir un devis</div>
            <h2 className="h2-uniform" style={{ marginBottom: 24, color: '#1a6599' }}>
              Trois étapes,<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>réponse sous 24h.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-mute)', marginBottom: 32 }}>
              Dites-nous ce dont vous avez besoin — nous revenons vers vous avec une proposition claire, détaillée et sans engagement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <BulletFact icon="Check" text="Devis gratuit et sans engagement" />
              <BulletFact icon="Check" text="Visite sur site possible avant proposition" />
              <BulletFact icon="Check" text="Réponse sous 24 heures ouvrées" />
            </div>

            <div style={{
              marginTop: 40,
              padding: 20,
              background: 'var(--paper-2)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--line)',
            }}>
              <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Urgent ?</div>
              <a href="tel:+32491916464" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 18 }}>
                <Icon.Phone /> +32 491 91 64 64
              </a>
              <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 4 }}>
                Lun–Ven · 8h–19h
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{
            background: 'white',
            borderRadius: 'var(--radius-xl)',
            padding: 40,
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--line)',
            minHeight: 480,
          }}>
            {done ? (
              <SuccessState onReset={() => { setDone(false); setStep(0); setData({ service:'', surface:'', frequency:'', address:'', name:'', email:'', phone:'', message:'' }); }} name={data.name} />
            ) : (
              <>
                {/* Progress */}
                <div style={{ marginBottom: 36 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                    {steps.map((label, i) => (
                      <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 13, fontWeight: 700,
                          background: i <= step ? 'var(--accent)' : 'var(--paper-2)',
                          color: i <= step ? 'white' : 'var(--ink-mute)',
                          transition: 'all 0.4s',
                          flexShrink: 0,
                        }}>
                          {i < step ? <Icon.Check size={14}/> : i + 1}
                        </div>
                        <div className="step-label" style={{
                          fontSize: 13, fontWeight: 600,
                          color: i === step ? 'var(--ink)' : 'var(--ink-mute)',
                          whiteSpace: 'nowrap',
                        }}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ height: 3, background: 'var(--paper-2)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{
                      width: `${((step + 1) / steps.length) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--accent) 0%, var(--sky) 60%, var(--blue) 100%)',
                      transition: 'width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                      borderRadius: 999,
                    }}/>
                  </div>
                </div>

                {/* Steps */}
                <form onSubmit={submit}>
                  {step === 0 && <StepService data={data} update={update} />}
                  {step === 1 && <StepDetails data={data} update={update} />}
                  {step === 2 && <StepContact data={data} update={update} />}

                  {/* Nav */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 32, justifyContent: 'space-between' }}>
                    <button type="button" className="btn btn-ghost"
                      disabled={step === 0}
                      onClick={() => setStep(s => Math.max(0, s - 1))}
                      style={{ opacity: step === 0 ? 0.4 : 1 }}>
                      Retour
                    </button>
                    {step < steps.length - 1 ? (
                      <button type="button" className="btn btn-accent"
                        disabled={!canNext()}
                        onClick={() => canNext() && setStep(s => s + 1)}
                        style={{ opacity: canNext() ? 1 : 0.5 }}>
                        Continuer <Icon.Arrow size={14}/>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary"
                        disabled={!canNext()}
                        style={{ opacity: canNext() ? 1 : 0.5 }}>
                        Envoyer ma demande <Icon.Arrow size={14}/>
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quote-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .quote-grid > div:first-child { position: static !important; }
        }
        @media (max-width: 560px) { .step-label { display: none; } }
      `}</style>
    </section>
  );
}

function BulletFact({ icon, text }) {
  const IconCmp = Icon[icon];
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        background: 'var(--accent-soft)', color: 'var(--accent-deep)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}><IconCmp size={16}/></div>
      <div style={{ fontSize: 15 }}>{text}</div>
    </div>
  );
}

function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{label}</label>
      {children}
      {hint && <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1.5px solid var(--line-2)',
  borderRadius: 12,
  background: 'var(--paper)',
  fontSize: 15,
  transition: 'all 0.2s',
  outline: 'none',
};

function StepService({ data, update }) {
  return (
    <div>
      <h3 style={{ fontSize: 22, marginBottom: 8 }}>De quel service avez-vous besoin ?</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-mute)', marginBottom: 24 }}>Choisissez la prestation qui correspond le mieux à votre demande.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {SERVICES.map(s => {
          const IconCmp = Icon[s.icon];
          const active = data.service === s.id;
          return (
            <button key={s.id} type="button" onClick={() => update('service', s.id)}
              style={{
                padding: '16px',
                border: active ? '1.5px solid var(--accent)' : '1.5px solid var(--line-2)',
                background: active ? 'var(--accent-soft)' : 'var(--paper)',
                borderRadius: 12,
                textAlign: 'left',
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                transition: 'all 0.2s',
              }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: active ? 'var(--accent)' : 'white',
                color: active ? 'white' : 'var(--accent-deep)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}><IconCmp /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.title}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDetails({ data, update }) {
  return (
    <div>
      <h3 style={{ fontSize: 22, marginBottom: 8 }}>Parlez-nous du lieu</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-mute)', marginBottom: 24 }}>Ces informations nous aident à construire un devis précis.</p>

      <Field label="Surface approximative">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {['< 50 m²', '50–150 m²', '150–400 m²', '> 400 m²'].map(opt => (
            <button key={opt} type="button" onClick={() => update('surface', opt)}
              style={{
                padding: '12px 8px',
                border: data.surface === opt ? '1.5px solid var(--accent)' : '1.5px solid var(--line-2)',
                background: data.surface === opt ? 'var(--accent-soft)' : 'var(--paper)',
                borderRadius: 10, fontSize: 13, fontWeight: 600,
                color: data.surface === opt ? 'var(--accent-deep)' : 'var(--ink)',
              }}>{opt}</button>
          ))}
        </div>
      </Field>

      <Field label="Fréquence souhaitée">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {['Ponctuel', 'Hebdo.', 'Mensuel', 'Quotidien'].map(opt => (
            <button key={opt} type="button" onClick={() => update('frequency', opt)}
              style={{
                padding: '12px 8px',
                border: data.frequency === opt ? '1.5px solid var(--accent)' : '1.5px solid var(--line-2)',
                background: data.frequency === opt ? 'var(--accent-soft)' : 'var(--paper)',
                borderRadius: 10, fontSize: 13, fontWeight: 600,
                color: data.frequency === opt ? 'var(--accent-deep)' : 'var(--ink)',
              }}>{opt}</button>
          ))}
        </div>
      </Field>

      <Field label="Adresse / quartier" hint="Commune ou adresse approximative, pour estimer les déplacements.">
        <input type="text" value={data.address} onChange={(e) => update('address', e.target.value)}
          placeholder="Ex. Ixelles, avenue Louise…" style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--line-2)'}
        />
      </Field>
    </div>
  );
}

function StepContact({ data, update }) {
  return (
    <div>
      <h3 style={{ fontSize: 22, marginBottom: 8 }}>Dernière étape — vos coordonnées</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-mute)', marginBottom: 24 }}>Nous revenons vers vous sous 24h ouvrées.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Field label="Nom complet">
          <input type="text" value={data.name} onChange={e => update('name', e.target.value)} style={inputStyle} placeholder="Marie Dupont"
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-2)'}/>
        </Field>
        <Field label="Téléphone">
          <input type="tel" value={data.phone} onChange={e => update('phone', e.target.value)} style={inputStyle} placeholder="+32…"
            onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-2)'}/>
        </Field>
      </div>
      <Field label="Email">
        <input type="email" value={data.email} onChange={e => update('email', e.target.value)} style={inputStyle} placeholder="marie@exemple.be"
          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-2)'}/>
      </Field>
      <Field label="Message (optionnel)">
        <textarea value={data.message} onChange={e => update('message', e.target.value)}
          rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
          placeholder="Précisions, contraintes d'accès, horaires…"
          onFocus={(e) => e.target.style.borderColor = 'var(--accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-2)'}
        />
      </Field>
    </div>
  );
}

function SuccessState({ onReset, name }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{
        width: 84, height: 84, borderRadius: '50%',
        background: 'var(--accent-soft)', color: 'var(--accent-deep)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 28px',
        animation: 'pop 0.5s cubic-bezier(0.2, 1.5, 0.3, 1)',
      }}>
        <Icon.Check size={44} />
      </div>
      <h3 style={{ fontSize: 28, marginBottom: 12 }}>Merci{name ? `, ${name.split(' ')[0]}` : ''} !</h3>
      <p style={{ fontSize: 16, color: 'var(--ink-mute)', marginBottom: 28, maxWidth: 400, margin: '0 auto 28px' }}>
        Votre demande a bien été envoyée. Nous revenons vers vous sous 24 heures ouvrées avec une proposition détaillée.
      </p>
      <button className="btn btn-ghost" onClick={onReset}>Faire une autre demande</button>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Quote });
