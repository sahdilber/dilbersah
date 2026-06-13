const files = {
  about: {
    tab: "AboutMe.swift",
    crumb: "DilberSah > Profile_Info",
    previewTitle: "Profile Card",
    code: `import SwiftUI

struct AboutMe: View {
  let name = "Dilber Şah"
  let role = "iOS & Front-End Developer"
  let location = "Istanbul / Turkey"

  let summary = [
    "Computer Engineering graduate with experience in iOS development,",
    "front-end development, and product design.",
    "Skilled in SwiftUI, Firebase, React, JavaScript, MVVM,",
    "REST APIs, JSON, MapKit, Git, GitHub, Xcode, VS Code, and UI/UX design."
  ]

  let education = Education(
    school: "Çukurova University",
    degree: "Bachelor of Computer Engineering",
    years: "2020–2025"
  )

  var body: some View {
    ProfileCard(name: name, role: role, location: location)
  }
}`,
    preview: `
      <div class="preview-card">
        <div class="avatar">D</div>
        <h1>Dilber Şah</h1>
        <p>iOS & Front-End Developer based in Istanbul, building SwiftUI products, responsive web interfaces, and polished user experiences.</p>
        <div class="pill-row">
          <span class="pill">SwiftUI</span>
          <span class="pill">React</span>
          <span class="pill">UI/UX</span>
        </div>
        <div class="project-tile">
          <strong>Education</strong>
          <p>Çukurova University · Computer Engineering · 2020–2025</p>
        </div>
      </div>`
  },
  experience: {
    tab: "Experience.swift",
    crumb: "DilberSah > Profile_Info",
    previewTitle: "Experience",
    code: `import Foundation

struct Experience: Timeline {
  let roles: [Role] = [
    Role(
      company: "KargoLab",
      title: "iOS & Front-End Developer",
      period: "Nov 2025 – Present",
      bullets: [
        "Developed iOS interfaces using SwiftUI and MVVM architecture.",
        "Built responsive web interfaces using React, HTML, CSS, and JavaScript.",
        "Contributed to UX/UI improvements and feature implementation across mobile and web projects."
      ]
    ),
    Role(
      company: "Eterna Teknoloji",
      title: "iOS Developer Intern",
      period: "Jul 2025 – Sep 2025",
      bullets: [
        "Developed user-focused iOS interfaces using SwiftUI.",
        "Worked with MVVM and reusable UI components.",
        "Contributed to code quality, UI improvements, and teamwork."
      ]
    ),
    Role(
      company: "Dorasoft",
      title: "Software Engineering Intern",
      period: "Jul 2025 – Aug 2025",
      bullets: [
        "Supported development and debugging of an SQL-based ERP system.",
        "Helped improve data processing performance.",
        "Took part in technical communication and problem-solving activities."
      ]
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Experience</h2>
        <div class="timeline-item">
          <strong>KargoLab</strong>
          <p>iOS & Front-End Developer · Nov 2025 – Present</p>
        </div>
        <div class="timeline-item">
          <strong>Eterna Teknoloji</strong>
          <p>iOS Developer Intern · Jul 2025 – Sep 2025</p>
        </div>
        <div class="timeline-item">
          <strong>Dorasoft</strong>
          <p>Software Engineering Intern · Jul 2025 – Aug 2025</p>
        </div>
      </div>`
  },
  skills: {
    tab: "Skills.swift",
    crumb: "DilberSah > Profile_Info",
    previewTitle: "Skill Matrix",
    code: `enum SkillGroup: String, CaseIterable {
  case iOS = "iOS Development"
  case web = "Front-End Development"
  case architecture = "Architecture & APIs"
  case tooling = "Developer Tools"
  case design = "Product Design"
}

let skills: [SkillGroup: [String]] = [
  .iOS: ["SwiftUI", "MapKit", "CoreLocation", "CoreML", "Xcode"],
  .web: ["React", "JavaScript", "HTML", "CSS"],
  .architecture: ["MVVM", "REST APIs", "JSON", "Firebase"],
  .tooling: ["Git", "GitHub", "VS Code"],
  .design: ["UI/UX Design", "Responsive Interfaces", "Mobile Usability"]
]`,
    preview: `
      <div class="preview-card">
        <h2>Skills</h2>
        <div class="skill-grid">
          <span class="skill-chip">Swift</span>
          <span class="skill-chip">SwiftUI</span>
          <span class="skill-chip">React</span>
          <span class="skill-chip">JavaScript</span>
          <span class="skill-chip">Firebase</span>
          <span class="skill-chip">MVVM</span>
          <span class="skill-chip">REST APIs</span>
          <span class="skill-chip">MapKit</span>
        </div>
        <div class="project-tile"><strong>iOS + Front-End</strong><div class="project-meter" style="--value: 94%"><span></span></div></div>
        <div class="project-tile"><strong>Product UI/UX</strong><div class="project-meter" style="--value: 90%"><span></span></div></div>
      </div>`
  },
  projects: {
    tab: "Projects.swift",
    crumb: "DilberSah > Profile_Info",
    previewTitle: "Projects",
    code: `import SwiftUI

struct Projects: PortfolioSection {
  let featured: [Project] = [
    Project(
      name: "Pluggy",
      category: "EV Charging",
      stack: ["SwiftUI", "MapKit", "CoreLocation"],
      summary: "EV charging station discovery app with map-based station search, operator filtering, favorites, charging point exploration, modern UX/UI design, and mobile usability."
    ),
    Project(
      name: "Moodiary",
      category: "Mood Journal",
      stack: ["SwiftUI", "Firebase"],
      summary: "iOS mood tracking app with mood tracking, statistics, goal management, offline support, and dark mode."
    ),
    Project(
      name: "ArtifyAI",
      category: "AI Art",
      stack: ["SwiftUI", "CoreML", "Image Processing"],
      summary: "AI-powered iOS app that transforms photos into artistic styles with real-time image processing."
    ),
    Project(
      name: "TripGo",
      category: "Travel Discovery",
      stack: ["Product Design", "Mobile UX"],
      summary: "Teknofest 2023 travel discovery app concept focused on local attractions, cultural destinations, and food recommendations."
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Projects</h2>
        <div class="project-tile"><strong>Pluggy</strong><p>EV charging discovery with map search and favorites.</p></div>
        <div class="project-tile"><strong>Moodiary</strong><p>Mood tracking, statistics, goals, offline support, dark mode.</p></div>
        <div class="project-tile"><strong>ArtifyAI</strong><p>CoreML-powered photo-to-art transformations.</p></div>
        <div class="project-tile"><strong>TripGo</strong><p>Teknofest 2023 travel discovery concept.</p></div>
      </div>`
  },
  contact: {
    tab: "Contact.swift",
    crumb: "DilberSah > Profile_Info",
    previewTitle: "Contact",
    code: `import Foundation

struct Contact {
  let email = "dilber-sah@hotmail.com"
  let github = "github.com/sahdilber"
  let linkedIn = "linkedin.com/in/dilbersah"
  let instagram = "instagram.com/dilbersah"
}`,
    preview: `
      <div class="preview-card">
        <h2>Contact</h2>
        <p>iOS & Front-End Developer focused on SwiftUI, React, product design, and clean mobile/web interfaces.</p>
        <div class="contact-link"><strong>Email</strong><p>dilber-sah@hotmail.com</p></div>
        <div class="contact-link"><strong>Location</strong><p>Istanbul / Turkey</p></div>
        <div class="contact-link"><strong>Education</strong><p>Çukurova University · Computer Engineering</p></div>
      </div>`
  },
  pluggy: {
    tab: "Pluggy.app",
    crumb: "DilberSah > Featured_Projects",
    previewTitle: "Pluggy",
    code: `@main
struct PluggyApp: App {
  var body: some Scene {
    WindowGroup {
      ChargingExperience()
        .theme(.electricPurple)
        .withRealtimeStatus()
    }
  }
}

final class PluggyFeatureSet {
  let highlights = [
    "Map-based station search",
    "Operator filtering",
    "Favorite charging stations",
    "Charging point exploration",
    "Modern mobile UX/UI"
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Pluggy</h2>
        <p>EV charging station discovery app using SwiftUI with map-based search, filters, favorites, and mobile usability.</p>
        <div class="project-tile"><strong>Station Search</strong><p>Map-based discovery, operators, favorites.</p></div>
        <div class="project-tile"><strong>Session</strong><div class="project-meter" style="--value: 78%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">MapKit</span><span class="pill">CoreLocation</span></div>
      </div>`
  },
  moodiary: {
    tab: "Moodiary.app",
    crumb: "DilberSah > Featured_Projects",
    previewTitle: "Moodiary",
    code: `struct MoodiaryApp {
  let purpose = "Mood tracking and journaling"

  func dailyCheckIn() -> Entry {
    Entry(
      mood: .reflective,
      statistics: .enabled,
      goals: .active,
      offlineSupport: true,
      theme: .darkMode
    )
  }
}`,
    preview: `
      <div class="preview-card">
        <h2>Moodiary</h2>
        <p>iOS mood tracking app built with SwiftUI and Firebase, including statistics, goals, offline support, and dark mode.</p>
        <div class="project-tile"><strong>Tracking</strong><p>Mood entries, statistics, calendar flow.</p></div>
        <div class="project-tile"><strong>Energy</strong><div class="project-meter" style="--value: 64%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">Firebase</span><span class="pill">Offline</span></div>
      </div>`
  },
  artify: {
    tab: "ArtifyAI.app",
    crumb: "DilberSah > Featured_Projects",
    previewTitle: "ArtifyAI",
    code: `import Vision
import OpenAI

struct ArtifyAI {
  let pipeline: [CreativeStep] = [
    .photoUpload,
    .coreMLStyleTransfer,
    .realTimePreview,
    .exportArtwork
  ]

  func create() async -> Artwork {
    await Studio.render(style: .premium)
  }
}`,
    preview: `
      <div class="preview-card">
        <h2>ArtifyAI</h2>
        <p>AI-powered iOS app using CoreML and SwiftUI to transform photos into artistic styles with real-time processing.</p>
        <div class="project-tile"><strong>Style Engine</strong><p>Photo upload, CoreML transformation, preview.</p></div>
        <div class="project-tile"><strong>Render</strong><div class="project-meter" style="--value: 88%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">CoreML</span><span class="pill">Image Processing</span></div>
      </div>`
  }
};

