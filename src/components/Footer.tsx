import { ArrowUpRight, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#top" className="footer-brand"><span className="footer-monogram">CH</span><span>CHASTITY HEIGHTS<small>EVERYONE HAS A SECRET.</small></span></a>
        <p>Tradition. Excellence.<br /><em>A higher purpose.</em></p>
        <a className="footer-top" href="#top">RETURN TO THE SURFACE <ChevronUp size={14} /></a>
      </div>
      <div className="footer-bottom"><span>© 2026 CHASTITY HEIGHTS / CONCEPT EXPERIENCE</span><span>FICTIONAL ARCHIVE · NO LIVE STUDENT DATA</span><a href="#signal">REPORT A SIGNAL <ArrowUpRight size={12} /></a></div>
    </footer>
  );
}
