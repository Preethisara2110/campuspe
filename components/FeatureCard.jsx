import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({ icon: Icon, title, description, status, points, button, onAction, variant = "" }) {
  return (
    <article className={`feature-card ${variant}`}>
      <div className="feature-top">
        <span className="feature-icon"><Icon size={23} strokeWidth={2.2}/></span>
        <span className={`status-pill ${status === "Available Now" ? "available" : ""}`}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{points.map((point) => <li key={point}><span className="check">✓</span>{point}</li>)}</ul>
      <button className="button button-primary card-cta" onClick={onAction}>{button}<ArrowUpRight size={14}/></button>
    </article>
  );
}