const appDetails = {
  pluggy: {
    name: "Pluggy",
    category: "EV Charging",
    rating: "4.9",
    developer: "Dilber",
    language: "TR + EN",
    icon: "P",
    tone: "pluggy",
    openLabel: "OPEN IN APP STORE",
    about: "EV charging station discovery app using SwiftUI. Includes map-based station search, operator filtering, favorites, charging point exploration, modern UX/UI design, and mobile usability.",
    features: ["Map-Based Station Search", "Operator Filtering", "Favorite Stations", "Charging Point Exploration", "Modern UX/UI"],
    technologies: ["SwiftUI", "MapKit", "CoreLocation", "MVVM"]
  },
  moodiary: {
    name: "Moodiary",
    category: "Mood Journal",
    rating: "4.8",
    developer: "Dilber",
    language: "TR + EN",
    icon: "M",
    tone: "moodiary",
    openLabel: "OPEN APP",
    githubUrl: "https://github.com/sahdilber/Mood-journal",
    about: "iOS mood tracking app built with SwiftUI and Firebase. Includes mood tracking, statistics, goal management, offline support, and dark mode.",
    features: ["Mood Tracking", "Statistics", "Goal Management", "Offline Support", "Dark Mode"],
    technologies: ["SwiftUI", "Firebase", "Firestore", "MVVM"]
  },
  artify: {
    name: "ArtifyAI",
    category: "AI Art",
    rating: "4.7",
    developer: "Dilber",
    language: "EN",
    icon: "A",
    tone: "artify",
    openLabel: "OPEN APP",
    githubUrl: "https://github.com/sahdilber/ArtifyAI-",
    about: "AI-powered iOS app using CoreML and SwiftUI to transform photos into artistic styles with real-time image processing.",
    features: ["AI Image Transformation", "Artistic Styles", "Photo Upload", "Real-Time Processing"],
    technologies: ["SwiftUI", "CoreML", "Image Processing", "MVVM"]
  }
};

