// Tweaks panel — palette / bubbles / hero density toggles

function Tweaks({ settings, setSettings }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (k, v) => {
    const next = { ...settings, [k]: v };
    setSettings(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  if (!active) return null;

  return (
    <div className="tweaks-panel open">
      <h4>Tweaks</h4>

      <div className="tweak-row">
        <label>Palette</label>
        <div className="chips">
          {[
            { id: 'default', label: 'Frais' },
            { id: 'soft', label: 'Doux' },
            { id: 'premium', label: 'Premium' },
          ].map(p => (
            <button key={p.id}
              className={`chip ${settings.palette === p.id ? 'active' : ''}`}
              onClick={() => update('palette', p.id)}
            >{p.label}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Bulles décor</label>
        <div className="chips">
          {[
            { id: 'on', label: 'Visibles' },
            { id: 'off', label: 'Masquées' },
          ].map(p => (
            <button key={p.id}
              className={`chip ${settings.bubbles === p.id ? 'active' : ''}`}
              onClick={() => update('bubbles', p.id)}
            >{p.label}</button>
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Accent hero</label>
        <div className="chips">
          {[
            { id: 'serif', label: 'Serif italique' },
            { id: 'bold', label: 'Sans bold' },
          ].map(p => (
            <button key={p.id}
              className={`chip ${settings.heroAccent === p.id ? 'active' : ''}`}
              onClick={() => update('heroAccent', p.id)}
            >{p.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
