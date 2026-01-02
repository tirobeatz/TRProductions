import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-dot" />
            <span>Music production studio · Trier, Germany</span>
          </div>

          <h1 className="hero-title">
            Industry-ready sound for{" "}
            <span>hip-hop, rap &amp; RnB</span> artists.
          </h1>

          <p className="hero-subtitle">
            I’m TR Productions — offering studio sessions, beat production,
            and professional mixing &amp; mastering so your songs hit as hard
            as they sound in your head. Work with me in my studio in Trier or
            remotely from anywhere in the world.
          </p>

          <div className="hero-cta-row">
            <Link href="/mix-master" className="btn-primary">
              Book Mix &amp; Master
            </Link>
            <Link href="/beats" className="btn-secondary">
              Browse Beats
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-header">
              <div>
                <div className="badge-pill">TR Productions · Studio</div>
              </div>
              <div className="hero-wave">
                <div className="hero-wave-bar" />
              </div>
            </div>

            <div className="hero-card-rows">
              <div className="hero-row">
                <span>Services</span>
                <strong>Beats · Mix/Master · Studio</strong>
              </div>
              <div className="hero-row">
                <span>Specialty</span>
                <strong>Hip-hop · Rap · RnB</strong>
              </div>
              <div className="hero-row">
                <span>Work with me</span>
                <strong>Online &amp; in-person (Trier)</strong>
              </div>
            </div>

            <p className="hero-footnote">
              This is your hub for custom beats, professional mixes and studio
              sessions. We’ll turn ideas into release-ready songs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Services</div>
            <h2 className="section-title">From idea to final master.</h2>
          </div>
          <p className="section-description">
            TR Productions is built around four pillars: beat production,
            mixing &amp; mastering, recording sessions and custom production.
            Start where you are — I’ll meet you there.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Beat Store
            </div>
            <h3>Beats &amp; Instrumentals</h3>
            <p>
              Browse original beats tailored for hip-hop, rap &amp; RnB. Listen
              to previews, download tagged demos and purchase licenses online.
            </p>
            <div className="service-meta">
              <span>MP3 · WAV · Stems · Exclusive</span>
              <Link href="/beats" className="service-link">
                View beats →
              </Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Online service
            </div>
            <h3>Mixing &amp; Mastering</h3>
            <p>
              Send your raw vocals and beat, and receive a clean, balanced and
              powerful mix &amp; master — ready for Spotify, YouTube and clubs.
            </p>
            <div className="service-meta">
              <span>Remote &amp; studio sessions</span>
              <Link href="/mix-master" className="service-link">
                Book mix/master →
              </Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Trier studio
            </div>
            <h3>Studio Sessions</h3>
            <p>
              Record your vocals in a professional, focused environment in
              Trier with guidance on performance, takes and sound.
            </p>
            <div className="service-meta">
              <span>Hourly · Half-day · Full-day</span>
              <Link href="/studio" className="service-link">
                Book a session →
              </Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Custom production
            </div>
            <h3>Custom Beats</h3>
            <p>
              Need something unique? I produce custom instrumentals tailored to
              your voice, style and release plan.
            </p>
            <div className="service-meta">
              <span>For singles, EPs &amp; albums</span>
              <Link href="/custom-beats" className="service-link">
                Request custom beat →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