const PLUGGY_APP_STORE_URL = "PASTE_PLUGGY_APP_STORE_LINK_HERE";
const CV_DOWNLOAD_URL = "/Dilber-Sah-CV.pdf";

const appGalleries = {
  moodiary: {
    title: "Moodiary",
    eyebrow: "App Preview",
    summary: "Mood tracking, journal flow, calendar insights, and dark-mode screens.",
    images: [
      "/images/moodiary-1.png",
      "/images/moodiary-2.png",
      "/images/moodiary-3.png"
    ]
  },
  artify: {
    title: "ArtifyAI",
    eyebrow: "App Preview",
    summary: "Photo upload, creative style selection, and AI transformation previews.",
    images: [
      "/images/artifyai-1.png",
      "/images/artifyai-2.png",
      "/images/artifyai-3.png"
    ]
  }
};

const codeBlock = document.getElementById("codeBlock");
const lineNumbers = document.getElementById("lineNumbers");
const activeTab = document.getElementById("activeTab");
const appPreview = document.getElementById("appPreview");
const phoneContext = document.getElementById("phoneContext");
const previewTitle = document.getElementById("previewTitle");
const iphone = document.getElementById("iphone");
const runButton = document.getElementById("runButton");
const buildStatus = document.getElementById("buildStatus");
const statusText = document.getElementById("statusText");
const statusDetail = document.getElementById("statusDetail");
const simulatorPanel = document.getElementById("simulatorPanel");
const launchPlaceholder = document.getElementById("launchPlaceholder");
const appDetailSheet = document.getElementById("appDetailSheet");
const sheetClose = document.getElementById("sheetClose");
const sheetIcon = document.getElementById("sheetIcon");
const sheetName = document.getElementById("sheetName");
const sheetCategory = document.getElementById("sheetCategory");
const sheetRating = document.getElementById("sheetRating");
const sheetDeveloper = document.getElementById("sheetDeveloper");
const sheetLanguage = document.getElementById("sheetLanguage");
const sheetAbout = document.getElementById("sheetAbout");
const sheetFeatures = document.getElementById("sheetFeatures");
const sheetTech = document.getElementById("sheetTech");
const openAppButton = document.querySelector(".open-app-button");
const githubAppButton = document.querySelector(".github-app-button");
const miniAppScreen = document.getElementById("miniAppScreen");
const editorBody = document.querySelector(".editor-body");
const mobileActiveFile = document.getElementById("mobileActiveFile");
const terminalTarget = document.getElementById("terminalTarget");
const terminalLog = document.getElementById("terminalLog");
const terminalContactCard = document.getElementById("terminalContactCard");
const crumbs = document.querySelector(".crumbs");
const buttons = [...document.querySelectorAll(".file")];
const homeIcons = [...document.querySelectorAll(".home-icon")];
let buildTimer;
let launchTimer;
let buildLogTimers = [];
let currentDetailKey = "pluggy";

