import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";
import WalletConnect from "./WalletConnect";

const links = [
  ["Story", "#story"],
  ["The Cast", "#cast"],
  ["Episodes", "#episodes"],
  ["Campus", "#campus"],
  ["The Signal", "#signal"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#story");

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    links.forEach(([, href]) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Chastity Heights home">
        <span className="wordmark-monogram">CH</span>
        <span>CHASTITY <b>HEIGHTS</b><small>ACADEMY · OFFICIAL ARCHIVE</small></span>
      </a>
      <button className="mobile-menu icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} className={active === href ? "nav-link active" : "nav-link"} href={href} onClick={close}>{label}</a>
        ))}
        <a className="nav-archive" href="#campus" onClick={close}><Compass size={14} /> Explore archive</a>
        <WalletConnect />
      </nav>
    </header>
  );
}
