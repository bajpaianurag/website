(() => {
  "use strict";

  const data = window.SITE_DATA;
  const app = document.getElementById("app");
  const menuButton = document.getElementById("menu-button");
  const navigation = document.getElementById("primary-navigation");
  const validRoutes = new Set(["home", "research", "publications", "awards", "contact"]);

  const icons = {
    arrow: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    download: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/></svg>`,
    external: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6"/></svg>`,
    mail: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>`,
    phone: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h3l2 5-2 2a16 16 0 0 0 4 4l2-2 5 2v3c0 2-2 4-4 4C9 20 4 15 3 7c0-2 2-4 4-4Z"/></svg>`,
    pin: `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2"/></svg>`,
    search: `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`
  };

  function routeFromHash() {
    const route = window.location.hash.replace(/^#\/?/, "").split("?")[0] || "home";
    return validRoutes.has(route) ? route : "home";
  }

  function updateActiveNav(route) {
    document.querySelectorAll("[data-route]").forEach((link) => {
      const isActive = link.dataset.route === route;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function pageHeader(kicker, title, intro) {
    return `
      <section class="page-hero">
        <div class="container page-hero-inner">
          <p class="eyebrow">${kicker}</p>
          <h1>${title}</h1>
          <p class="page-intro">${intro}</p>
        </div>
      </section>`;
  }

  function homePage() {
    const p = data.profile;
    return `
      <section class="hero">
        <div class="hero-grid container">
          <div class="hero-copy reveal">
            <p class="eyebrow">Physical metallurgy · autonomous design · sustainability</p>
            <h1>Scientific intelligence for <span>next-generation metallic materials</span></h1>
            <p class="hero-lead">${p.summary}</p>
            <div class="hero-actions">
              <a class="button primary" href="#research">Explore research ${icons.arrow}</a>
              <a class="button secondary" href="assets/docs/Anurag_Bajpai_CV.pdf" target="_blank" rel="noopener">Download CV ${icons.download}</a>
            </div>
            <div class="hero-affiliation">
              <strong>${p.title}</strong>
              <span>${p.institution}, ${p.location}</span>
              <span>${p.fellowship}</span>
            </div>
          </div>
          <div class="hero-visual reveal" aria-label="Research profile overview">
            <div class="portrait-card">
              <div class="portrait-monogram" aria-hidden="true">AB</div>
              <div class="portrait-copy">
                <p class="portrait-label">Research profile</p>
                <h2>${p.name}</h2>
                <p>${p.mission}</p>
              </div>
              <div class="research-orbits" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-strip" aria-label="Profile metrics">
        <div class="container stats-grid">
          ${data.stats.map((item) => `<div class="stat"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}
        </div>
      </section>

      <section class="section container">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Research programme</p>
            <h2>Integrated materials design across scales</h2>
          </div>
          <p>The programme combines mechanistic metallurgy, computational modelling, data-driven inference and experimental validation.</p>
        </div>
        <div class="theme-preview-grid">
          ${data.researchThemes.slice(0, 4).map((theme) => `
            <article class="theme-preview reveal">
              <span class="theme-number">${theme.number}</span>
              <h3>${theme.title}</h3>
              <p>${theme.subtitle}</p>
              <a href="#research" aria-label="Read more about ${theme.title}">View theme ${icons.arrow}</a>
            </article>`).join("")}
        </div>
      </section>

      <section class="section section-muted">
        <div class="container two-column">
          <div>
            <div class="section-heading">
              <p class="eyebrow">About</p>
              <h2>Academic profile</h2>
            </div>
            <p class="large-copy">My work addresses a central materials-science challenge: how to design composition and processing routes that generate reliable microstructures and properties under real experimental and resource constraints.</p>
            <ul class="check-list">
              ${data.expertise.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="profile-panel">
            <p class="panel-kicker">Current appointment</p>
            <h3>${p.title}</h3>
            <p>${p.institution}</p>
            <dl>
              <div><dt>Location</dt><dd>${p.location}</dd></div>
              <div><dt>Fellowship</dt><dd>${p.fellowship}</dd></div>
              <div><dt>Research focus</dt><dd>AI-assisted physical metallurgy and sustainable alloy/process design</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section class="section container">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">Recent research</p>
            <h2>Selected scientific highlights</h2>
          </div>
          <a class="text-link" href="#publications">Complete publication record ${icons.arrow}</a>
        </div>
        <div class="highlight-grid">
          ${data.selectedHighlights.map((item) => `
            <article class="highlight-card reveal">
              <span>${item.year}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>`).join("")}
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <div class="section-heading light">
            <p class="eyebrow">Career</p>
            <h2>Experience and education</h2>
          </div>
          <div class="timeline-grid">
            <div>
              <h3 class="timeline-title">Professional experience</h3>
              ${data.experience.map((item) => timelineItem(item.period, item.role, item.organization, item.detail)).join("")}
            </div>
            <div>
              <h3 class="timeline-title">Education</h3>
              ${data.education.map((item) => timelineItem(item.period, item.degree, item.institution, item.detail)).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function timelineItem(period, title, org, detail) {
    return `<article class="timeline-item">
      <span>${period}</span>
      <h4>${title}</h4>
      <p class="timeline-org">${org}</p>
      <p>${detail}</p>
    </article>`;
  }

  function researchPage() {
    return `
      ${pageHeader("Research", "Mechanism-led materials design", "Research themes are organized around the scientific connection between composition, processing, microstructure and performance. Data-driven methods are used as part of the metallurgical reasoning—not as a replacement for it.")}
      <section class="section container">
        <div class="research-stack">
          ${data.researchThemes.map((theme, index) => `
            <article class="research-card reveal">
              <div class="research-index">${theme.number}</div>
              <div class="research-body">
                <p class="research-subtitle">${theme.subtitle}</p>
                <h2>${theme.title}</h2>
                <p>${theme.text}</p>
                <div class="research-meta-grid">
                  <div>
                    <h3>Methods</h3>
                    <ul>${theme.methods.map((m) => `<li>${m}</li>`).join("")}</ul>
                  </div>
                  <div>
                    <h3>Materials and processes</h3>
                    <ul>${theme.systems.map((s) => `<li>${s}</li>`).join("")}</ul>
                  </div>
                </div>
              </div>
              <div class="research-graphic graphic-${(index % 4) + 1}" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>
            </article>`).join("")}
        </div>
      </section>
      <section class="section section-muted">
        <div class="container">
          <div class="section-heading split-heading">
            <div>
              <p class="eyebrow">Methodological framework</p>
              <h2>From data to experimentally testable decisions</h2>
            </div>
            <p>Each project is framed around a physical question and a validation strategy.</p>
          </div>
          <div class="workflow">
            ${[
              ["1", "Scientific premise", "Define the material mechanism, process limitation and testable hypothesis."],
              ["2", "Data and descriptors", "Construct composition, thermodynamic, process and microstructural representations."],
              ["3", "Interpretable learning", "Use physics-informed, uncertainty-aware and causal models where scientifically justified."],
              ["4", "Experimental closure", "Validate predicted materials or process windows and revise the mechanistic model."]
            ].map(([n,t,d]) => `<div class="workflow-step"><span>${n}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function publicationCard(pub, index) {
    const volume = pub.volume ? `, ${pub.volume}` : "";
    return `<article class="publication-item" data-year="${pub.year}" data-topic="${pub.topic.toLowerCase()}" data-search="${`${pub.title} ${pub.authors} ${pub.journal} ${pub.topic}`.toLowerCase()}">
      <div class="publication-number">${String(index + 1).padStart(2, "0")}</div>
      <div class="publication-content">
        <div class="publication-tags"><span>${pub.year}</span><span>${pub.topic}</span>${pub.highlight ? `<span class="highlight-tag">Highlighted</span>` : ""}</div>
        <h2>${pub.title}</h2>
        <p class="authors">${pub.authors.replaceAll("Anurag Bajpai", "<strong>Anurag Bajpai</strong>")}</p>
        <p class="journal"><em>${pub.journal}</em>${volume}.</p>
        ${pub.highlight ? `<p class="publication-highlight">${pub.highlight}</p>` : ""}
      </div>
      <a class="doi-link" href="https://doi.org/${pub.doi}" target="_blank" rel="noopener" aria-label="Open DOI for ${pub.title}">DOI ${icons.external}</a>
    </article>`;
  }

  function publicationsPage() {
    const topics = [...new Set(data.publications.map((pub) => pub.topic))].sort();
    const years = [...new Set(data.publications.map((pub) => pub.year))].sort((a, b) => b - a);
    return `
      ${pageHeader("Publications", "Research output", "Peer-reviewed work spanning autonomous materials design, metallic-glass physics, compositionally complex alloys, hydrogen metallurgy and circular materials processing.")}
      <section class="section container publication-section">
        <div class="publication-toolbar" aria-label="Publication filters">
          <label class="search-field">
            <span class="sr-only">Search publications</span>
            ${icons.search}
            <input id="publication-search" type="search" placeholder="Search title, author, journal or topic" autocomplete="off" />
          </label>
          <label>
            <span class="sr-only">Filter by year</span>
            <select id="year-filter">
              <option value="all">All years</option>
              ${years.map((year) => `<option value="${year}">${year}</option>`).join("")}
            </select>
          </label>
          <label>
            <span class="sr-only">Filter by topic</span>
            <select id="topic-filter">
              <option value="all">All topics</option>
              ${topics.map((topic) => `<option value="${topic.toLowerCase()}">${topic}</option>`).join("")}
            </select>
          </label>
          <span id="publication-count" class="publication-count">${data.publications.length} publications</span>
        </div>
        <div id="publication-list" class="publication-list">
          ${data.publications.map(publicationCard).join("")}
        </div>
        <p id="no-publications" class="empty-state" hidden>No publications match the selected filters.</p>
      </section>
      <section class="section section-muted">
        <div class="container output-grid">
          <article class="output-card">
            <p class="eyebrow">Book</p>
            <span>${data.book.year}</span>
            <h2>${data.book.title}</h2>
            <p>${data.book.authors}</p>
            <p>${data.book.publisher}</p>
            <small>ISBN ${data.book.isbn}</small>
          </article>
          <article class="output-card">
            <p class="eyebrow">Patent</p>
            <span>${data.patent.year}</span>
            <h2>${data.patent.title}</h2>
            <p>${data.patent.inventors}</p>
            <p>${data.patent.status}</p>
            <small>Application No. ${data.patent.application}</small>
          </article>
        </div>
      </section>
    `;
  }

  function awardsPage() {
    return `
      ${pageHeader("Awards", "Recognition, fellowships and professional service", "Selected distinctions reflecting research quality, scientific communication, leadership and contribution to the materials-science community.")}
      <section class="section container">
        <div class="award-layout">
          <div>
            <div class="section-heading"><p class="eyebrow">Honours and fellowships</p><h2>Appointments and fellowships</h2></div>
            <div class="award-list">
              ${data.awards.fellowships.map((award) => awardItem(award)).join("")}
            </div>
          </div>
          <div>
            <div class="section-heading"><p class="eyebrow">Research distinctions</p><h2>Awards and article highlights</h2></div>
            <div class="award-list">
              ${data.awards.distinctions.map((award) => awardItem(award)).join("")}
            </div>
          </div>
        </div>
      </section>
      <section class="section section-dark">
        <div class="container two-column">
          <div>
            <div class="section-heading light"><p class="eyebrow">Leadership and service</p><h2>Scientific community</h2></div>
            <ul class="service-list">${data.awards.service.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <div class="section-heading light"><p class="eyebrow">Invited talks</p><h2>Selected lectures</h2></div>
            <div class="talk-list">
              ${data.talks.map((talk) => `<article><span>${talk.date}</span><h3>${talk.title}</h3><p>${talk.venue}</p></article>`).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function awardItem(award) {
    return `<article class="award-item reveal"><span>${award.year}</span><div><h3>${award.title}</h3><p>${award.detail}</p></div></article>`;
  }

  function contactPage() {
    const p = data.profile;
    return `
      ${pageHeader("Contact", "Research communication and collaboration", "Enquiries related to scientific collaboration, autonomous materials design, sustainable metallurgy, invited lectures and research opportunities are welcome.")}
      <section class="section container contact-layout">
        <div class="contact-card">
          <p class="eyebrow">Direct contact</p>
          <h2>${p.name}</h2>
          <p>${p.title}</p>
          <p>${p.institution}</p>
          <div class="contact-links">
            <a href="mailto:${p.email}">${icons.mail}<span><small>Email</small>${p.email}</span></a>
            <a href="tel:${p.phone.replace(/[^+\d]/g, "")}">${icons.phone}<span><small>Telephone</small>${p.phone}</span></a>
            <div>${icons.pin}<span><small>Location</small>${p.location}</span></div>
          </div>
          <div class="contact-actions">
            <a class="button primary" href="mailto:${p.email}">Send email ${icons.arrow}</a>
            <a class="button secondary" href="assets/docs/Anurag_Bajpai_CV.pdf" target="_blank" rel="noopener">Curriculum vitae ${icons.download}</a>
          </div>
          <div class="external-profiles">
            <a href="${p.website}" target="_blank" rel="noopener">Academic profile ${icons.external}</a>
            <a href="${p.shortLink}" target="_blank" rel="noopener">Professional profile ${icons.external}</a>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <div class="form-heading">
            <p class="eyebrow">Compose an enquiry</p>
            <h2>Contact form</h2>
            <p>This form opens your email application; no personal information is stored by this website.</p>
          </div>
          <label>Name<input required name="name" type="text" autocomplete="name" /></label>
          <label>Email<input required name="email" type="email" autocomplete="email" /></label>
          <label>Subject<input required name="subject" type="text" /></label>
          <label>Message<textarea required name="message" rows="7"></textarea></label>
          <button class="button primary" type="submit">Open email draft ${icons.arrow}</button>
        </form>
      </section>
    `;
  }

  function bindPublicationFilters() {
    const search = document.getElementById("publication-search");
    const year = document.getElementById("year-filter");
    const topic = document.getElementById("topic-filter");
    const count = document.getElementById("publication-count");
    const empty = document.getElementById("no-publications");
    if (!search || !year || !topic) return;

    const filter = () => {
      const term = search.value.trim().toLowerCase();
      const selectedYear = year.value;
      const selectedTopic = topic.value;
      let visible = 0;
      document.querySelectorAll(".publication-item").forEach((item) => {
        const matchesSearch = !term || item.dataset.search.includes(term);
        const matchesYear = selectedYear === "all" || item.dataset.year === selectedYear;
        const matchesTopic = selectedTopic === "all" || item.dataset.topic === selectedTopic;
        const show = matchesSearch && matchesYear && matchesTopic;
        item.hidden = !show;
        if (show) visible += 1;
      });
      count.textContent = `${visible} publication${visible === 1 ? "" : "s"}`;
      empty.hidden = visible !== 0;
    };

    search.addEventListener("input", filter);
    year.addEventListener("change", filter);
    topic.addEventListener("change", filter);
  }

  function bindContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const subject = encodeURIComponent(formData.get("subject"));
      const body = encodeURIComponent(`Dear Dr. Bajpai,\n\n${formData.get("message")}\n\nSincerely,\n${formData.get("name")}\n${formData.get("email")}`);
      window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;
    });
  }

  function bindReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
  }

  function render() {
    const route = routeFromHash();
    updateActiveNav(route);
    closeMenu();
    document.title = `${route.charAt(0).toUpperCase() + route.slice(1)} | Dr. Anurag Bajpai`;

    const pages = {
      home: homePage,
      research: researchPage,
      publications: publicationsPage,
      awards: awardsPage,
      contact: contactPage
    };

    app.innerHTML = pages[route]();
    window.scrollTo({ top: 0, behavior: "auto" });
    bindPublicationFilters();
    bindContactForm();
    bindReveal();
  }

  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("hashchange", render);
  document.getElementById("current-year").textContent = new Date().getFullYear();

  if (!window.location.hash) history.replaceState(null, "", "#home");
  render();
})();
