import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-dot" />
            <span>Music production studio · Trier, Germany</span>
          </div>

          <h1 className="hero-title">
            Industry-ready sound for{" "}
            <span>hip-hop, rap &amp; RnB</span>.
          </h1>

          <p className="hero-subtitle">
            I&apos;m TR Productions — producer and engineer. I offer studio
            sessions, beats, and professional mixing &amp; mastering so your
            tracks hit hard on every system.
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
              your voice and release goals.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED BEATS (preview section – we’ll wire real audio later) */}
      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Featured beats</div>
            <h2 className="section-title">A quick taste of my sound.</h2>
          </div>
          <p className="section-description">
            These are example slots for your best beats. Later we&apos;ll plug
            in a real audio player and license options.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Trap · 140 BPM
            </div>
            <h3>Midnight Drive</h3>
            <p>
              Dark, bouncy trap with space for melodic flows and hooky choruses.
            </p>
            <div className="service-meta">
              <span>Modern trap · Club ready</span>
              <Link href="/beats" className="service-link">
                Preview in beat store →
              </Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              RnB · 90 BPM
            </div>
            <h3>City Lights</h3>
            <p>Smooth RnB vibe with warm chords and space for vocals.</p>
            <div className="service-meta">
              <span>Melodic · Late-night</span>
              <Link href="/beats" className="service-link">
                Preview in beat store →
              </Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-chip">
              <span className="service-chip-dot" />
              Rap · 95 BPM
            </div>
            <h3>Concrete Stories</h3>
            <p>Hard-hitting drums and soulful chops for storytelling verses.</p>
            <div className="service-meta">
              <span>Boom bap / modern mix</span>
              <Link href="/beats" className="service-link">
                Preview in beat store →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* RECENT WORK / ARTIST PREVIEWS (text placeholders for now) */}
      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Recent work</div>
            <h2 className="section-title">Artists I work with.</h2>
          </div>
          <p className="section-description">
            This section will later showcase real releases, streams and cover
            art. For now, it gives visitors a quick idea of the type of artists
            you support.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <h3>Artist A</h3>
            <p>
              Local hip-hop artist from Trier. Full production and mix for their
              latest single.
            </p>
            <div className="service-meta">
              <span>Single · Hip-hop</span>
              <span>Mix &amp; master</span>
            </div>
          </article>

          <article className="service-card">
            <h3>Artist B</h3>
            <p>RnB vocalist. Custom beat + vocal recording session.</p>
            <div className="service-meta">
              <span>EP track · RnB</span>
              <span>Beat + recording</span>
            </div>
          </article>

          <article className="service-card">
            <h3>Artist C</h3>
            <p>Rap artist. Remote mix &amp; master for home-recorded vocals.</p>
            <div className="service-meta">
              <span>Single · Rap</span>
              <span>Mix &amp; master</span>
            </div>
          </article>

          <article className="service-card">
            <h3>You?</h3>
            <p>
              Ready for your next track to sound like this? Start with a mix,
              beat or studio session.
            </p>
            <div className="service-meta">
              <span>Let&apos;s work</span>
              <Link href="/contact" className="service-link">
                Get in touch →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Services</div>
            <h2 className="section-title">From idea to final master.</h2>
          </div>
          <p className="section-description">
            Start wherever you&apos;re at — beat, demo or finished vocals. I
            help you get to a release-ready track.
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
              Original beats for hip-hop, rap and RnB. Listen to previews and
              buy the license that fits your release.
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
              Send your session or stems and get back a clean, loud and
              balanced mix tailored to your sound.
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
              Come to my studio in Trier to record vocals with guidance on tone,
              delivery and takes.
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
              Fully custom instrumentals built around your voice, style and
              release strategy.
            </p>
            <div className="service-meta">
              <span>Singles · EPs · Albums</span>
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
