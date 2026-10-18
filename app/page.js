"use client";

import { useState } from "react";

const skills = [
  { group: "Languages", items: ["C", "C++", "Python", "MATLAB", "GNU Octave", "Embedded C", "JavaScript"] },
  { group: "Hardware & Platforms", items: ["ESP32", "Raspberry Pi Zero W", "Arduino"] },
  { group: "Web & Backend", items: ["Full-Stack Development", "React", "Next.js", "Supabase"] },
  { group: "Tools & Software", items: ["LTspice", "Qucs-S", "Linux", "btop"] },
  { group: "Domains", items: ["Embedded Systems", "IoT", "Machine Learning (Beginner)"] },
];

const experience = [
  {
    role: "Workshop Facilitator: Cybersecurity & AI",
    org: "The Himalayan Heritage School, Bilaspur, HP",
    date: "Dec 2025",
    points: [
      "Ran a one-day workshop for 12 to 15 teachers on cybersecurity awareness and AI in teaching",
      "Explained technical concepts clearly to a non-technical audience",
    ],
  },
  {
    role: "Python Instructor (Class 7 to 10)",
    org: "The Himalayan Heritage School, Bilaspur, HP",
    date: "Dec 2025 to Jan 2026",
    points: [
      "Taught a 16-day beginner Python course covering variables, loops, conditionals, and problem-solving",
      "Designed age-appropriate lessons for students with no prior programming experience",
    ],
  },
];

const projects = [
  {
    title: "Sync",
    tag: "Healthcare + Drones",
    summary:
      "A connected system for blood donation and emergency medical logistics, combining a donor platform with drone delivery and disaster response.",
    phases: [
      {
        name: "Phase 1: Blood Sync",
        status: "complete",
        statusLabel: "Complete",
        detail:
          "Web platform connecting blood donors and recipients using real-time geo-location to match the nearest donor quickly. Meeting points are limited to hospitals and blood banks for safety. Built with React, Next.js, and Supabase at a state-level hackathon.",
        sub: {
          name: "Emergency blood delivery by drone between recognized hospitals",
          status: "progress",
          statusLabel: "Launching soon",
        },
      },
      {
        name: "Phase 2: Medicine & Antivenom Delivery",
        status: "progress",
        statusLabel: "Partly built",
        detail: "Drone delivery of medicine and antivenom to patients in emergencies.",
      },
      {
        name: "Phase 3: Disaster Management",
        status: "planned",
        statusLabel: "Planned",
        detail: "Drone-based support for disaster management and response.",
      },
    ],
    tags: ["React", "Next.js", "Supabase", "Drones", "Geo-location"],
  },
  {
    title: "Gas Leakage Detection System",
    tag: "IoT Safety",
    summary:
      "An automated safety system for homes and commercial spaces. When gas is detected, it cuts off the cylinder valve, starts exhaust fans, and sounds an alarm.",
    bullets: [
      "Detects gas presence with a gas sensor on an ESP32",
      "Servo motor shuts off the gas cylinder valve to stop the source",
      "Exhaust fans turn on automatically to clear the gas and reduce ignition risk",
      "Buzzer alarm alerts occupants in real time",
    ],
    tags: ["ESP32", "Gas Sensor", "Servo Motor", "Buzzer", "Embedded C"],
  },
  {
    title: "Automated Attendance System",
    tag: "Biometric Security",
    summary:
      "A two-factor attendance system for schools, colleges, offices, and factories.",
    bullets: [
      "RFID card scan followed by fingerprint verification",
      "Real-time confirmation shown on a 16x2 LCD",
      "System performance monitored with btop",
      "Built as a team covering hardware and software",
    ],
    tags: ["Raspberry Pi Zero W", "RFID", "Fingerprint Sensor", "Python"],
  },
];

