 "use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  ["Colleges", "#college"],
  ["Employers", "#hiring"],
  ["Jobs", "#jobs"],
  ["Blogs", "#blogs"],
];

export default function Navbar({ onSignUp }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="CampusPe home">
        <span className="brand-mark">✦</span><span>CampusPe</span>
        <small>Connecting Students, Institutions &amp; Companies</small>
      </a>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="mobile-sign" onClick={() => { setOpen(false); onSignUp("Sign In"); }}>Sign In</button>
        <button className="mobile-sign primary" onClick={() => { setOpen(false); onSignUp("Sign Up"); }}>Sign Up</button>
      </nav>
      <div className="nav-actions">
        <button className="signin" onClick={() => onSignUp("Sign In")}>Sign In</button>
        <button className="button button-primary nav-signup" onClick={() => onSignUp("Sign Up")}>Sign Up</button>
      </div>
      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
    </header>
  );
}
