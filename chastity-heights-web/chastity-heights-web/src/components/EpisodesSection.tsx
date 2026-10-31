import { useState } from "react";
import { ArrowLeft, ArrowRight, Play, Radio } from "lucide-react";
import { episodes } from "../data/series";

export default function EpisodesSection() {
  const [index, setIndex] = useState(0);
  const episode = episodes[index];
  const change = (n: number) => setIndex((n + episodes.length) % episodes.length);
  return (
    <section className="section episodes-section" id="episodes">
      <div className="section-kicker"><span>03</span> SEASON ONE / THE LAST BELL <span className="rule" /></div>
      <div className="section-heading">
        <div><p className="overline">TEN EPISODES. ONE ORIGINAL AGREEMENT.</p><h2>The record<br /><em>is incomplete.</em></h2></div>
        <p className="heading-aside">Choose an episode to unlock its<br />current file and leading clue.</p>
      </div>
      <div className="episode-browser">
        <div className="episode-list" role="tablist" aria-label="Season one episodes">
          {episodes.map((ep, i) => <button key={ep.number} role="tab" aria-selected={i === index} className={i === index ? "episode-option active" : "episode-option"} onClick={() => setIndex(i)}>
            <span>{ep.number}</span><span>{ep.title}</span><span className="episode-option-arrow">↗</span>
          </button>)}
        </div>
        <article className="episode-detail" role="tabpanel">
          <div className="episode-art">
            <img src="/assets/orientation-storyboard.png" alt="Black-and-white storyboard panels from Chastity Heights: Orientation" />
            <div className="episode-art-overlay" />
            <span className="episode-label"><Radio size={12} /> FILE {episode.number} / {episode.status}</span>
            <span className="episode-art-number">{episode.number}</span>
          </div>
          <div className="episode-copy">
            <div className="overline">EPISODE {episode.number} <span className="gold-dot">●</span> SEASON ONE</div>
            <h3>{episode.title}</h3><p>{episode.summary}</p>
            <div className="clue-box"><span>LEADING CLUE</span><b>{episode.clue}</b></div>
            <div className="episode-controls">
              <span>{String(index + 1).padStart(2, "0")} <i>/</i> {String(episodes.length).padStart(2, "0")}</span>
              <div><button className="circle-control" onClick={() => change(index - 1)} aria-label="Previous episode"><ArrowLeft size={16} /></button><button className="circle-control" onClick={() => change(index + 1)} aria-label="Next episode"><ArrowRight size={16} /></button></div>
            </div>
          </div>
        </article>
      </div>
      <p className="section-footnote"><Play size={11} /> EPISODE DESCRIPTIONS ARE STORY DEVELOPMENT MATERIAL, NOT A STREAMING PLAYER.</p>
    </section>
  );
}