const statusClass = {
  complete: "status-complete",
  progress: "status-progress",
  planned: "status-planned",
};

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "ok", text: "Message sent. Thanks for reaching out!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "err", text: data.error || "Something went wrong." });
      }
    } catch {
      setStatus({ type: "err", text: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Your message"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button className="btn solid" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send message"}
      </button>
      {status.text && (
        <p
          className="form-status"
          style={{ color: status.type === "ok" ? "var(--accent)" : "var(--amber)" }}
        >
          {status.text}
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <>
      <nav>
        <div className="container">
          <span className="logo">PB_</span>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <p className="label">&gt; hello, world</p>
            <h1>Parin Bhardwaj</h1>
            <p className="role">Electronics &amp; Communication Engineering Student<span className="cursor">_</span></p>
            <p className="intro">
              3rd-year ECE student at Jawaharlal Nehru Government Engineering College (graduating 2028).
              I build embedded systems, IoT devices, and drone-based solutions, and I write
              full-stack web applications. Open to internships, full-time roles, freelance work,
              and graduate programs.
            </p>
            <div className="btn-row">
              <a className="btn solid" href="#projects">View projects</a>
              <a className="btn" href="/resume.pdf" download>Download resume</a>
              <a className="btn" href="https://github.com/ParinCd" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="photo-placeholder">Profile photo<br />coming soon</div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <p className="label">01 / about</p>
          <h2>Education</h2>
          <div className="card">
            <h3>B.Tech, Electronics &amp; Communication Engineering</h3>
            <p>Jawaharlal Nehru Government Engineering College, Sundernagar</p>
            <p>Expected graduation: 2028</p>
            <p>CGPA: <span style={{ color: "var(--amber)" }}>[add CGPA]</span></p>
            <p style={{ marginTop: "0.75rem" }}>
              12th Standard: 81% &nbsp;|&nbsp; 10th Standard: 91% (Seven Star International School, Bani, HP)
            </p>
          </div>
          <div className="card" style={{ marginTop: "1.25rem" }}>
            <h3>Certifications &amp; Achievements</h3>
            <p style={{ color: "var(--amber)" }}>[add certifications, hackathons, and awards]</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <p className="label">02 / skills</p>
          <h2>Technical skills</h2>
          <div className="grid-2">
            {skills.map((s) => (
              <div className="card" key={s.group}>
                <div className="skill-group">
                  <h3>{s.group}</h3>
                  <div className="tags">
                    {s.items.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <p className="label">03 / projects</p>
          <h2>Projects</h2>
          <div className="grid-2">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="media-placeholder">Photo or video coming soon</div>
                <p className="label" style={{ marginBottom: "0.25rem" }}>{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>

                {p.phases && p.phases.map((ph) => (
                  <div className="phase" key={ph.name}>
                    <div className="phase-head">
                      <strong>{ph.name}</strong>
                      <span className={`status ${statusClass[ph.status]}`}>{ph.statusLabel}</span>
                    </div>
                    <p className="sub-feature" style={{ marginTop: "0.35rem" }}>{ph.detail}</p>
                    {ph.sub && (
                      <p className="sub-feature">
                        + {ph.sub.name}{" "}
                        <span className={`status ${statusClass[ph.sub.status]}`}>{ph.sub.statusLabel}</span>
                      </p>
                    )}
                  </div>
                ))}

                {p.bullets && (
                  <ul className="bullets">
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}

                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
                  <a href="https://github.com/ParinCd" target="_blank" rel="noopener noreferrer">
                    View code on GitHub →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <p className="label">04 / experience</p>
          <h2>Experience</h2>
          <div className="grid-2">
            {experience.map((e) => (
              <div className="card" key={e.role}>
                <p className="label" style={{ marginBottom: "0.25rem" }}>{e.date}</p>
                <h3>{e.role}</h3>
                <p style={{ fontSize: "0.9rem" }}>{e.org}</p>
                <ul className="bullets">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <p className="label">05 / contact</p>
          <h2>Let&apos;s connect</h2>
          <div className="contact-grid">
            <div>
              <ul className="contact-list">
                <li>
                  <span className="k">PHONE</span>
                  <a href="tel:+918219625431">+91 82196 25431</a>
                </li>
                <li>
                  <span className="k">EMAIL (JOBS & INTERNSHIPS)</span>
                  <a href="mailto:parin.bhardwaj123@gmail.com">parin.bhardwaj123@gmail.com</a>
                </li>
                <li>
                  <span className="k">EMAIL (FREELANCE)</span>
                  <a href="mailto:bhardwaj.parin1011@gmail.com">bhardwaj.parin1011@gmail.com</a>
                </li>
                <li>
                  <span className="k">GITHUB</span>
                  <a href="https://github.com/ParinCd" target="_blank" rel="noopener noreferrer">github.com/ParinCd</a>
                </li>
                <li>
                  <span className="k">LINKEDIN</span>
                  <span className="soon">[add link]</span>
                </li>
                <li>
                  <span className="k">INSTAGRAM</span>
                  <span className="soon">[add link]</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Parin Bhardwaj. Built with Next.js.</p>
      </footer>
    </>
  );
}
