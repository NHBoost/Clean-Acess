// Galerie — carousel défilant en continu (avant/après)

function Gallery() {
  const images = [
    { src: 'assets/gallery/01.png', label: 'Frigo' },
    { src: 'assets/gallery/02.png', label: 'Appartement' },
    { src: 'assets/gallery/03.png', label: 'Cuisine' },
    { src: 'assets/gallery/04.png', label: 'Sol' },
    { src: 'assets/gallery/05.png', label: 'Textile' },
    { src: 'assets/gallery/06.png', label: 'Véhicule' },
  ];

  // Duplicate the list so the translate loop reads seamlessly
  const loop = [...images, ...images];

  const [paused, setPaused] = useState(false);

  return (
    <section id="gallery" className="section-pad" style={{ background: 'var(--paper-2)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 40, marginBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>— Galerie</div>
            <h2 className="h2-uniform" style={{ lineHeight: 1.05, letterSpacing: '-0.02em', color: '#1a6599' }}>
              Avant / après,<br/>
              <span className="serif" style={{ fontStyle: 'italic', color: '#2d8f7f', fontWeight: 400 }}>
                la différence parle.
              </span>
            </h2>
          </div>
          <p style={{ fontSize: 16, color: 'var(--ink-mute)', maxWidth: 360, lineHeight: 1.6 }}>
            Quelques exemples de nos interventions récentes. Chaque mission se termine par un reportage photo transmis au client.
          </p>
        </div>
      </div>

      {/* Edge-to-edge marquee */}
      <div className="reveal gallery-marquee"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)' }}>
        <div className="gallery-track" style={{
          display: 'flex',
          gap: 'var(--gap)',
          width: 'max-content',
          animation: 'galleryScroll 48s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}>
          {loop.map((img, i) => (
            <GalleryCard key={i} img={img} />
          ))}
        </div>
      </div>

      <style>{`
        .gallery-marquee {
          --gap: 20px;
          --visible: 5;
          --edge: max(24px, calc((100vw - var(--container-max, 1200px)) / 2 + 24px));
        }
        .gallery-track > .gallery-card {
          flex-shrink: 0;
          width: calc((100vw - var(--edge) * 2 - var(--gap) * (var(--visible) - 1)) / var(--visible));
          max-width: 340px;
        }
        @media (max-width: 1024px) {
          .gallery-marquee { --visible: 3; --gap: 16px; }
        }
        @media (max-width: 640px) {
          .gallery-marquee { --visible: 2; --gap: 14px; --edge: 16px; }
        }

        @keyframes galleryScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-50% - var(--gap) / 2)); }
        }

        .gallery-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: linear-gradient(135deg, #e3eef6, #cfe2ee);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
          cursor: default;
        }
        .gallery-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -20px rgba(11, 25, 41, 0.3);
        }
        .gallery-card:hover img { transform: scale(1.06); }

        .gallery-card .card-label {
          position: absolute; left: 14px; bottom: 14px;
          padding: 6px 12px; border-radius: 999px;
          background: rgba(255,255,255,0.92);
          color: var(--ink);
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .gallery-card .card-badge {
          position: absolute; top: 14px; right: 14px;
          padding: 5px 10px; border-radius: 999px;
          background: var(--accent); color: white;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
      `}</style>
    </section>
  );
}

function GalleryCard({ img }) {
  return (
    <div className="gallery-card">
      <img src={img.src} alt={`Avant / après — ${img.label}`} loading="lazy"/>
      <span className="card-badge">Avant / après</span>
      <span className="card-label">{img.label}</span>
    </div>
  );
}

Object.assign(window, { Gallery });
