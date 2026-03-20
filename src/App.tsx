import "./index.css";

function DownloadButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="download-buttons">
      <div className="download-item">
        <button className={dark ? "btn btn-dark" : "btn"}>Download for Desktop</button>
        <span className={dark ? "coming-soon dark" : "coming-soon"}>Coming soon...</span>
      </div>
      <div className="download-item">
        <button className={dark ? "btn btn-dark btn-outline-dark" : "btn btn-outline"}>Download for Android</button>
        <span className={dark ? "coming-soon dark" : "coming-soon"}>Coming soon...</span>
      </div>
      <div className="download-item">
        <button className={dark ? "btn btn-dark btn-outline-dark" : "btn btn-outline"}>Download for iOS</button>
        <span className={dark ? "coming-soon dark" : "coming-soon"}>Coming soon...</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="page">

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="nav-logo">SPEC<span>CHECK</span></div>
        <div className="nav-badge">Beta</div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Precision at your fingertips</p>
          <h1 className="hero-title">
            The spec<br />
            checker<br />
            <em>built right.</em>
          </h1>
          <p className="hero-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
          <DownloadButtons />
        </div>

        <div className="hero-visual">
          <div className="mockup-desktop">
            <div className="mockup-bar">
              <span /><span /><span />
            </div>
            <div className="mockup-screen">
              <div className="mockup-sidebar">
                <div className="mockup-item active" />
                <div className="mockup-item" />
                <div className="mockup-item" />
                <div className="mockup-item" />
              </div>
              <div className="mockup-content">
                <div className="mockup-line wide" />
                <div className="mockup-line medium" />
                <div className="mockup-spacer" />
                <div className="mockup-check">✓ Spec validated</div>
                <div className="mockup-spacer" />
                <div className="mockup-line narrow" />
                <div className="mockup-line wide" />
                <div className="mockup-line medium" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-strip">
        <div className="stat">
          <span className="stat-num">10k+</span>
          <span className="stat-label">Specs checked</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">99.8%</span>
          <span className="stat-label">Accuracy rate</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">3</span>
          <span className="stat-label">Platforms</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">&lt;2s</span>
          <span className="stat-label">Avg. check time</span>
        </div>
      </div>

      {/* ── Features ── */}
      <section className="features">
        <div className="section-inner">
          <p className="section-label">— Why Spec Check</p>
          <h2 className="section-title dark">
            Built for precision.<br />Designed for speed.
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-num">01</span>
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Instant Verification</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="feature-card">
              <span className="feature-num">02</span>
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 10v10l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.</p>
            </div>
            <div className="feature-card">
              <span className="feature-num">03</span>
              <div className="feature-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 32L20 8l12 24H8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M20 22v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="20" cy="29" r="1.2" fill="currentColor" />
                </svg>
              </div>
              <h3>Smart Alerts</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how-it-works">
        <div className="section-inner">
          <p className="section-label light">— How It Works</p>
          <h2 className="section-title light">
            Three steps.<br />Zero guesswork.
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Upload your specs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="step-connector" />
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Run the check</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              </div>
            </div>
            <div className="step-connector" />
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Get your report</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Showcase ── */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-text">
            <p className="section-label">— In Action</p>
            <h2>Everything you need,<br />nothing you don't.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.</p>
            <ul className="showcase-list">
              <li>Detailed comparison reports</li>
              <li>Export to PDF or CSV</li>
              <li>Team collaboration tools</li>
              <li>Version history tracking</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="mockup-phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-header" />
                <div className="phone-row"><div className="phone-dot ok" /><div className="phone-bar wide" /></div>
                <div className="phone-row"><div className="phone-dot ok" /><div className="phone-bar medium" /></div>
                <div className="phone-row"><div className="phone-dot warn" /><div className="phone-bar narrow" /></div>
                <div className="phone-row"><div className="phone-dot ok" /><div className="phone-bar wide" /></div>
                <div className="phone-row"><div className="phone-dot ok" /><div className="phone-bar medium" /></div>
                <div className="phone-row"><div className="phone-dot ok" /><div className="phone-bar narrow" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="section-inner cta-inner">
          <h2>Ready to check your specs?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.</p>
          <DownloadButtons dark />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-logo">SPEC<span>CHECK</span></div>
        <p>© 2026 Spec Check. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
