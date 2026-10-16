 "use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function Modal({ mode, onClose }) {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!mode) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [mode, onClose]);

  if (!mode) return null;
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={19}/></button>
        {submitted ? <div className="success-state"><CheckCircle2 size={42}/><h2>You're on the list!</h2><p>Thanks for your interest in CampusPe. This demo has recorded your selection locally.</p><button className="button button-primary" onClick={onClose}>Done</button></div> :
          <><span className="eyebrow">WELCOME TO CAMPUSPE</span><h2 id="modal-title">{mode === "Sign In" ? "Welcome back" : mode === "Sign Up" ? "Find your next opportunity" : mode}</h2><p className="modal-subtitle">Choose your role and enter your email to continue.</p>
            <form onSubmit={submit}>
              <label htmlFor="role">I am a</label><select id="role" value={role} onChange={e => setRole(e.target.value)}><option>Student</option><option>College representative</option><option>Employer / Recruiter</option></select>
              <label htmlFor="email">Email address</label><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}/>
              <button className="button button-primary modal-submit" type="submit">{mode === "Sign In" ? "Continue" : "Get started"} <span>→</span></button>
              <small className="privacy-note">By continuing, you agree to our terms and privacy policy.</small>
            </form>
          </>}
      </section>
    </div>
  );
}
