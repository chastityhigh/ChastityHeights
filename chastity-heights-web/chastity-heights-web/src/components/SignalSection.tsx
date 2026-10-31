import { useState } from "react";
import { ArrowUpRight, Lock, Radio, ShieldAlert } from "lucide-react";

const posts = [
  { id: "CH-001", date: "00:01:13", text: "EVERY SCHOOL HAS A HISTORY.", note: "Attached: recovered archive photograph", likes: "4.2K", comments: "312" },
  { id: "CH-002", date: "00:02:09", text: "Some names were removed. The memories were not.", note: "Source: unverified / legacy index", likes: "8.8K", comments: "604" },
  { id: "CH-003", date: "00:03:44", text: "The library has a lower level. You already knew that.", note: "Attached: location data corrupted", likes: "12K", comments: "1.1K" }
];

export default function SignalSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const post = posts[selected];
  return (
    <section className="section signal-section" id="signal">
      <div className="signal-background" aria-hidden="true"><div className="signal-rings" /></div>
      <div className="section-kicker"><span>05</span> INCOMING TRANSMISSION <span className="rule" /></div>
      <div className="signal-layout">
        <div className="signal-intro">
          <p className="overline"><span className="status-dot" /> SIGNAL DETECTED / SOURCE UNKNOWN</p>
          <h2>@THEHEIGHTS<br /><em>REMEMBERS</em></h2>
          <p>Someone is publishing memories no living person should possess. The account isn't just collecting gossip. It remembers things the school erased.</p>
          <button className="button button-gold" onClick={() => setUnlocked(!unlocked)}>{unlocked ? "Seal the transmission" : "Access recovered posts"} <ArrowUpRight size={15} /></button>
          <div className="signal-warning"><ShieldAlert size={15} /><span>UNVERIFIED SOURCE. DO NOT SHARE PERSONAL INFORMATION.</span></div>
        </div>
        <div className="terminal">
          <div className="terminal-top"><span><Radio size={13} /> ARCHIVE TERMINAL</span><span className="terminal-live"><i /> {unlocked ? "CONNECTED" : "ENCRYPTED"}</span></div>
          {!unlocked ? <div className="terminal-lock"><div className="lock-icon"><Lock size={22} /></div><h3>Access restricted.</h3><p>The archive requires an acknowledgement of uncertainty.</p><button className="terminal-unlock" onClick={() => setUnlocked(true)}>I understand the risk <ArrowUpRight size={14} /></button><span className="terminal-hash">HASH: 0xCH—13—MNEMONIC</span></div> :
            <div className="terminal-content">
              <div className="post-tabs">{posts.map((p, i) => <button key={p.id} className={selected === i ? "post-tab active" : "post-tab"} onClick={() => setSelected(i)}>{p.id}</button>)}</div>
              <span className="post-timestamp">RECOVERED TRANSMISSION / {post.date}</span>
              <h3>“{post.text}”</h3><p className="post-note">{post.note}</p>
              <div className="post-stats"><span>♡ {post.likes}</span><span>◉ {post.comments}</span><span>STATUS: UNVERIFIED</span></div>
              <form className="signal-form" onSubmit={e => { e.preventDefault(); if (input.trim()) { setSubmitted(true); setInput(""); } }}>
                <label htmlFor="signal-note">LEAVE A NOTE TO THE ARCHIVE</label>
                <div><input id="signal-note" value={input} onChange={e => setInput(e.target.value)} maxLength={120} placeholder="What do you think it remembers?" /><button type="submit" aria-label="Submit note"><ArrowUpRight size={17} /></button></div>
                {submitted && <small className="form-confirm">NOTE SAVED IN THIS DEMO SESSION. NOTHING WAS TRANSMITTED.</small>}
              </form>
            </div>}
          <div className="terminal-bottom"><span>CH—ARCHIVE / BUILD 01.0</span><span>ENCRYPTION: THEORETICAL</span></div>
        </div>
      </div>
    </section>
  );
}
