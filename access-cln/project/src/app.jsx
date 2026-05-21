// App root — composes all sections

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "default",
  "bubbles": "on",
  "heroAccent": "serif"
}/*EDITMODE-END*/;

function App() {
  const [settings, setSettings] = useState(TWEAK_DEFAULTS);
  const [active, setActive] = useState('top');
  useReveal();

  // Apply palette
  useEffect(() => {
    if (settings.palette === 'default') document.documentElement.removeAttribute('data-palette');
    else document.documentElement.setAttribute('data-palette', settings.palette);
  }, [settings.palette]);

  // Toggle bubbles
  useEffect(() => {
    document.documentElement.style.setProperty('--bubbles-display', settings.bubbles === 'off' ? 'none' : 'block');
    const style = document.getElementById('bubbles-toggle') || Object.assign(document.createElement('style'), { id: 'bubbles-toggle' });
    style.textContent = settings.bubbles === 'off' ? '.bubbles, .leaf { display: none !important; }' : '';
    if (!style.parentNode) document.head.appendChild(style);
  }, [settings.bubbles]);

  // Active section tracking
  useEffect(() => {
    const ids = ['top', 'services', 'process', 'about', 'why', 'gallery', 'faq', 'quote'];
    const onScroll = () => {
      let found = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) found = id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (id === 'top' ? 0 : 80);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div data-screen-label="Landing">
      <Header onNavigate={navigate} active={active} />
      <Hero onNavigate={navigate} settings={settings} />
      <Services onNavigate={navigate} />
      <About />
      <WorkProcess />
      <Why />
      <Gallery />
      <Faq />
      <Quote />
      <Footer onNavigate={navigate} />
      <Tweaks settings={settings} setSettings={setSettings} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
