import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
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
            I&apos;m TR Productions — a music producer and engineer offering
            studio sessions, beats, and professional mixing &amp; mastering.
            Work with me in my studio in Trier or send your tracks from anywhere
            in the world.
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
                <div className="badge-pill">TR Productions</div>
                <div className="hero-tagline">
                  Production · Mix &amp; Master · Studio
                </div>
              </div>
            </div>

            <div className="hero-card-rows">
              <div className="hero-row">
                <span>Based in</span>
                <strong>Trier, Germany</strong>
              </div>
              <div className="hero-row">
                <span>Main genres</span>
                <strong>Hip-hop · Rap · RnB</strong>
              </div>
              <div className="hero-row">
                <span>Work with me</span>
                <strong>Online &amp; in-person</strong>
              </div>
            </div>

            <p className="hero-footnote">
              Studio sessions, custom beats and mix &amp; master — built around
              your sound and release goals.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Services</div>
            <h2 className="section-title">From rough idea to final master.</h2>
          </div>
          <p className="section-description">
            TR Productions focuses on hip-hop, rap and RnB, but I&apos;m open
            to other styles too. Start with a beat, a voice memo or finished
            vocals — we&apos;ll turn it into something ready to release.
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
              Browse original beats designed for modern hip-hop, rap and RnB.
              Listen to previews, download tagged demos and purchase licenses.
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
              Send your raw vocals and beat and get back a clean, loud and
              balanced mix ready for Spotify, YouTube and clubs.
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
              Record your vocals in a focused, professional environment with
              guidance on performance, takes and sound.
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
              Need something unique for your single, EP or album? I produce
              custom instrumentals tailored to your voice and style.
            </p>
            <div className="service-meta">
              <span>For serious projects</span>
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
