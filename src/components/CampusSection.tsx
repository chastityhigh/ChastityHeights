import { useState } from "react";
import { ArrowUpRight, MapPin, ScanLine } from "lucide-react";
import { campusPlaces } from "../data/series";

export default function CampusSection() {
  const [place, setPlace] = useState(12);
  const [showMap, setShowMap] = useState(false);
  return (
    <section className="section campus-section" id="campus">
      <div className="section-kicker"><span>04</span> CAMPUS CARTOGRAPHY <span className="rule" /></div>
      <div className="section-heading">
        <div><p className="overline">OFFICIAL CAMPUS MAP / REV. 09</p><h2>Some doors are<br /><em>not meant to be found.</em></h2></div>
        <p className="heading-aside">The map is accurate.<br />The map is not complete.</p>
      </div>
      <div className="campus-layout">
        <div className="map-frame">
          <img src="/assets/campus-map-reference.png" alt="Illustrated aerial campus map of Chastity Heights Academy with numbered buildings and the Quadric Circle sigil" />
          <div className="map-frame-label"><ScanLine size={14} /> ARCHIVE CARTOGRAPHY / CH—013</div>
          <button className="map-expand" onClick={() => setShowMap(true)}><ArrowUpRight size={16} /> Inspect map</button>
        </div>
        <div className="campus-index">
          <div className="campus-index-head"><span>LOCATION INDEX</span><span>13 RECORDS</span></div>
          <div className="campus-list">
            {campusPlaces.map(([n, name, detail], i) => <button key={n} className={place === i ? "campus-place selected" : "campus-place"} onClick={() => setPlace(i)}>
              <span className="place-num">{n}</span><span className="place-copy"><b>{name}</b><small>{detail}</small></span><ArrowUpRight size={14} />
            </button>)}
          </div>
          <div className="selected-location"><MapPin size={14} /><span>SELECTED LOCATION: <b>{campusPlaces[place][1]}</b></span></div>
        </div>
      </div>
      <div className="sigil-feature">
        <div className="sigil-image"><img src="/assets/quadric-circle-sigil.png" alt="Antique gold Quadric Circle compass sigil on a black field" /></div>
        <div className="sigil-copy"><span className="overline">SYMBOL / Q—04</span><h3>The Quadric<br /><em>Circle.</em></h3><p>Four paths. One purpose. Or is it? The divided-circle symbol appears in the campus geometry, a photograph from the archives, and a notebook that should have stayed hidden.</p><div className="sigil-coordinates">N 04° / E 13° / BELOW ZERO</div></div>
      </div>
      {showMap && <div className="modal-backdrop map-modal-backdrop" role="presentation" onClick={() => setShowMap(false)}>
        <div className="map-modal" role="dialog" aria-modal="true" aria-label="Campus map full view" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowMap(false)} aria-label="Close map">×</button>
          <img src="/assets/campus-map-reference.png" alt="Full campus map reference" />
        </div>
      </div>}
    </section>
  );
}
