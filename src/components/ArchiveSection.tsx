import { useState } from "react";
import { ArrowUpRight, LockKeyhole, RadioTower, BookOpen, Users } from "lucide-react";

const tabs = [
  { id: "heights", label: "01 / THE HEIGHTS", title: "A perfect reputation.", body: "Legacy families, limited scholarships, immaculate dormitories, and a student council with surprising political power. At Chastity Heights, wealth determines who gets a second chance—and who quietly disappears from the prospectus.", icon: Users },
  { id: "city", label: "02 / THE CITY BELOW", title: "Life beyond the gates.", body: "Restaurant shifts, crowded apartments, family businesses, late trains, and obligations that never make it onto anyone's feed. The city keeps the score the academy would rather forget.", icon: RadioTower },
  { id: "undercroft", label: "03 / THE UNDERCROFT", title: "The archive beneath the archive.", body: "Sealed spell books. Preserved creatures. Sentient mechanisms. Techno-arcane artifacts. Beneath the historic library, something is preserving more than history—and it may be listening.", icon: LockKeyhole }
];

export default function ArchiveSection() {
  const [selected, setSelected] = useState("heights");
  const current = tabs.find(t => t.id === selected)!;
  const Icon = current.icon;
  return (
    <section className="section section-story" id="story">
      <div className="section-kicker"><span>01</span> THE WORLD OF CHASTITY HEIGHTS <span className="rule" /></div>
      <div className="section-heading">
        <div><p className="overline">THE SCHOOL IS DIVIDED INTO WORLDS</p><h2>Three worlds.<br /><em>One buried truth.</em></h2></div>
        <p className="heading-aside">The academy calls it a higher purpose.<br />Students have another name for it.</p>
      </div>
      <div className="world-layout">
        <div className="world-tabs" role="tablist" aria-label="Explore the three worlds">
          {tabs.map(tab => (
            <button key={tab.id} role="tab" aria-selected={selected === tab.id} className={selected === tab.id ? "world-tab selected" : "world-tab"} onClick={() => setSelected(tab.id)}>
              <span>{tab.label}</span><ArrowUpRight size={16} />
            </button>
          ))}
          <div className="tab-footnote"><BookOpen size={15} /> ACCESS CLASSIFICATION: INTERNAL</div>
        </div>
        <div className={`world-panel world-${selected}`} role="tabpanel">
          <div className="world-panel-top"><span>FIELD NOTES / {current.label.split(" / ")[0]}</span><Icon size={19} /></div>
          <h3>{current.title}</h3><p>{current.body}</p>
          {selected === "undercroft" && <div className="restricted-stamp">RESTRICTED<br />ACCESS</div>}
          <div className="world-panel-bottom"><span>CH / ARCHIVE INDEX</span><span>◈ 04—13—∞</span></div>
        </div>
      </div>
      <div className="thesis-strip"><span className="thesis-mark">“</span><p>The central question is not simply who is exposing everyone's secrets.<br /><em>It's what happens when the people controlling your reputation also control your future?</em></p></div>
    </section>
  );
}
