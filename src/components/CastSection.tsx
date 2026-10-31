import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { characters, type Character } from "../data/series";

export default function CastSection() {
  const [active, setActive] = useState<Character | null>(null);
  return (
    <section className="section cast-section" id="cast">
      <div className="section-kicker"><span>02</span> PEOPLE OF INTEREST <span className="rule" /></div>
      <div className="section-heading">
        <div><p className="overline">TWELVE STUDENTS. FACULTY. TOO MANY SECRETS.</p><h2>Meet the <em>suspects.</em></h2></div>
        <p className="heading-aside">Everyone has a public face.<br />Select a file to inspect the private one.</p>
      </div>
      <div className="cast-grid">
        {characters.map((c, i) => (
          <button className="cast-card" key={c.name} onClick={() => setActive(c)}>
            <span className="cast-number">CH—{String(i + 1).padStart(2, "0")}</span>
            <span className="cast-avatar">{c.name.split(" ").map(n => n[0]).join("")}</span>
            <span className="cast-card-bottom"><span><b>{c.name}</b><small>{c.role}</small></span><ArrowUpRight size={17} /></span>
            <span className="cast-hoverline" />
          </button>
        ))}
      </div>
      <p className="section-footnote">PROFILES ARE PROVISIONAL. EVERY FILE MAY CONTAIN OMISSIONS.</p>
      {active && <div className="modal-backdrop" role="presentation" onClick={() => setActive(null)}>
        <div className="profile-modal" role="dialog" aria-modal="true" aria-label={`${active.name} profile`} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActive(null)} aria-label="Close profile"><X size={19} /></button>
          <span className="overline">PERSONNEL FILE / {active.accent.toUpperCase()}</span>
          <h3>{active.name}</h3><p className="profile-role">{active.role}</p>
          <div className="modal-divider" />
          <p>{active.description}</p>
          <div className="secret-box"><span>FLAGGED INFORMATION</span><p>{active.secret}</p></div>
          <span className="modal-classification">CH / INTERNAL ARCHIVE — HANDLE WITH CARE</span>
        </div>
      </div>}
    </section>
  );
}