const contactActions = {
  email: "mailto:dilber-sah@hotmail.com",
  github: "https://github.com/sahdilber",
  linkedIn: "https://www.linkedin.com/in/dilbersah/",
  instagram: "https://www.instagram.com/dilbersah/"
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function tokenName(index) {
  let value = index;
  let token = "";
  do {
    token = String.fromCharCode(65 + (value % 26)) + token;
    value = Math.floor(value / 26) - 1;
  } while (value >= 0);
  return token;
}

function highlightSwift(source) {
  const strings = [];
  let html = escapeHtml(source).replace(/("[^"]*")/g, (match) => {
    strings.push(`<span class="str">${match}</span>`);
    return `__STR${tokenName(strings.length - 1)}__`;
  });

  html = html.replace(/\b(import|struct|let|var|func|enum|case|final|class|async|throws|await|return|some|in)\b/g, '<span class="kw">$1</span>');
  html = html.replace(/\b(View|App|Scene|WindowGroup|Text|Role|Timeline|Milestone|Skill|SkillGroup|Int|String|Bool|Result|Entry|Artwork|CreativeStep|Studio|Education|Project|Projects|PortfolioSection)\b/g, '<span class="type">$1</span>');
  html = html.replace(/(@[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="attr">$1</span>');
  html = html.replace(/(\.[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="prop">$1</span>');
  html = html.replace(/\b([0-9]{2,3})\b/g, '<span class="num">$1</span>');
  return html.replace(/__STR([A-Z]+)__/g, (_, token) => {
    let index = 0;
    for (const char of token) {
      index = index * 26 + (char.charCodeAt(0) - 64);
    }
    return strings[index - 1];
  });
}

function highlightContactSwift(source) {
  const highlighted = highlightSwift(source);
  return highlighted
    .split("\n")
    .map((line) => {
      const action = line.match(/\b(email|github|linkedIn|instagram)\b/)?.[1];
      if (!action) return line;
      return `<a class="code-link" href="${contactActions[action]}"${action === "email" ? "" : ' target="_blank" rel="noopener noreferrer"'}>${line}</a>`;
    })
    .join("\n");
}

function renderFile(key) {
  const file = files[key];
  activeTab.textContent = file.tab;
  mobileActiveFile.textContent = file.tab;
  terminalTarget.textContent = file.tab;
  crumbs.textContent = file.crumb;
  codeBlock.innerHTML = key === "contact" ? highlightContactSwift(file.code) : highlightSwift(file.code);
  lineNumbers.innerHTML = file.code
    .split("\n")
    .map((_, index) => `<li>${index + 1}</li>`)
    .join("");

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.file === key);
  });

  editorBody.classList.remove("flash");
  void editorBody.offsetWidth;
  editorBody.classList.add("flash");
  renderFileLogs(key);
  updateSimulatorContext(key);
  terminalContactCard.hidden = key !== "contact";
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function setTerminalLogs(entries) {
  terminalLog.innerHTML = entries
    .map((entry, index) => `<li class="${entry.type || "idle"}" style="animation-delay: ${index * 42}ms">${escapeHtml(entry.text)}</li>`)
    .join("");
}

function renderFileLogs(key) {
  const baseLogs = {
    about: [
      { text: "Loaded Profile_Info/AboutMe.swift" },
      { text: "Resolved View body: ProfileCard", type: "success" },
      { text: "Preview context: personal introduction", type: "idle" }
    ],
    experience: [
      { text: "Loaded Profile_Info/Experience.swift" },
      { text: "Timeline milestones compiled", type: "success" },
      { text: "No runtime warnings", type: "idle" }
    ],
    skills: [
      { text: "Loaded Profile_Info/Skills.swift" },
      { text: "Skill matrix normalized", type: "success" },
      { text: "Rendering compact capabilities view", type: "idle" }
    ],
    projects: [
      { text: "Loaded Profile_Info/Projects.swift" },
      { text: "Portfolio project list indexed", type: "success" },
      { text: "TripGo concept included", type: "idle" }
    ],
    contact: [
      { text: "Loaded Profile_Info/Contact.swift" },
      { text: "Availability status ready", type: "success" },
      { text: "Contact route is local-only", type: "idle" }
    ],
    pluggy: [
      { text: "Loaded Featured_Projects/Pluggy.app" },
      { text: "MapKit + CoreLocation symbols linked", type: "success" },
      { text: "Simulator context: Pluggy detail sheet", type: "idle" }
    ],
    moodiary: [
      { text: "Loaded Featured_Projects/Moodiary.app" },
      { text: "Firestore sync model available", type: "success" },
      { text: "Simulator context: Moodiary detail sheet", type: "idle" }
    ],
    artify: [
      { text: "Loaded Featured_Projects/ArtifyAI.app" },
      { text: "Image processing pipeline staged", type: "success" },
      { text: "Simulator context: ArtifyAI detail sheet", type: "idle" }
    ]
  };

  setTerminalLogs(baseLogs[key] || []);
}

function queueBuildLogs() {
  buildLogTimers.forEach((timer) => window.clearTimeout(timer));
  buildLogTimers = [];
  setTerminalLogs([{ text: "xcodebuild -scheme DilberSah -destination 'iPhone 17 Pro'", type: "idle" }]);

  [
    { delay: 420, text: "CompileSwiftSources normal arm64", type: "idle" },
    { delay: 880, text: "Linking DilberSah.app", type: "idle" },
    { delay: 1320, text: "Embedding simulator assets", type: "idle" },
    { delay: 1840, text: "Build operation succeeded", type: "success" }
  ].forEach((entry) => {
    buildLogTimers.push(window.setTimeout(() => {
      const item = document.createElement("li");
      item.className = entry.type;
      item.textContent = entry.text;
      terminalLog.appendChild(item);
    }, entry.delay));
  });
}

function updateSimulatorContext(key) {
  const file = files[key];
  if (key === "cv") {
    phoneContext.textContent = "Dilber Şah CV · iOS & Front-End Developer";
    return;
  }
  if (!file) return;

  const contextText = {
    about: "Dilber Şah · iOS & Front-End Developer · Istanbul / Turkey",
    experience: "Current role: KargoLab · iOS & Front-End Developer",
    skills: "SwiftUI · Firebase · React · JavaScript · MVVM · REST APIs",
    projects: "Pluggy · Moodiary · ArtifyAI · TripGo",
    contact: "Email · GitHub · LinkedIn · Instagram · CV",
    pluggy: "Pluggy · EV charging discovery",
    moodiary: "Moodiary · Mood tracking with SwiftUI + Firebase",
    artify: "ArtifyAI · CoreML photo style transformation",
    cv: "Dilber Şah CV · iOS & Front-End Developer"
  };

  phoneContext.textContent = contextText[key] || "Dilber Şah · Portfolio OS";

  if (!appDetails[key]) {
    if (simulatorPanel.classList.contains("launched")) {
      closeAppDetail();
      closeMiniApp();
      previewTitle.textContent = file.previewTitle;
    }
    return;
  }

  currentDetailKey = key;
  previewTitle.textContent = appDetails[key].name;
  if (simulatorPanel.classList.contains("launched")) {
    openAppDetail(key);
  }
}

function openAppDetail(key) {
  const detail = appDetails[key];
  if (!detail) return;

  currentDetailKey = key;
  closeMiniApp();
  sheetIcon.className = `sheet-app-icon ${detail.tone}`;
  sheetIcon.textContent = detail.icon;
  sheetName.textContent = detail.name;
  sheetCategory.textContent = detail.category;
  sheetRating.textContent = detail.rating;
  sheetDeveloper.textContent = detail.developer;
  sheetLanguage.textContent = detail.language;
  sheetAbout.textContent = detail.about;
  renderList(sheetFeatures, detail.features);
  renderList(sheetTech, detail.technologies);
  openAppButton.textContent = detail.openLabel || "OPEN APP";
  githubAppButton.hidden = !detail.githubUrl;
  githubAppButton.onclick = detail.githubUrl
    ? () => window.open(detail.githubUrl, "_blank", "noopener,noreferrer")
    : null;
  appDetailSheet.classList.add("open");
  appDetailSheet.removeAttribute("aria-hidden");
}

function closeAppDetail() {
  appDetailSheet.classList.remove("open");
  appDetailSheet.setAttribute("aria-hidden", "true");
}

function miniTopbar(title, eyebrow) {
  return `
    <div class="mini-app-topbar">
      <button class="mini-back" type="button" aria-label="Back to app details">‹</button>
      <div class="mini-title">
        <span>${escapeHtml(eyebrow)}</span>
        <strong>${escapeHtml(title)}</strong>
      </div>
    </div>`;
}

function miniAppTemplate(key) {
  if (key === "cv") {
    return `
      <div class="cv-preview-screen">
        ${miniTopbar("Dilber-Sah-CV.pdf", "Files Preview")}
        <div class="cv-cover mini-card">
          <div class="cv-doc-icon">
            <span>PDF</span>
          </div>
          <h3>Dilber Şah</h3>
          <p>iOS & Front-End Developer</p>
          <div class="cv-lines" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div class="cv-summary mini-card">
          <span>Experience Summary</span>
          <p>Computer Engineering graduate building SwiftUI apps, Firebase-backed product flows, React interfaces, and polished UI/UX systems.</p>
        </div>
        <a class="cv-download-phone" href="${CV_DOWNLOAD_URL}" target="_blank" rel="noopener noreferrer">
          <span class="download-icon" aria-hidden="true"></span>
          Download CV
        </a>
      </div>`;
  }

  if (appGalleries[key]) {
    const gallery = appGalleries[key];
    return `
      <div class="gallery-preview ${key}-gallery">
        ${miniTopbar(gallery.title, gallery.eyebrow)}
        <div class="gallery-intro">
          <h3>${escapeHtml(gallery.title)} Screenshots</h3>
          <p>${escapeHtml(gallery.summary)}</p>
        </div>
        <div class="gallery-frame" aria-label="${escapeHtml(gallery.title)} screenshots">
          <div class="gallery-track">
            ${gallery.images.map((src, index) => `
              <figure class="gallery-slide">
                <img src="${escapeHtml(src)}" alt="${escapeHtml(gallery.title)} screenshot ${index + 1}" />
                <figcaption>${String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
        <div class="gallery-dots" aria-hidden="true">
          ${gallery.images.map((_, index) => `<span class="${index === 0 ? "active" : ""}"></span>`).join("")}
        </div>
      </div>`;
  }

  if (key === "pluggy") {
    return `
      <div class="pluggy-preview">
        ${miniTopbar("Pluggy", "EV map")}
        <div class="map-search mini-card">Search charging stations</div>
        <div class="map-stage">
          <div class="map-road"></div>
          <span class="charging-pin pin-one"></span>
          <span class="charging-pin pin-two"></span>
          <span class="charging-pin pin-three"></span>
        </div>
        <div class="station-card mini-card">
          <div>
            <h3>Zorlu Center Station</h3>
            <p>6 min away · 4 fast chargers available · 78 kW</p>
          </div>
          <button class="favorite-button" type="button" aria-label="Favorite station">♥</button>
        </div>
      </div>`;
  }

  if (key === "moodiary") {
    return `
      <div class="moodiary-preview">
        ${miniTopbar("Moodiary", "Today")}
        <div class="mood-card mini-card">
          <h3>Today's Mood</h3>
          <p>Calm, focused, slightly dreamy.</p>
          <div class="mood-score"><span>8.4</span><small>Steady</small></div>
        </div>
        <div class="mood-options" aria-label="Mood options">
          <button class="mood-option" type="button">🙂</button>
          <button class="mood-option selected" type="button">😌</button>
          <button class="mood-option" type="button">✨</button>
          <button class="mood-option" type="button">🌙</button>
        </div>
        <div class="journal-preview mini-card">
          <h3>Journal</h3>
          <p>I felt more centered after organizing my ideas and taking a quiet walk. The day had a soft rhythm.</p>
        </div>
        <div class="calendar-strip">
          <div class="calendar-day"><span>Mon</span><strong>6</strong></div>
          <div class="calendar-day"><span>Tue</span><strong>7</strong></div>
          <div class="calendar-day active"><span>Wed</span><strong>8</strong></div>
          <div class="calendar-day"><span>Thu</span><strong>9</strong></div>
          <div class="calendar-day"><span>Fri</span><strong>10</strong></div>
        </div>
      </div>`;
  }

  return `
    <div class="artify-preview">
      ${miniTopbar("ArtifyAI", "Studio")}
      <div class="photo-placeholder">Upload Photo</div>
      <div class="style-chips" aria-label="Style choices">
        <button class="style-chip active" type="button">Van Gogh</button>
        <button class="style-chip" type="button">Cyberpunk</button>
        <button class="style-chip" type="button">Watercolor</button>
      </div>
      <div class="before-after">
        <div class="preview-swatch mini-card" style="--swatch: linear-gradient(135deg, #334155, #0f172a)">
          <span>Before</span>
        </div>
        <div class="preview-swatch mini-card" style="--swatch: radial-gradient(circle, #f59e0b, #f472b6 48%, #581c87)">
          <span>After</span>
        </div>
      </div>
      <div class="studio-panel mini-card" style="margin-top: 12px; padding: 12px;">
        <h3>Creative Preview</h3>
        <p>Transform portraits into expressive artwork with a warm pink and orange studio glow.</p>
      </div>
    </div>`;
}

function bindMiniAppInteractions() {
  const backButton = miniAppScreen.querySelector(".mini-back");
  backButton?.addEventListener("click", () => {
    closeMiniApp();
    if (currentDetailKey === "cv") {
      previewTitle.textContent = "iPhone 17 Pro";
      return;
    }
    openAppDetail(currentDetailKey);
  });

  const favoriteButton = miniAppScreen.querySelector(".favorite-button");
  favoriteButton?.addEventListener("click", () => {
    favoriteButton.classList.toggle("active");
  });

  miniAppScreen.querySelectorAll(".mood-option").forEach((option) => {
    option.addEventListener("click", () => {
      miniAppScreen.querySelectorAll(".mood-option").forEach((item) => item.classList.remove("selected"));
      option.classList.add("selected");
    });
  });

  miniAppScreen.querySelectorAll(".style-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      miniAppScreen.querySelectorAll(".style-chip").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
    });
  });

  const galleryFrame = miniAppScreen.querySelector(".gallery-frame");
  const galleryDots = [...miniAppScreen.querySelectorAll(".gallery-dots span")];
  galleryFrame?.addEventListener("scroll", () => {
    const width = galleryFrame.clientWidth || 1;
    const activeIndex = Math.round(galleryFrame.scrollLeft / width);
    galleryDots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
  });
}

function openMiniApp(key) {
  currentDetailKey = key;
  closeAppDetail();
  miniAppScreen.innerHTML = miniAppTemplate(key);
  miniAppScreen.classList.add("open");
  miniAppScreen.removeAttribute("aria-hidden");
  bindMiniAppInteractions();
}

function openAppAction(key) {
  if (key === "pluggy") {
    window.open(PLUGGY_APP_STORE_URL, "_blank", "noopener,noreferrer");
    return;
  }

  openMiniApp(key);
}

function closeMiniApp() {
  miniAppScreen.classList.remove("open");
  miniAppScreen.setAttribute("aria-hidden", "true");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    renderFile(button.dataset.file);
    button.classList.add("pressed");
    window.setTimeout(() => button.classList.remove("pressed"), 180);
  });
});

homeIcons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.file;
    if (key === "cv") {
      updateSimulatorContext(key);
      previewTitle.textContent = "CV.pdf";
      openMiniApp(key);
      return;
    }
    renderFile(key);
    openAppDetail(key);
  });
});

sheetClose.addEventListener("click", closeAppDetail);
openAppButton.addEventListener("click", () => openAppAction(currentDetailKey));

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    runButton.classList.add("shortcut-pulse");
    runButton.click();
    window.setTimeout(() => runButton.classList.remove("shortcut-pulse"), 260);
  }

  if (event.key === "Escape") {
    closeAppDetail();
    closeMiniApp();
  }
});

runButton.addEventListener("click", () => {
  window.clearTimeout(buildTimer);
  window.clearTimeout(launchTimer);
  buildLogTimers.forEach((timer) => window.clearTimeout(timer));
  closeAppDetail();
  closeMiniApp();
  simulatorPanel.classList.remove("launched");
  runButton.classList.add("running");
  buildStatus.classList.remove("succeeded");
  buildStatus.classList.add("building");
  previewTitle.textContent = "Building";
  statusText.textContent = "Building DilberSah.app...";
  statusDetail.textContent = "Preparing simulator";
  iphone.setAttribute("aria-hidden", "true");
  launchPlaceholder.removeAttribute("aria-hidden");
  queueBuildLogs();

  buildTimer = window.setTimeout(() => {
    runButton.classList.remove("running");
    buildStatus.classList.remove("building");
    buildStatus.classList.add("succeeded");
    statusText.textContent = "BUILD SUCCEEDED";
    statusDetail.textContent = "DilberSah.app";
    previewTitle.textContent = "iPhone 17 Pro";
  }, 2000);

  launchTimer = window.setTimeout(() => {
    simulatorPanel.classList.add("launched");
    iphone.removeAttribute("aria-hidden");
    launchPlaceholder.setAttribute("aria-hidden", "true");
    iphone.classList.add("running", "run-pulse");
    window.setTimeout(() => {
      iphone.classList.remove("running", "run-pulse");
    }, 920);
  }, 2140);
});

renderFile("about");
