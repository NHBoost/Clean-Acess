// Shared icons, hooks, helpers
const { useState, useEffect, useRef, useMemo } = React;

// Minimal icon set (inline SVG, stroke-based, consistent style)
const Icon = {
  Arrow: ({ size = 16 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Phone: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/>
    </svg>
  ),
  Check: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Menu: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/>
    </svg>
  ),
  Close: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
    </svg>
  ),
  Sparkle: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 L13.5 9.5 L20 11 L13.5 12.5 L12 19 L10.5 12.5 L4 11 L10.5 9.5 Z"/>
    </svg>
  ),
  Leaf: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3c.5.12 1.02.2 1.53.2C19 19.9 22 8 22 8c-1 2-8 2.25-13 3.25S2 16.2 5 22"/>
    </svg>
  ),
  Building: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1"/>
      <line x1="8" y1="7" x2="10" y2="7"/><line x1="14" y1="7" x2="16" y2="7"/>
      <line x1="8" y1="11" x2="10" y2="11"/><line x1="14" y1="11" x2="16" y2="11"/>
      <line x1="8" y1="15" x2="10" y2="15"/><line x1="14" y1="15" x2="16" y2="15"/>
      <line x1="10" y1="21" x2="14" y2="21"/>
    </svg>
  ),
  Home: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 L12 3 L21 10.5 V20 a1 1 0 0 1-1 1 h-5 v-7 h-4 v7 H4 a1 1 0 0 1-1-1 Z"/>
    </svg>
  ),
  Window: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/>
      <path d="M7 8 L9 10" opacity="0.4"/>
    </svg>
  ),
  HardHat: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18 h18"/>
      <path d="M5 18 v-2 a7 7 0 0 1 14 0 v2"/>
      <path d="M10 10 V6 h4 v4"/>
    </svg>
  ),
  Factory: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20 V10 l5 3 V10 l5 3 V6 l7 4 V20 Z"/>
      <line x1="8" y1="16" x2="8" y2="18"/><line x1="13" y1="16" x2="13" y2="18"/><line x1="18" y1="16" x2="18" y2="18"/>
    </svg>
  ),
  Shield: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 L4 6 V12 c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10 V6 Z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  Stairs: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20 h5 v-4 h5 v-4 h5 v-4 h3"/>
    </svg>
  ),
  Broom: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="4" x2="10" y2="12"/>
      <path d="M10 12 L4 18 c-1 1 0 3 1 3 l7-1 7-7 Z"/>
    </svg>
  ),
  Spray: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="8" height="11" rx="1"/>
      <path d="M10 10 V6 h4 v4"/>
      <path d="M18 5 h2 M18 8 h3 M19 11 h2" opacity="0.6"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2h2V2h-3c-3 0-4.5 1.8-4.5 4.5V10H6v4h3.5v8z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h2v12H3zM9 9h2v1.8c.7-1.1 2-2 3.8-2 3 0 4.2 2 4.2 5V21h-2.5v-6.3c0-1.7-.7-2.7-2.2-2.7-1.4 0-2.3 1-2.3 2.7V21H9z"/>
    </svg>
  ),
  Star: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L14.5 8.5 L22 9.3 L16.5 14.2 L18 21.5 L12 17.8 L6 21.5 L7.5 14.2 L2 9.3 L9.5 8.5 Z"/>
    </svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>
    </svg>
  ),
  Badge: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6"/><polyline points="8.5 13 7 22 12 19 17 22 15.5 13"/>
    </svg>
  ),
  Heart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 6.6a5.5 5.5 0 0 0-9.2-2 5.5 5.5 0 0 0-9.2 6.4L12 21l9.6-10a5.5 5.5 0 0 0-0.8-4.4Z"/>
    </svg>
  ),
  Eco: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5-2 8-6 8-12 0-2-.5-4-1-5-4 0-7 1-10 4s-4 6-4 10c0 1 0 2 .5 3"/>
      <path d="M5 22c0-6 3-11 10-14"/>
    </svg>
  ),
};

// Hook: reveal on scroll via IntersectionObserver
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Bubbles decor
function Bubbles({ count = 14, tint, variant }) {
  const bubbles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const size = 12 + Math.random() * 80;
      arr.push({
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      });
    }
    return arr;
  }, [count]);
  return (
    <div className={`bubbles${variant ? ' ' + variant : ''}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <span key={i} className="bubble" style={{
          width: b.size, height: b.size,
          left: `${b.left}%`, top: `${b.top}%`,
          animationDelay: `${b.delay}s`,
          animationDuration: `${b.duration}s`,
          ...(tint ? { background: `radial-gradient(circle at 30% 30%, ${tint}, rgba(255,255,255,0.1))` } : {})
        }}/>
      ))}
    </div>
  );
}

// Placeholder image (subtly striped) — used where real photos would go
function Placeholder({ label, ratio = '4/3', tone = 'blue', style = {} }) {
  const tones = {
    blue: ['#d0dff0', '#a8c0de'],
    mint: ['#d0e8e0', '#a9d0c4'],
    warm: ['#e5dec8', '#c8bf9e'],
    ink: ['#3a4a60', '#1d2f47'],
  };
  const [c1, c2] = tones[tone] || tones.blue;
  return (
    <div style={{
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${c1} 0 14px, ${c2} 14px 28px)`,
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute',
        inset: 16,
        border: '1.5px dashed rgba(255,255,255,0.55)',
        borderRadius: 'calc(var(--radius-lg) - 4px)',
      }}/>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'rgba(255,255,255,0.85)',
        padding: '6px 10px',
        borderRadius: 6,
        color: '#3a4a60',
      }}>{label}</div>
    </div>
  );
}

// Count-up number
function CountUp({ to, duration = 1500, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let started = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

Object.assign(window, { Icon, useReveal, Bubbles, Placeholder, CountUp });
