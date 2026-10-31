import { ArrowDown, ArrowUpRight, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <img className="hero-sigil" src="/assets/quadric-circle-sigil.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="eyebrow"><span className="status-dot" /> THE OFFICIAL SERIES ARCHIVE <span className="eyebrow-line" /></div>
        <h1>Everyone has a<br /><em>reputation.</em></h1>
        <h2>Everyone has a secret.<br />Some secrets refuse to stay buried.</h2>
        <p className="hero-copy">An elite academy. An anonymous account. A history that remembers everything.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#story">Enter the Heights <ArrowUpRight size={16} /></a>
          <a className="button button-ghost" href="#episodes"><Eye size={15} /> Discover the mystery</a>
        </div>
        <div className="hero-meta"><span>YA 16+</span><i /> DARK ACADEMIA <i /> SUPERNATURAL MYSTERY <i /> SEASON ONE: THE LAST BELL</div>
      </div>
      <a className="scroll-cue" href="#story"><span>SCROLL TO INVESTIGATE</span><ArrowDown size={14} /></a>
      <div className="hero-side-note">TRADITION / EXCELLENCE / A HIGHER PURPOSE</div>
    </section>
  );
}
