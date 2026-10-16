 "use client";

import { useCallback, useState } from "react";
import { Bot, Building2, GraduationCap, BriefcaseBusiness, MessageCircle, Zap, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Users, Upload, FileText, Search, Bell, MapPin, Clock3, BadgeCheck, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import Modal from "../components/Modal";

const opportunities = [
  { icon: "◉", company: "IBM Bangalore", role: "Product / Technology Intern", type: "Top match", location: "Bengaluru · Hybrid", color: "red" },
  { icon: "🌐", company: "Product Intern", role: "Product & Research", type: "New match", location: "Remote · Internship", color: "green" },
  { icon: "▣", company: "Marketing Ops", role: "Marketing & Analytics", type: "Featured", location: "Chennai · Full-time", color: "blue" },
];

export default function Home() {
  const [modal, setModal] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [toast, setToast] = useState("");
  const act = useCallback((message) => {
    if (["Sign Up", "Sign In", "Join Waitlist", "List Your College", "Post a job", "Explore opportunities", "Upload your resume", "Get Started"].includes(message)) setModal(message);
    else { setToast(`${message} — this demo interaction is ready to connect to a backend.`); window.setTimeout(() => setToast(""), 3200); }
  }, []);

  return (
    <>
      <Navbar onSignUp={setModal}/>
      <main>
        <section className="hero" id="home">
          <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
          <aside className="floating-card whatsapp-card"><div className="floating-title whatsapp"><MessageCircle size={20} fill="currentColor"/> WhatsApp Alert</div><b>Get notified on WhatsApp</b><p>You'll get all important updates on your WhatsApp.</p></aside>
          <aside className="floating-card resume-float"><div className="floating-title violet"><Zap size={20} fill="currentColor"/> Resume Builder</div><b>Build Your Resume</b><p>Our resume builder gives you dynamic options to build better &amp; faster resume that get you hired.</p></aside>
          <div className="hero-center">
            <span className="ai-pill"><Bot size={22} fill="currentColor"/> AI-Powered Campus Assistant</span>
            <h1>Connect <span>10X Faster.</span></h1>
            <p className="hero-subtitle">One platform connecting students, colleges &amp; employers — faster.</p>
            <div className="looking"><Sparkles size={20}/><span>What are you looking for?</span><Sparkles size={20}/></div>
          </div>
          <div className="social-proof proof-left"><div className="avatar-stack"><span>AK</span><span>PR</span><span>SN</span></div><div><b>🔥 142 students matched today</b><small>Just now • IIT, BITS, VIT</small></div></div>
          <div className="social-proof proof-right"><span className="proof-icon"><BriefcaseBusiness size={17}/></span><div><b>Radiant Info <span className="normal">shortlisted 8 interns</span></b><small>● Verified recruiter · 2 days ago</small></div></div>
          <div className="feature-grid">
            <FeatureCard icon={Building2} title="College" description="Explore colleges, courses, fees, placements & more." status="Coming Soon" points={["Search by course, location, fees","Connect directly with colleges","Explore student placements"]} button="Join Waitlist" onAction={() => act("Join Waitlist")}/>
            <FeatureCard icon={GraduationCap} title="I'm Looking for a Job" description="Upload your resume. We'll find jobs that fit you." status="Available Now" points={["Jobs from 1000+ sources","AI-powered matching","WhatsApp & email alerts"]} button="Explore Jobs" onAction={() => act("Explore opportunities")} variant="featured"/>
            <FeatureCard icon={BriefcaseBusiness} title="I'm Hiring" description="Connect with colleges and find candidates — from students to graduates." status="Coming Soon" points={["Connect directly with colleges","Find the right candidates","Simplify your hiring"]} button="Join Waitlist" onAction={() => act("Join Waitlist")}/>
          </div>
        </section>

        <section className="stats-strip" aria-label="CampusPe statistics">
          <div><span className="stat-icon lilac"><Users size={18}/></span><strong>800+</strong><small>Students</small></div>
          <div><span className="stat-icon blue"><Building2 size={18}/></span><strong>130+</strong><small>Colleges</small></div>
          <div><span className="stat-icon mint"><BriefcaseBusiness size={18}/></span><strong>100+</strong><small>Jobs &amp; internships</small></div>
          <div><span className="stat-icon peach"><ShieldCheck size={18}/></span><strong>100%</strong><small>Safe &amp; trusted</small></div>
        </section>

        <section className="partners-section">
          <p>Trusted by partners across India</p>
          <div className="partner-logos"><span className="ginserv">◉ GINSERV<small>Nurturing Ventures</small></span><span className="startup">◢ STARTUP<br/>KARNATAKA</span><span className="seal">✺</span><span className="tales">♧ TALESHOFT</span><span className="reliance">RELIANCE 🔥</span></div>
        </section>

        <section className="opportunity-section section-wrap" id="jobs">
          <div className="section-copy"><span className="eyebrow">✦ FOR OPPORTUNITY DISCOVERY</span><h2>Stop searching.<br/><em>Start getting matched.</em></h2><p>Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
            <div className="mini-steps"><article><span><CheckCircle2 size={16}/></span><div><b>Set your preferences</b><small>Choose your role, location and skills</small></div><i>Smart Profile</i></article><article><span><Search size={16}/></span><div><b>Discover relevant opportunities</b><small>Explore curated roles that fit your profile</small></div><i>AI Verified</i></article><article><span><Bell size={16}/></span><div><b>Get notified when something fits</b><small>Receive updates on new matching roles</small></div><i>Instant Alerts</i></article></div>
            <button className="button button-primary" onClick={() => act("Explore opportunities")}>Explore opportunities <ArrowRight size={15}/></button>
          </div>
          <div className="opportunity-dashboard"><div className="dashboard-header"><div className="dash-logo"><Sparkles size={16}/></div><div><b>CampusPe Opportunity Feed</b><small>Curated opportunities matched to you</small></div><span className="new-matches">● 8 new matches today</span></div><div className="dashboard-tabs">{["All","Colleges","Jobs","Internships","Finance","Part-time"].map(tab=><button key={tab} className={activeTab===tab?"selected":""} onClick={()=>setActiveTab(tab)}>{tab}</button>)}</div>
            {opportunities.filter((_,i)=>activeTab==="All" || (activeTab==="Jobs"&&i!==1) || (activeTab==="Internships"&&i===1) || ["Colleges","Finance","Part-time"].includes(activeTab)).map((job,i)=><article className="opportunity-row" key={job.company}><span className={`company-icon ${job.color}`}>{job.icon}</span><div className="job-info"><b>{job.company}</b><small>{job.role}</small><small><MapPin size={11}/> {job.location} <span>·</span> <Clock3 size={11}/> Recently posted</small></div><div className="job-action"><span>{job.type}</span><button onClick={()=>act(job.company)}>View details</button></div></article>)}
            <button className="text-link" onClick={()=>act("View all matched opportunities")}>View all matched opportunities <ArrowRight size={13}/></button>
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="resume-copy"><span className="eyebrow">✦ THE AI ENGINE</span><h2>Upload your resume.<br/><em>Find jobs that fit.</em></h2><p>Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p><div className="resume-tags"><span>✦ AI-powered</span><span>🔒 Secure &amp; private</span></div></div>
          <button className="upload-panel" onClick={() => act("Upload your resume")}><span className="upload-icon"><Upload size={22}/></span><b>Upload your resume</b><small>PDF, DOC, DOCX · Up to 10MB. We'll use it to find jobs that fit your skills and experience.</small><span className="button button-primary">Select resume <ArrowRight size={14}/></span><small>or drag and drop your file here</small><span className="file-types">PDF　 DOC　 DOCX</span></button>
          <div className="resume-benefits"><span><CheckCircle2 size={14}/> Resume analyzed</span><span><CheckCircle2 size={14}/> Skills matched</span><span><CheckCircle2 size={14}/> Experience matched</span><span><CheckCircle2 size={14}/> 1,000+ sources</span></div>
        </section>

        <section className="audience-section section-wrap" id="college">
          <div className="section-copy"><span className="eyebrow">✦ FOR COLLEGES</span><h2>Get Discovered<br/>by <em>Students and Recruiters.</em></h2><p>Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p><button className="button button-primary" onClick={() => act("List Your College")}>List Your College <ArrowRight size={15}/></button></div>
          <div className="benefit-list">{[["▣","Build your college profile","Showcase your courses, fees, campus, departments and achievements so students can discover you.","HAC + AI Ready"],["◎","Students discover and connect","Students searching for colleges can discover your profile, explore courses and fees, and connect directly with your admission team.","Verified Profile"],["▤","Recruiters discover your College","Companies looking for fresh talent can discover your college, explore your talent and connect with your placement team.","100+ Opportunities"],["↗","Track placements in real time","Track students, interviews, offers and placements from one centralized dashboard.","Live Analytics"]].map(x=><article className="benefit-card" key={x[1]}><span className="benefit-symbol">{x[0]}</span><div><b>{x[1]}</b><p>{x[2]}</p></div><small>{x[3]} <ChevronRight size={12}/></small></article>)}</div>
        </section>

        <section className="employer-section section-wrap" id="hiring">
          <div className="section-copy"><span className="eyebrow">✦ FOR EMPLOYERS</span><h2>Stop running campus drives.<br/><em>Start hiring the right people.</em></h2><p>Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover talent and connect with colleges and beyond.</p><button className="button button-primary" onClick={() => act("Post a job")}>Post a job <ArrowRight size={15}/></button></div>
          <div className="employer-steps">{[["01","Post a role in minutes","Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.","Time Efficient"],["02","Receive a matched shortlist","Get candidates matched to your role, skills, experience and hiring requirements.","Smart Matching"],["03","Connect with candidates directly","Manage shortlisted candidates and move qualified people through your pipeline — all in one place.","Direct Connect"],["04","Reduce your time-to-hire","Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.","Faster Hiring"]].map(x=><article className="step-card" key={x[0]}><span>{x[0]}</span><div><b>{x[1]}</b><p>{x[2]}</p></div><small>{x[3]} <ChevronRight size={12}/></small></article>)}</div>
        </section>

        <section className="bottom-cta" id="blogs"><div className="cta-spark"><Sparkles size={23}/></div><h2>Your next opportunity starts here.</h2><p>Join students, colleges and employers building better connections with CampusPe.</p><button className="button button-white" onClick={() => act("Sign Up")}>Get started for free <ArrowRight size={15}/></button></section>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#home">CampusPe<span>Connecting Students, Institutions &amp; Companies</span></a><div><a href="#college">Colleges</a><a href="#hiring">Employers</a><a href="#jobs">Jobs</a><a href="#blogs">Blogs</a></div><small>© {new Date().getFullYear()} CampusPe. Connecting ambition with opportunity.</small></footer>
      <Modal mode={modal} onClose={() => setModal("")}/>
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}
