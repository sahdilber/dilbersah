const files = {
  about: {
    tab: "AboutMe.swift",
    crumb: "DilberSah > Profile_Info > AboutMe.swift > No Selection",
    previewTitle: "Profile Card",
    code: `import SwiftUI

struct AboutMe: View {
  let name = "Dilber Şah"
  let role = "iOS & Front-End Developer"
  let location = "Istanbul / Turkey"

  let summary = [
    "iOS and Front-End developer.",
    "I build mobile applications and web experiences centered on user needs.",
    "With SwiftUI, Firebase, and React, I aim to create products",
    "with strong technical foundations that are simple and scalable.",
    "I enjoy developing new ideas, improving existing products,",
    "and working with teams that create real value."
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
        <p>iOS and Front-End developer building user-centered mobile applications and web experiences with SwiftUI, Firebase, and React.</p>
        <div class="pill-row">
          <span class="pill">SwiftUI</span>
          <span class="pill">React</span>
          <span class="pill">Product UX</span>
        </div>
        <div class="project-tile">
          <strong>Education</strong>
          <p>Çukurova University · Computer Engineering · 2020–2025</p>
        </div>
      </div>`
  },
  experience: {
    tab: "Experience.swift",
    crumb: "DilberSah > Profile_Info > Experience.swift > No Selection",
    previewTitle: "Experience",
    code: `import Foundation

struct Experience: ProductBuilder {
  let experiences: [ExperienceItem] = [
    ExperienceItem(
      name: "KargoLab",
      summary: "I work on the development of mobile and web products. While building iOS interfaces with SwiftUI, I also contribute to React-based web projects with a focus on user experience and usability. Beyond technical implementation, I care about the design and interaction details that make products easier to use."
    ),
    ExperienceItem(
      name: "Eterna Teknoloji",
      summary: "I contributed to iOS development processes by building user interfaces with SwiftUI, working with MVVM architecture, and creating reusable components. I supported code quality, interface improvements, and collaborative development within the team."
    ),
    ExperienceItem(
      name: "Dorasoft",
      summary: "I worked on development and debugging tasks for an SQL-based ERP system. I contributed to improving data processing flows, identifying performance issues, and solving technical problems while gaining hands-on experience with enterprise software development."
    ),
    ExperienceItem(
      name: "Teknofest – TripGo",
      summary: "I formed the team for TripGo and served as team lead. I managed planning, task distribution, idea development, and product direction. Together, we built a product concept focused on connecting users with local cultural places and hidden destinations across Turkey."
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Experience</h2>
        <div class="timeline-item">
          <strong>KargoLab</strong>
          <p>Mobile and web product development with SwiftUI, React, usability, and interaction-focused contributions.</p>
        </div>
        <div class="timeline-item">
          <strong>Eterna Teknoloji</strong>
          <p>iOS development with SwiftUI, MVVM architecture, reusable components, and interface improvements.</p>
        </div>
        <div class="timeline-item">
          <strong>Dorasoft</strong>
          <p>SQL-based ERP development, debugging, data processing improvements, and performance problem solving.</p>
        </div>
        <div class="timeline-item">
          <strong>Teknofest – TripGo</strong>
          <p>Team leadership, planning, product direction, and a local culture discovery product concept.</p>
        </div>
      </div>`
  },
  skills: {
    tab: "Skills.swift",
    crumb: "DilberSah > Profile_Info > Skills.swift > No Selection",
    previewTitle: "Skill Matrix",
    code: `enum SkillGroup: String, CaseIterable {
  case mobile = "Mobile Development"
  case frontend = "Frontend Development"
  case tools = "Tools & Technologies"
  case product = "Product & Design"
}

let skills: [SkillGroup: [String]] = [
  .mobile: ["SwiftUI", "MVVM", "Firebase", "MapKit", "CoreLocation", "CoreML"],
  .frontend: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
  .tools: ["Xcode", "Git", "GitHub", "VS Code", "REST APIs", "JSON"],
  .product: ["User Flows", "Usability", "Interface Design", "Visual Thinking"]
]`,
    preview: `
      <div class="preview-card">
        <h2>Skills</h2>
        <div class="skill-grid">
          <span class="skill-chip">Mobile Development</span>
          <span class="skill-chip">Frontend Development</span>
          <span class="skill-chip">Tools & Technologies</span>
          <span class="skill-chip">Product & Design</span>
        </div>
        <div class="project-tile"><strong>Mobile Development</strong><p>SwiftUI, MVVM, Firebase, MapKit, CoreLocation.</p></div>
        <div class="project-tile"><strong>Product & Design</strong><p>User flows, usability, responsive interfaces, visual detail.</p></div>
      </div>`
  },
  projects: {
    tab: "Projects.swift",
    crumb: "DilberSah > Profile_Info > Projects.swift > No Selection",
    previewTitle: "Projects",
    code: `import SwiftUI

struct Projects: PortfolioSection {
  let intro = "Projects are where I learn, experiment and turn ideas into products."

  let featured: [Project] = [
    Project(
      name: "Pluggy",
      category: "EV Charging",
      stack: ["SwiftUI", "MapKit", "CoreLocation"],
      summary: "A location-based EV charging app for finding nearby stations, filtering by operator, saving favorites, and exploring charging points through a clean mobile experience."
    ),
    Project(
      name: "Moodiary",
      category: "Mood Journal",
      stack: ["SwiftUI", "Firebase"],
      summary: "A calm mood tracking and journaling product that helps users understand emotional patterns through daily entries, statistics, and personal insights."
    ),
    Project(
      name: "ArtifyAI",
      category: "AI Art",
      stack: ["SwiftUI", "CoreML", "Image Processing"],
      summary: "An AI-powered creative app for transforming photos into artistic outputs, combining visual experimentation with a simple product experience."
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Projects</h2>
        <p>Projects are where I learn, experiment and turn ideas into products.</p>
        <div class="project-tile"><strong>Pluggy</strong><p>Location-based EV charging discovery with operator filters and favorites.</p></div>
        <div class="project-tile"><strong>Moodiary</strong><p>Mood tracking and journaling with statistics, insights, and a calm experience.</p></div>
        <div class="project-tile"><strong>ArtifyAI</strong><p>AI-powered visual experimentation for turning photos into artistic outputs.</p></div>
      </div>`
  },
  contact: {
    tab: "Contact.swift",
    crumb: "DilberSah > Profile_Info > Contact.swift > No Selection",
    previewTitle: "Contact",
    code: `import Foundation

struct Contact {
  let message = "If you're building a product, growing a team, or looking for someone who enjoys turning ideas into experiences, I'd love to hear about it."

  let email = "dilber-sah@hotmail.com"
  let github = "github.com/sahdilber"
  let linkedIn = "linkedin.com/in/dilbersah"
  let instagram = "instagram.com/dilbersah"
  let cv = "Dilber-Sah-CV.pdf"
}`,
    preview: `
      <div class="preview-card">
        <h2>Contact</h2>
        <p>If you're building a product, growing a team, or looking for someone who enjoys turning ideas into experiences, I'd love to hear about it.</p>
        <div class="contact-link"><strong>Email</strong><p>dilber-sah@hotmail.com</p></div>
        <div class="contact-link"><strong>LinkedIn</strong><p>linkedin.com/in/dilbersah</p></div>
        <div class="contact-link"><strong>GitHub</strong><p>github.com/sahdilber</p></div>
        <div class="contact-link"><strong>Instagram</strong><p>instagram.com/dilbersah</p></div>
      </div>`
  },
  cv: {
    tab: "CV.pdf",
    crumb: "DilberSah > Assets > CV.pdf > No Selection",
    previewTitle: "CV.pdf",
    code: `import Foundation

struct CurriculumVitae {
  let file = "Dilber-Sah-CV.pdf"
  let owner = "Dilber Şah"
  let role = "iOS & Front-End Developer"
  let action = "Open or download the attached PDF"
}`,
    preview: `
      <div class="preview-card">
        <h2>CV.pdf</h2>
        <p>Dilber Şah · iOS & Front-End Developer</p>
        <div class="project-tile"><strong>Attached File</strong><p>Dilber-Sah-CV.pdf</p></div>
        <a class="preview-link" href="Dilber-Sah-CV.pdf" target="_blank" rel="noopener noreferrer">Open CV</a>
      </div>`
  },
  pluggy: {
    tab: "Pluggy.app",
    crumb: "DilberSah > Featured_Projects > Pluggy.app > No Selection",
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
  let description = [
    "A charging station discovery app developed for electric vehicle users.",
    "It offers a simple, user-centered experience that makes it easier",
    "to find nearby stations, filter by operator, and save favorite charging points."
  ]

  let technologies = ["SwiftUI", "MapKit", "MVVM"]

  let highlights = [
    "EV charging station discovery",
    "Nearby station search",
    "Operator filtering",
    "Favorite charging points",
    "Simple user-centered experience"
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Pluggy</h2>
        <p>A charging station discovery app developed for electric vehicle users. It offers a simple, user-centered experience that makes it easier to find nearby stations, filter by operator, and save favorite charging points.</p>
        <div class="project-tile"><strong>Technologies</strong><p>SwiftUI • MapKit • MVVM</p></div>
        <div class="project-tile"><strong>Session</strong><div class="project-meter" style="--value: 78%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">MapKit</span><span class="pill">MVVM</span></div>
      </div>`
  },
  moodiary: {
    tab: "Moodiary.app",
    crumb: "DilberSah > Featured_Projects > Moodiary.app > No Selection",
    previewTitle: "Moodiary",
    code: `struct MoodiaryApp {
  let purpose = "Meaningful daily mood tracking"
  let description = [
    "A mood tracking app that makes daily emotional check-ins more meaningful.",
    "It helps users observe their habits, goals, and emotional changes over time."
  ]

  let technologies = ["SwiftUI", "Firebase", "Firestore", "MVVM"]

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
        <p>A mood tracking app that makes daily emotional check-ins more meaningful. It helps users observe their habits, goals, and emotional changes over time.</p>
        <div class="project-tile"><strong>Technologies</strong><p>SwiftUI • Firebase • Firestore • MVVM</p></div>
        <div class="project-tile"><strong>Energy</strong><div class="project-meter" style="--value: 64%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">Firebase</span><span class="pill">Firestore</span></div>
      </div>`
  },
  artify: {
    tab: "ArtifyAI.app",
    crumb: "DilberSah > Featured_Projects > ArtifyAI.app > No Selection",
    previewTitle: "ArtifyAI",
    code: `import Vision
import OpenAI

struct ArtifyAI {
  let description = [
    "An experimental iOS app that transforms photos into AI-supported artistic works.",
    "It brings technology and creativity together, allowing users",
    "to explore different visual styles."
  ]

  let technologies = ["SwiftUI", "CoreML", "AI Integration"]

  let pipeline: [CreativeStep] = [
    .photoUpload,
    .aiStyleExploration,
    .creativePreview,
    .exportArtwork
  ]

  func create() async -> Artwork {
    await Studio.render(style: .premium)
  }
}`,
    preview: `
      <div class="preview-card">
        <h2>ArtifyAI</h2>
        <p>An experimental iOS app that transforms photos into AI-supported artistic works. It brings technology and creativity together, allowing users to explore different visual styles.</p>
        <div class="project-tile"><strong>Technologies</strong><p>SwiftUI • CoreML • AI Integration</p></div>
        <div class="project-tile"><strong>Render</strong><div class="project-meter" style="--value: 88%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">CoreML</span><span class="pill">AI Integration</span></div>
      </div>`
  }
};

const filesTr = {
  about: {
    tab: "AboutMe.swift",
    crumb: "DilberSah > Profile_Info > AboutMe.swift > Seçim Yok",
    previewTitle: "Profil Kartı",
    code: `import SwiftUI

struct AboutMe: View {
  let name = "Dilber Şah"
  let role = "iOS & Front-End Developer"
  let location = "İstanbul / Türkiye"

  let summary = [
    "iOS ve Front-End geliştirici.",
    "Kullanıcı ihtiyaçlarını merkeze alan mobil uygulamalar",
    "ve web deneyimleri geliştiriyorum.",
    "SwiftUI, Firebase ve React ile teknik altyapısı güçlü,",
    "sade ve ölçeklenebilir ürünler oluşturmayı hedefliyorum.",
    "Yeni fikirler geliştirmeyi, mevcut ürünleri iyileştirmeyi",
    "ve değer üreten ekiplerle çalışmayı seviyorum."
  ]

  let education = Education(
    school: "Çukurova Üniversitesi",
    degree: "Bilgisayar Mühendisliği Lisans",
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
        <p>iOS ve Front-End geliştirici. Kullanıcı ihtiyaçlarını merkeze alan mobil uygulamalar ve web deneyimleri geliştiriyorum.</p>
        <div class="pill-row">
          <span class="pill">SwiftUI</span>
          <span class="pill">React</span>
          <span class="pill">Product UX</span>
        </div>
        <div class="project-tile">
          <strong>Eğitim</strong>
          <p>Çukurova Üniversitesi · Bilgisayar Mühendisliği · 2020–2025</p>
        </div>
      </div>`
  },
  experience: {
    tab: "Experience.swift",
    crumb: "DilberSah > Profile_Info > Experience.swift > Seçim Yok",
    previewTitle: "Deneyim",
    code: `import Foundation

struct Experience: ProductBuilder {
  let experiences: [ExperienceItem] = [
    ExperienceItem(
      name: "KargoLab",
      summary: "Mobil ve web ürünlerinin geliştirme süreçlerinde görev alıyorum. SwiftUI ile iOS arayüzleri geliştirirken, React tabanlı web projelerinde kullanıcı deneyimi ve kullanılabilirlik odaklı çalışmalar yürütüyorum. Ürünlerin teknik altyapısının yanı sıra tasarım ve etkileşim tarafında da katkı sağlamaya odaklanıyorum."
    ),
    ExperienceItem(
      name: "Eterna Teknoloji",
      summary: "iOS geliştirme süreçlerinde görev aldım. SwiftUI ile kullanıcı arayüzleri geliştirdim, MVVM mimarisiyle çalıştım ve yeniden kullanılabilir bileşenler oluşturdum. Kod kalitesinin artırılması, arayüz iyileştirmeleri ve ekip içi geliştirme süreçlerine katkı sağladım."
    ),
    ExperienceItem(
      name: "Dorasoft",
      summary: "SQL tabanlı ERP sistemi üzerinde geliştirme ve hata ayıklama çalışmalarına katıldım. Veri işleme süreçlerinin iyileştirilmesi, performans problemlerinin tespit edilmesi ve çözülmesi konularında görev aldım. Kurumsal yazılım geliştirme süreçlerini yakından deneyimleme fırsatı buldum."
    ),
    ExperienceItem(
      name: "Teknofest – TripGo",
      summary: "TripGo projesi için ekibi oluşturdum ve takım lideri olarak görev aldım. Projenin planlanması, görev dağılımı, fikir geliştirme ve ürün yönünün belirlenmesi süreçlerini yönettim. Türkiye'deki yerel kültürel noktaları ve keşfedilmeyi bekleyen yerleri kullanıcılarla buluşturmayı amaçlayan bir ürün geliştirdik."
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Deneyim</h2>
        <div class="timeline-item">
          <strong>KargoLab</strong>
          <p>Mobil ve web ürünleri, SwiftUI, React, kullanıcı deneyimi, kullanılabilirlik ve etkileşim odaklı geliştirme.</p>
        </div>
        <div class="timeline-item">
          <strong>Eterna Teknoloji</strong>
          <p>SwiftUI arayüzleri, MVVM mimarisi, yeniden kullanılabilir bileşenler ve arayüz iyileştirmeleri.</p>
        </div>
        <div class="timeline-item">
          <strong>Dorasoft</strong>
          <p>SQL tabanlı ERP geliştirme, hata ayıklama, veri işleme iyileştirmeleri ve performans problemleri.</p>
        </div>
        <div class="timeline-item">
          <strong>Teknofest – TripGo</strong>
          <p>Takım liderliği, planlama, görev dağılımı, ürün yönü ve yerel kültür keşfi odaklı ürün geliştirme.</p>
        </div>
      </div>`
  },
  skills: {
    tab: "Skills.swift",
    crumb: "DilberSah > Profile_Info > Skills.swift > Seçim Yok",
    previewTitle: "Yetenek Matrisi",
    code: `enum SkillGroup: String, CaseIterable {
  case mobile = "Mobile Development"
  case frontend = "Frontend Development"
  case tools = "Tools & Technologies"
  case product = "Product & Design"
}

let skills: [SkillGroup: [String]] = [
  .mobile: ["SwiftUI", "MVVM", "Firebase", "MapKit", "CoreLocation", "CoreML"],
  .frontend: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
  .tools: ["Xcode", "Git", "GitHub", "VS Code", "REST API", "JSON"],
  .product: ["User Flows", "Kullanılabilirlik", "Interface Design", "Visual Thinking"]
]`,
    preview: `
      <div class="preview-card">
        <h2>Yetenekler</h2>
        <div class="skill-grid">
          <span class="skill-chip">Mobile Development</span>
          <span class="skill-chip">Frontend Development</span>
          <span class="skill-chip">Tools & Technologies</span>
          <span class="skill-chip">Product & Design</span>
        </div>
        <div class="project-tile"><strong>Mobile Development</strong><p>SwiftUI, MVVM, Firebase, MapKit, CoreLocation.</p></div>
        <div class="project-tile"><strong>Product & Design</strong><p>Kullanıcı akışları, kullanılabilirlik, responsive arayüzler, görsel detay.</p></div>
      </div>`
  },
  projects: {
    tab: "Projects.swift",
    crumb: "DilberSah > Profile_Info > Projects.swift > Seçim Yok",
    previewTitle: "Projeler",
    code: `import SwiftUI

struct Projects: PortfolioSection {
  let intro = "Projeler öğrendiğim, denediğim ve fikirleri ürüne dönüştürdüğüm yer."

  let featured: [Project] = [
    Project(
      name: "Pluggy",
      category: "Elektrikli Araç Şarj",
      stack: ["SwiftUI", "MapKit", "CoreLocation"],
      summary: "Yakındaki şarj istasyonlarını bulma, operatöre göre filtreleme, favorilere ekleme ve şarj noktalarını temiz bir mobil deneyimle keşfetme ürünü."
    ),
    Project(
      name: "Moodiary",
      category: "Duygu Günlüğü",
      stack: ["SwiftUI", "Firebase"],
      summary: "Günlük kayıtlar, istatistikler ve içgörülerle kullanıcıların duygu alışkanlıklarını zaman içinde anlamasına yardımcı olan sakin bir duygu günlüğü ürünü."
    ),
    Project(
      name: "ArtifyAI",
      category: "AI Sanat",
      stack: ["SwiftUI", "CoreML", "Görüntü İşleme"],
      summary: "Fotoğrafları sanatsal çıktılara dönüştüren, görsel deneyselliği sade bir ürün deneyimiyle birleştiren yapay zeka destekli yaratıcı uygulama."
    )
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Projeler</h2>
        <p>Projeler öğrendiğim, denediğim ve fikirleri ürüne dönüştürdüğüm yer.</p>
        <div class="project-tile"><strong>Pluggy</strong><p>Operatör filtreleri ve favorilerle konum bazlı elektrikli araç şarj keşfi.</p></div>
        <div class="project-tile"><strong>Moodiary</strong><p>İstatistikler, içgörüler ve sakin bir deneyimle duygu takibi ve günlük.</p></div>
        <div class="project-tile"><strong>ArtifyAI</strong><p>Fotoğrafları sanatsal çıktılara dönüştüren AI destekli görsel deney alanı.</p></div>
      </div>`
  },
  contact: {
    tab: "Contact.swift",
    crumb: "DilberSah > Profile_Info > Contact.swift > Seçim Yok",
    previewTitle: "İletişim",
    code: `import Foundation

struct Contact {
  let message = "Bir ürün geliştiriyor, ekip büyütüyor veya fikirleri deneyime dönüştürmeyi seven biriyle çalışmak istiyorsanız duymak isterim."

  let email = "dilber-sah@hotmail.com"
  let github = "github.com/sahdilber"
  let linkedIn = "linkedin.com/in/dilbersah"
  let instagram = "instagram.com/dilbersah"
  let cv = "Dilber-Sah-CV.pdf"
}`,
    preview: `
      <div class="preview-card">
        <h2>İletişim</h2>
        <p>Bir ürün geliştiriyor, ekip büyütüyor veya fikirleri deneyime dönüştürmeyi seven biriyle çalışmak istiyorsanız duymak isterim.</p>
        <div class="contact-link"><strong>E-posta</strong><p>dilber-sah@hotmail.com</p></div>
        <div class="contact-link"><strong>LinkedIn</strong><p>linkedin.com/in/dilbersah</p></div>
        <div class="contact-link"><strong>GitHub</strong><p>github.com/sahdilber</p></div>
        <div class="contact-link"><strong>Instagram</strong><p>instagram.com/dilbersah</p></div>
      </div>`
  },
  cv: {
    tab: "CV.pdf",
    crumb: "DilberSah > Assets > CV.pdf > Seçim Yok",
    previewTitle: "CV.pdf",
    code: `import Foundation

struct CurriculumVitae {
  let dosya = "Dilber-Sah-CV.pdf"
  let sahip = "Dilber Şah"
  let rol = "iOS & Front-End Developer"
  let aksiyon = "Eklenen PDF'i aç veya indir"
}`,
    preview: `
      <div class="preview-card">
        <h2>CV.pdf</h2>
        <p>Dilber Şah · iOS & Front-End Developer</p>
        <div class="project-tile"><strong>Eklenen Dosya</strong><p>Dilber-Sah-CV.pdf</p></div>
        <a class="preview-link" href="Dilber-Sah-CV.pdf" target="_blank" rel="noopener noreferrer">CV'yi Aç</a>
      </div>`
  },
  pluggy: {
    tab: "Pluggy.app",
    crumb: "DilberSah > Featured_Projects > Pluggy.app > Seçim Yok",
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
  let description = [
    "Elektrikli araç kullanıcıları için geliştirilmiş bir şarj istasyonu keşif uygulaması.",
    "Yakındaki istasyonları bulmayı, operatörlere göre filtrelemeyi",
    "ve favori noktaları kaydetmeyi kolaylaştıran sade bir deneyim sunar."
  ]

  let technologies = ["SwiftUI", "MapKit", "MVVM"]

  let highlights = [
    "Şarj istasyonu keşfi",
    "Yakındaki istasyonları bulma",
    "Operatörlere göre filtreleme",
    "Favori noktaları kaydetme",
    "Sade ve kullanıcı odaklı deneyim"
  ]
}`,
    preview: `
      <div class="preview-card">
        <h2>Pluggy</h2>
        <p>Elektrikli araç kullanıcıları için geliştirilmiş bir şarj istasyonu keşif uygulaması. Yakındaki istasyonları bulmayı, operatörlere göre filtrelemeyi ve favori noktaları kaydetmeyi kolaylaştıran sade ve kullanıcı odaklı bir deneyim sunar.</p>
        <div class="project-tile"><strong>Teknolojiler</strong><p>SwiftUI • MapKit • MVVM</p></div>
        <div class="project-tile"><strong>Oturum</strong><div class="project-meter" style="--value: 78%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">MapKit</span><span class="pill">MVVM</span></div>
      </div>`
  },
  moodiary: {
    tab: "Moodiary.app",
    crumb: "DilberSah > Featured_Projects > Moodiary.app > Seçim Yok",
    previewTitle: "Moodiary",
    code: `struct MoodiaryApp {
  let purpose = "Günlük duygu durumlarını anlamlı takip etme"
  let description = [
    "Günlük duygu durumlarını takip etmeyi daha anlamlı hale getiren bir uygulama.",
    "Kullanıcıların alışkanlıklarını, hedeflerini ve duygusal değişimlerini",
    "zaman içinde gözlemleyebilmelerine yardımcı olur."
  ]

  let technologies = ["SwiftUI", "Firebase", "Firestore", "MVVM"]

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
        <p>Günlük duygu durumlarını takip etmeyi daha anlamlı hale getiren bir mood tracking uygulaması. Kullanıcıların alışkanlıklarını, hedeflerini ve duygusal değişimlerini zaman içinde gözlemleyebilmelerine yardımcı olur.</p>
        <div class="project-tile"><strong>Teknolojiler</strong><p>SwiftUI • Firebase • Firestore • MVVM</p></div>
        <div class="project-tile"><strong>Enerji</strong><div class="project-meter" style="--value: 64%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">Firebase</span><span class="pill">Firestore</span></div>
      </div>`
  },
  artify: {
    tab: "ArtifyAI.app",
    crumb: "DilberSah > Featured_Projects > ArtifyAI.app > Seçim Yok",
    previewTitle: "ArtifyAI",
    code: `import Vision
import OpenAI

struct ArtifyAI {
  let description = [
    "Fotoğrafları yapay zekâ destekli sanatsal çalışmalara dönüştüren deneysel bir iOS uygulaması.",
    "Teknoloji ve yaratıcılığı bir araya getirerek kullanıcıların",
    "farklı görsel stilleri keşfetmesini sağlar."
  ]

  let technologies = ["SwiftUI", "CoreML", "AI Integration"]

  let pipeline: [CreativeStep] = [
    .photoUpload,
    .aiStyleExploration,
    .creativePreview,
    .exportArtwork
  ]

  func create() async -> Artwork {
    await Studio.render(style: .premium)
  }
}`,
    preview: `
      <div class="preview-card">
        <h2>ArtifyAI</h2>
        <p>Fotoğrafları yapay zekâ destekli sanatsal çalışmalara dönüştüren deneysel bir iOS uygulaması. Teknoloji ve yaratıcılığı bir araya getirerek kullanıcıların farklı görsel stilleri keşfetmesini sağlar.</p>
        <div class="project-tile"><strong>Teknolojiler</strong><p>SwiftUI • CoreML • AI Integration</p></div>
        <div class="project-tile"><strong>Render</strong><div class="project-meter" style="--value: 88%"><span></span></div></div>
        <div class="pill-row"><span class="pill">SwiftUI</span><span class="pill">CoreML</span><span class="pill">AI Integration</span></div>
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
    iconImage: "images/pluggy.png",
    tone: "pluggy",
    openLabel: "OPEN IN APP STORE",
    about: "A charging station discovery app developed for electric vehicle users. It offers a simple, user-centered experience that makes it easier to find nearby stations, filter by operator, and save favorite charging points.",
    features: ["Nearby Station Search", "Operator Filtering", "Favorite Charging Points", "User-Centered Experience"],
    technologies: ["SwiftUI", "MapKit", "MVVM"]
  },
  moodiary: {
    name: "Moodiary",
    category: "Mood Journal",
    rating: "4.8",
    developer: "Dilber",
    language: "TR + EN",
    iconImage: "images/moodiary.png",
    tone: "moodiary",
    openLabel: "OPEN APP",
    githubUrl: "https://github.com/sahdilber/Mood-journal",
    about: "A mood tracking app that makes daily emotional check-ins more meaningful. It helps users observe their habits, goals, and emotional changes over time.",
    features: ["Mood Tracking", "Habit Observation", "Goals", "Emotional Change Over Time"],
    technologies: ["SwiftUI", "Firebase", "Firestore", "MVVM"]
  },
  artify: {
    name: "ArtifyAI",
    category: "AI Art",
    rating: "4.7",
    developer: "Dilber",
    language: "EN",
    iconImage: "images/artifyAI.png",
    tone: "artify",
    openLabel: "OPEN APP",
    githubUrl: "https://github.com/sahdilber/ArtifyAI-",
    about: "An experimental iOS app that transforms photos into AI-supported artistic works. It brings technology and creativity together, allowing users to explore different visual styles.",
    features: ["AI-Supported Art", "Photo Transformation", "Visual Style Exploration", "Creative Experimentation"],
    technologies: ["SwiftUI", "CoreML", "AI Integration"]
  }
};

const appDetailsTr = {
  pluggy: {
    ...appDetails.pluggy,
    category: "Elektrikli Araç Şarj",
    openLabel: "APP STORE'DA AÇ",
    about: "Elektrikli araç kullanıcıları için geliştirilmiş bir şarj istasyonu keşif uygulaması. Yakındaki istasyonları bulmayı, operatörlere göre filtrelemeyi ve favori noktaları kaydetmeyi kolaylaştıran sade ve kullanıcı odaklı bir deneyim sunar.",
    features: ["Yakındaki İstasyonlar", "Operatör Filtreleme", "Favori Noktalar", "Kullanıcı Odaklı Deneyim"],
    technologies: ["SwiftUI", "MapKit", "MVVM"]
  },
  moodiary: {
    ...appDetails.moodiary,
    category: "Duygu Günlüğü",
    openLabel: "UYGULAMAYI AÇ",
    about: "Günlük duygu durumlarını takip etmeyi daha anlamlı hale getiren bir mood tracking uygulaması. Kullanıcıların alışkanlıklarını, hedeflerini ve duygusal değişimlerini zaman içinde gözlemleyebilmelerine yardımcı olur.",
    features: ["Duygu Takibi", "Alışkanlık Gözlemi", "Hedefler", "Zaman İçinde Duygusal Değişim"]
  },
  artify: {
    ...appDetails.artify,
    category: "AI Sanat",
    openLabel: "UYGULAMAYI AÇ",
    about: "Fotoğrafları yapay zekâ destekli sanatsal çalışmalara dönüştüren deneysel bir iOS uygulaması. Teknoloji ve yaratıcılığı bir araya getirerek kullanıcıların farklı görsel stilleri keşfetmesini sağlar.",
    features: ["AI Destekli Sanat", "Fotoğraf Dönüşümü", "Görsel Stil Keşfi", "Yaratıcı Deney"],
    technologies: ["SwiftUI", "CoreML", "AI Integration"]
  }
};

const PLUGGY_APP_STORE_URL = "https://apps.apple.com/tr/app/pluggy/id6759260025?l=tr";
const MAIL_URL = "mailto:dilber-sah@hotmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/dilbersah/";
const GITHUB_URL = "https://github.com/sahdilber";
const CV_DOWNLOAD_URL = "Dilber-Sah-CV.pdf";

const appGalleries = {
  moodiary: {
    title: "Moodiary",
    eyebrow: "App Preview",
    summary: "Mood tracking, journal flow, calendar insights, and dark-mode screens.",
    folder: "images/moodiary/",
    fallbackImages: [
      "images/moodiary/moodiary-1-login.PNG",
      "images/moodiary/moodiary-2-signup.PNG",
      "images/moodiary/moodiary-3-stats-chart.PNG",
      "images/moodiary/moodiary-4-stats-calendar.PNG",
      "images/moodiary/moodiary-5-profile.PNG",
      "images/moodiary/moodiary-6-goals.PNG",
      "images/moodiary/moodiary-7-new-entry.PNG",
      "images/moodiary/moodiary-8-details.PNG",
      "images/moodiary/moodiary-9-main.PNG",
      "images/moodiary/moodiary-10-calendar.PNG",
      "images/moodiary/moodiary-11-goals2.PNG"
    ]
  },
  artify: {
    title: "ArtifyAI",
    eyebrow: "App Preview",
    summary: "Photo upload, creative style selection, and AI transformation previews.",
    folder: "images/artifyai/",
    fallbackImages: [
      "images/artifyai/artifyai-1-welcome.PNG",
      "images/artifyai/artifyai-2-photo-select.PNG",
      "images/artifyai/artifyai-3-before-after-picasso.PNG",
      "images/artifyai/artifyai-4-before-after-kandinsky.PNG"
    ]
  }
};

const uiText = {
  en: {
    about: "About",
    available: "Open to full-time opportunities, freelance work, and product collaborations.",
    backToDetails: "Back to app details",
    buildSucceeded: "Build Succeeded",
    building: "Building",
    buildingDilber: "Building DilberSah...",
    codeEditor: "Code Editor",
    contactPrompt: "Let’s build something meaningful.",
    debugConsole: "Debug Console",
    developer: "DEVELOPER",
    downloadCv: "Download CV",
    downloadCvAria: "Download Dilber Sah CV",
    features: "Features",
    filter: "Filter",
    filterConsoleAria: "Filter console output",
    language: "LANGUAGE",
    languageSelector: "Language selector",
    loadingScreenshots: "Loading screenshots...",
    openAppFallback: "OPEN APP",
    pressRun: "Press Run to build and launch",
    rating: "RATING",
    role: "iOS & Front-End Developer",
    simulator: "Simulator",
    technologies: "Technologies",
    viewGithub: "VIEW GITHUB",
    waitingToRun: "Waiting to Run",
    logs: [
      "15:01:02 Building DilberSah...",
      "15:01:04 Compiling Swift files (42%)",
      "15:01:05 Compiling Swift files (87%)",
      "15:01:06 Linking...",
      "15:01:07 Build Succeeded"
    ],
    context: {
      about: "Dilber Şah · iOS & Front-End Developer · Istanbul / Turkey",
      experience: "Mobile · Frontend · Product Design · Collaboration",
      skills: "Mobile Development · Frontend Development · Tools & Technologies · Product & Design",
      projects: "Pluggy · Moodiary · ArtifyAI",
      contact: "Email · GitHub · LinkedIn · Instagram · CV",
      pluggy: "Pluggy · Location-based EV charging discovery",
      moodiary: "Moodiary · Mood tracking, journaling, and insights",
      artify: "ArtifyAI · AI creativity and visual experimentation",
      cv: "Dilber Şah CV · iOS & Front-End Developer",
      fallback: "Dilber Şah · Portfolio OS"
    }
  },
  tr: {
    about: "Hakkında",
    available: "Full-time fırsatlar, freelance işler ve ürün iş birliklerine açık.",
    backToDetails: "Uygulama detaylarına dön",
    buildSucceeded: "Build Succeeded",
    building: "Derleniyor",
    buildingDilber: "DilberSah derleniyor...",
    codeEditor: "Kod Editörü",
    contactPrompt: "Let’s build something meaningful.",
    debugConsole: "Debug Konsolu",
    developer: "GELİŞTİRİCİ",
    downloadCv: "CV İndir",
    downloadCvAria: "Dilber Şah CV indir",
    features: "Özellikler",
    filter: "Filtre",
    filterConsoleAria: "Konsol çıktısını filtrele",
    language: "DİL",
    languageSelector: "Dil seçici",
    loadingScreenshots: "Ekran görüntüleri yükleniyor...",
    openAppFallback: "UYGULAMAYI AÇ",
    pressRun: "Derleyip başlatmak için Run'a bas",
    rating: "PUAN",
    role: "iOS & Front-End Developer",
    simulator: "Simülatör",
    technologies: "Teknolojiler",
    viewGithub: "GITHUB'DA GÖR",
    waitingToRun: "Çalıştırma Bekleniyor",
    logs: [
      "15:01:02 DilberSah derleniyor...",
      "15:01:04 Swift dosyaları derleniyor (%42)",
      "15:01:05 Swift dosyaları derleniyor (%87)",
      "15:01:06 Bağlanıyor...",
      "15:01:07 Derleme Başarılı"
    ],
    context: {
      about: "Dilber Şah · iOS & Front-End Developer · İstanbul / Türkiye",
      experience: "Mobile · Frontend · Product Design · Collaboration",
      skills: "Mobile Development · Frontend Development · Tools & Technologies · Product & Design",
      projects: "Pluggy · Moodiary · ArtifyAI",
      contact: "E-posta · GitHub · LinkedIn · Instagram · CV",
      pluggy: "Pluggy · Konum bazlı elektrikli araç şarj keşfi",
      moodiary: "Moodiary · Duygu takibi, günlük ve içgörüler",
      artify: "ArtifyAI · AI yaratıcılık ve görsel deney",
      cv: "Dilber Şah CV · iOS & Front-End Developer",
      fallback: "Dilber Şah · Portfolio OS"
    }
  }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";
if (!["en", "tr"].includes(currentLanguage)) currentLanguage = "en";
let currentFileKey = "about";

function getFiles() {
  return currentLanguage === "tr" ? filesTr : files;
}

function getAppDetails() {
  return currentLanguage === "tr" ? appDetailsTr : appDetails;
}

function t(key) {
  return uiText[currentLanguage][key] || uiText.en[key] || key;
}

function getLogEntries() {
  return uiText[currentLanguage].logs.map((text, index) => ({
    text: index === uiText[currentLanguage].logs.length - 1 ? `${text} ✓` : text,
    type: index === uiText[currentLanguage].logs.length - 1 ? "success" : "idle"
  }));
}

function getBuildDateTime() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const value = (type) => parts.find((part) => part.type === type)?.value || "";
  return `${value("day")}.${value("month")}.${value("year")} at ${value("hour")}:${value("minute")}`;
}

function updateBuildTime() {
  if (!buildTime) return;
  buildTime.textContent = getBuildDateTime();
}

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
const buildTime = document.getElementById("buildTime");
const simulatorPanel = document.getElementById("simulatorPanel");
const launchPlaceholder = document.getElementById("launchPlaceholder");
const launchPlaceholderCopy = launchPlaceholder.querySelector("small");
const launchStatusText = launchPlaceholder.querySelector(".launch-status-pill em");
const appDetailSheet = document.getElementById("appDetailSheet");
const sheetClose = document.getElementById("sheetClose");
const sheetIcon = document.getElementById("sheetIcon");
const sheetName = document.getElementById("sheetName");
const sheetCategory = document.getElementById("sheetCategory");
const sheetRating = document.getElementById("sheetRating");
const sheetDeveloper = document.getElementById("sheetDeveloper");
const sheetLanguage = document.getElementById("sheetLanguage");
const sheetLanguageSecondary = document.getElementById("sheetLanguageSecondary");
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
const dockIcons = [...document.querySelectorAll(".dock-icon")];
const languageButtons = [...document.querySelectorAll(".language-option")];
let buildTimer;
let launchTimer;
let buildLogTimers = [];
let currentDetailKey = "pluggy";
let miniAppRequestId = 0;

const contactActions = {
  email: "mailto:dilber-sah@hotmail.com",
  github: "https://github.com/sahdilber",
  linkedIn: "https://www.linkedin.com/in/dilbersah/",
  instagram: "https://www.instagram.com/dilbersah/"
};

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (!simulatorPanel.classList.contains("launched")) {
    previewTitle.textContent = t("waitingToRun");
  }
}

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
  currentFileKey = key;
  const file = getFiles()[key];
  if (!file) return;
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

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function sortScreenshots(images) {
  return [...images].sort((a, b) => {
    const numberA = Number(a.match(/-(\d+)[^/]*\.(?:png|jpe?g|webp)$/i)?.[1] || 0);
    const numberB = Number(b.match(/-(\d+)[^/]*\.(?:png|jpe?g|webp)$/i)?.[1] || 0);
    return numberA - numberB || a.localeCompare(b);
  });
}

async function discoverGalleryImages(gallery) {
  try {
    const response = await fetch(gallery.folder, { cache: "no-store" });
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("text/html")) {
      throw new Error("Directory listing is not available.");
    }

    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const images = [...doc.querySelectorAll("a[href]")]
      .map((link) => link.getAttribute("href"))
      .filter((href) => href && /\.(png|jpe?g|webp)$/i.test(href))
      .filter((href) => !/cover\.(jpe?g|png|webp)$/i.test(href))
      .map((href) => new URL(href, window.location.origin + gallery.folder).pathname);

    return sortScreenshots([...new Set(images)]);
  } catch {
    return sortScreenshots(gallery.fallbackImages || []);
  }
}

function setTerminalLogs(entries) {
  terminalLog.innerHTML = entries
    .map((entry, index) => `<li class="${entry.type || "idle"}" style="animation-delay: ${index * 42}ms">${escapeHtml(entry.text)}</li>`)
    .join("");
}

function renderFileLogs(key) {
  setTerminalLogs(getLogEntries());
}

function queueBuildLogs() {
  buildLogTimers.forEach((timer) => window.clearTimeout(timer));
  buildLogTimers = [];
  const entries = getLogEntries();
  setTerminalLogs([entries[0]]);

  [
    { delay: 420, ...entries[1] },
    { delay: 880, ...entries[2] },
    { delay: 1320, ...entries[3] },
    { delay: 1840, ...entries[4] }
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
  const file = getFiles()[key];
  if (key === "cv") {
    phoneContext.textContent = uiText[currentLanguage].context.cv;
    previewTitle.textContent = "CV.pdf";
    if (simulatorPanel.classList.contains("launched")) {
      closeAppDetail();
      openMiniApp(key);
    }
    return;
  }
  if (!file) return;

  phoneContext.textContent = uiText[currentLanguage].context[key] || uiText[currentLanguage].context.fallback;

  if (!getAppDetails()[key]) {
    if (simulatorPanel.classList.contains("launched")) {
      closeAppDetail();
      closeMiniApp();
      previewTitle.textContent = file.previewTitle;
    }
    return;
  }

  currentDetailKey = key;
  previewTitle.textContent = getAppDetails()[key].name;
  if (simulatorPanel.classList.contains("launched")) {
    openAppDetail(key);
  }
}

function openAppDetail(key) {
  const detail = getAppDetails()[key];
  if (!detail) return;

  currentDetailKey = key;
  closeMiniApp();
  sheetIcon.className = `sheet-app-icon ${detail.tone}`;
  sheetIcon.innerHTML = detail.iconImage
    ? `<img src="${escapeAttribute(detail.iconImage)}" alt="" />`
    : escapeHtml(detail.icon || "");
  sheetName.textContent = detail.name;
  sheetCategory.textContent = detail.category;
  sheetRating.textContent = detail.rating;
  sheetDeveloper.textContent = detail.developer;
  const languages = detail.language.split("+").map((item) => item.trim()).filter(Boolean);
  sheetLanguage.textContent = languages[0] || detail.language;
  sheetLanguageSecondary.textContent = languages[1] ? `+${languages[1]}` : "";
  sheetAbout.textContent = detail.about;
  renderList(sheetFeatures, detail.features);
  renderList(sheetTech, detail.technologies);
  openAppButton.textContent = detail.openLabel || t("openAppFallback");
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
      <button class="mini-back" type="button" aria-label="${escapeAttribute(t("backToDetails"))}">‹</button>
      <div class="mini-title">
        <span>${escapeHtml(eyebrow)}</span>
        <strong>${escapeHtml(title)}</strong>
      </div>
    </div>`;
}

function galleryLoadingTemplate(key) {
  const gallery = appGalleries[key];
  const eyebrow = currentLanguage === "tr" ? "Uygulama Önizlemesi" : gallery.eyebrow;
  return `
    <div class="gallery-preview ${key}-gallery">
      ${miniTopbar(gallery.title, eyebrow)}
      <div class="gallery-loading" role="status">${escapeHtml(t("loadingScreenshots"))}</div>
    </div>`;
}

function miniAppTemplate(key, galleryImages = []) {
  if (key === "contact") {
    return `
      <div class="contact-preview-screen">
        ${miniTopbar(currentLanguage === "tr" ? "İletişim" : "Contact", currentLanguage === "tr" ? "Profil" : "Profile")}
        <div class="contact-hero mini-card">
          <div class="contact-avatar">D</div>
          <h3>Dilber Şah</h3>
          <p>iOS & Front-End Developer</p>
        </div>
        <div class="contact-list mini-card">
          <a href="${MAIL_URL}"><span>${currentLanguage === "tr" ? "E-posta" : "Email"}</span><strong>dilber-sah@hotmail.com</strong></a>
          <a href="${LINKEDIN_URL}" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>/in/dilbersah</strong></a>
          <a href="${CV_DOWNLOAD_URL}" target="_blank" rel="noopener noreferrer"><span>CV</span><strong>CV.pdf</strong></a>
        </div>
      </div>`;
  }

  if (key === "cv") {
    return `
      <div class="cv-preview-screen">
        ${miniTopbar("CV.pdf", currentLanguage === "tr" ? "Dosya Önizleme" : "Files Preview")}
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
          <span>${currentLanguage === "tr" ? "Deneyim Özeti" : "Experience Summary"}</span>
          <p>${currentLanguage === "tr" ? "SwiftUI uygulamaları, Firebase destekli ürün akışları, React arayüzleri ve rafine UI/UX sistemleri geliştiren Bilgisayar Mühendisliği mezunu." : "Computer Engineering graduate building SwiftUI apps, Firebase-backed product flows, React interfaces, and polished UI/UX systems."}</p>
        </div>
        <a class="cv-download-phone" href="${CV_DOWNLOAD_URL}" target="_blank" rel="noopener noreferrer">
          <span class="download-icon" aria-hidden="true"></span>
          ${escapeHtml(t("downloadCv"))}
        </a>
      </div>`;
  }

  if (appGalleries[key]) {
    const gallery = appGalleries[key];
    const eyebrow = currentLanguage === "tr" ? "Uygulama Önizlemesi" : gallery.eyebrow;
    const images = galleryImages.length ? galleryImages : gallery.fallbackImages;
    return `
      <div class="gallery-preview ${key}-gallery">
        <div class="mini-app-topbar gallery-topbar">
          <button class="mini-back" type="button" aria-label="${escapeAttribute(t("backToDetails"))}">‹</button>
          <span class="gallery-counter" aria-live="polite">1 / ${images.length}</span>
        </div>
        <div class="gallery-frame" aria-label="${escapeHtml(gallery.title)} screenshots">
          <div class="gallery-track">
            ${images.map((src, index) => `
              <figure class="gallery-slide">
                <img src="${escapeAttribute(src)}" alt="${escapeAttribute(gallery.title)} screenshot ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" />
              </figure>
            `).join("")}
          </div>
        </div>
        <div class="gallery-controls" aria-label="Screenshot navigation">
          <button class="gallery-nav gallery-prev" type="button" aria-label="Previous screenshot">‹</button>
          <button class="gallery-nav gallery-next" type="button" aria-label="Next screenshot">›</button>
        </div>
        <div class="gallery-dots" aria-hidden="true">
          ${images.map((_, index) => `<span class="${index === 0 ? "active" : ""}"></span>`).join("")}
        </div>
      </div>`;
  }

  if (key === "pluggy") {
    return `
      <div class="pluggy-preview">
        ${miniTopbar("Pluggy", currentLanguage === "tr" ? "EV haritası" : "EV map")}
        <div class="map-search mini-card">${currentLanguage === "tr" ? "Şarj istasyonu ara" : "Search charging stations"}</div>
        <div class="map-stage">
          <div class="map-road"></div>
          <span class="charging-pin pin-one"></span>
          <span class="charging-pin pin-two"></span>
          <span class="charging-pin pin-three"></span>
        </div>
        <div class="station-card mini-card">
          <div>
            <h3>${currentLanguage === "tr" ? "Zorlu Center İstasyonu" : "Zorlu Center Station"}</h3>
            <p>${currentLanguage === "tr" ? "6 dk uzakta · 4 hızlı şarj noktası uygun · 78 kW" : "6 min away · 4 fast chargers available · 78 kW"}</p>
          </div>
          <button class="favorite-button" type="button" aria-label="Favorite station">♥</button>
        </div>
      </div>`;
  }

  if (key === "moodiary") {
    return `
      <div class="moodiary-preview">
        ${miniTopbar("Moodiary", currentLanguage === "tr" ? "Bugün" : "Today")}
        <div class="mood-card mini-card">
          <h3>${currentLanguage === "tr" ? "Bugünün Duygusu" : "Today's Mood"}</h3>
          <p>${currentLanguage === "tr" ? "Sakin, odaklı, biraz hayalperest." : "Calm, focused, slightly dreamy."}</p>
          <div class="mood-score"><span>8.4</span><small>${currentLanguage === "tr" ? "Dengeli" : "Steady"}</small></div>
        </div>
        <div class="mood-options" aria-label="Mood options">
          <button class="mood-option" type="button">🙂</button>
          <button class="mood-option selected" type="button">😌</button>
          <button class="mood-option" type="button">✨</button>
          <button class="mood-option" type="button">🌙</button>
        </div>
        <div class="journal-preview mini-card">
          <h3>${currentLanguage === "tr" ? "Günlük" : "Journal"}</h3>
          <p>${currentLanguage === "tr" ? "Fikirlerimi düzenleyip sakin bir yürüyüş yaptıktan sonra daha dengeli hissettim. Günün yumuşak bir ritmi vardı." : "I felt more centered after organizing my ideas and taking a quiet walk. The day had a soft rhythm."}</p>
        </div>
        <div class="calendar-strip">
          <div class="calendar-day"><span>${currentLanguage === "tr" ? "Pzt" : "Mon"}</span><strong>6</strong></div>
          <div class="calendar-day"><span>${currentLanguage === "tr" ? "Sal" : "Tue"}</span><strong>7</strong></div>
          <div class="calendar-day active"><span>${currentLanguage === "tr" ? "Çar" : "Wed"}</span><strong>8</strong></div>
          <div class="calendar-day"><span>${currentLanguage === "tr" ? "Per" : "Thu"}</span><strong>9</strong></div>
          <div class="calendar-day"><span>${currentLanguage === "tr" ? "Cum" : "Fri"}</span><strong>10</strong></div>
        </div>
      </div>`;
  }

  return `
    <div class="artify-preview">
      ${miniTopbar("ArtifyAI", "Studio")}
      <div class="photo-placeholder">${currentLanguage === "tr" ? "Fotoğraf Yükle" : "Upload Photo"}</div>
      <div class="style-chips" aria-label="Style choices">
        <button class="style-chip active" type="button">Van Gogh</button>
        <button class="style-chip" type="button">Cyberpunk</button>
        <button class="style-chip" type="button">${currentLanguage === "tr" ? "Sulu Boya" : "Watercolor"}</button>
      </div>
      <div class="before-after">
        <div class="preview-swatch mini-card" style="--swatch: linear-gradient(135deg, #334155, #0f172a)">
          <span>${currentLanguage === "tr" ? "Önce" : "Before"}</span>
        </div>
        <div class="preview-swatch mini-card" style="--swatch: radial-gradient(circle, #f59e0b, #f472b6 48%, #581c87)">
          <span>${currentLanguage === "tr" ? "Sonra" : "After"}</span>
        </div>
      </div>
      <div class="studio-panel mini-card" style="margin-top: 12px; padding: 12px;">
        <h3>${currentLanguage === "tr" ? "Yaratıcı Önizleme" : "Creative Preview"}</h3>
        <p>${currentLanguage === "tr" ? "Portreleri sıcak pembe ve turuncu stüdyo ışıltısıyla etkileyici sanat eserlerine dönüştür." : "Transform portraits into expressive artwork with a warm pink and orange studio glow."}</p>
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
  const galleryCounter = miniAppScreen.querySelector(".gallery-counter");
  const galleryPrev = miniAppScreen.querySelector(".gallery-prev");
  const galleryNext = miniAppScreen.querySelector(".gallery-next");
  const gallerySlides = [...miniAppScreen.querySelectorAll(".gallery-slide")];
  const updateGalleryState = () => {
    if (!galleryFrame) return;
    const width = galleryFrame.clientWidth || 1;
    const activeIndex = Math.max(0, Math.min(gallerySlides.length - 1, Math.round(galleryFrame.scrollLeft / width)));
    galleryDots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
    if (galleryCounter) galleryCounter.textContent = `${activeIndex + 1} / ${gallerySlides.length}`;
  };
  const scrollGallery = (direction) => {
    if (!galleryFrame) return;
    galleryFrame.scrollBy({ left: direction * galleryFrame.clientWidth, behavior: "smooth" });
  };
  galleryFrame?.addEventListener("scroll", updateGalleryState);
  galleryPrev?.addEventListener("click", () => scrollGallery(-1));
  galleryNext?.addEventListener("click", () => scrollGallery(1));
  updateGalleryState();
}

async function openMiniApp(key) {
  const requestId = ++miniAppRequestId;
  currentDetailKey = key;
  closeAppDetail();
  if (appGalleries[key]) {
    miniAppScreen.innerHTML = galleryLoadingTemplate(key);
    miniAppScreen.classList.add("open");
    miniAppScreen.removeAttribute("aria-hidden");
    bindMiniAppInteractions();
    const images = await discoverGalleryImages(appGalleries[key]);
    if (currentDetailKey !== key || requestId !== miniAppRequestId) return;
    miniAppScreen.innerHTML = miniAppTemplate(key, images);
    bindMiniAppInteractions();
    return;
  }

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
  miniAppRequestId++;
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
      window.open(CV_DOWNLOAD_URL, "_blank", "noopener,noreferrer");
      return;
    }
    if (key === "pluggy") {
      renderFile(key);
      previewTitle.textContent = getFiles()[key]?.previewTitle || key;
      openAppDetail(key);
      return;
    }
    if (key === "moodiary" || key === "artify") {
      renderFile(key);
      previewTitle.textContent = getFiles()[key]?.previewTitle || key;
      openAppDetail(key);
      return;
    }
    renderFile(key);
    openAppDetail(key);
  });
});

dockIcons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.dockAction;
    if (action === "app-store") {
      window.open(PLUGGY_APP_STORE_URL, "_blank", "noopener,noreferrer");
      return;
    }
    if (action === "mail") {
      window.location.href = MAIL_URL;
      return;
    }
    if (action === "linkedin") {
      window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
      return;
    }
    if (action === "github") {
      window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
    }
  });
});

sheetClose.addEventListener("click", closeAppDetail);
openAppButton.addEventListener("click", () => openAppAction(currentDetailKey));

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = button.dataset.lang;
    if (!nextLanguage || nextLanguage === currentLanguage) return;
    currentLanguage = nextLanguage;
    localStorage.setItem("portfolioLanguage", currentLanguage);
    applyStaticTranslations();
    statusText.textContent = buildStatus.classList.contains("building") ? t("buildingDilber") : t("buildSucceeded");
    renderFile(currentFileKey);
    if (appDetailSheet.classList.contains("open")) {
      openAppDetail(currentDetailKey);
    }
    if (miniAppScreen.classList.contains("open")) {
      openMiniApp(currentDetailKey);
    }
  });
});

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
  simulatorPanel.classList.add("launching");
  runButton.classList.add("running");
  buildStatus.classList.remove("succeeded");
  buildStatus.classList.add("building");
  previewTitle.textContent = t("building");
  statusDetail.textContent = "iPhone 17 Pro";
  statusText.textContent = t("buildingDilber");
  launchStatusText.textContent = "Building";
  launchPlaceholderCopy.textContent = "Preparing iPhone 17 Pro preview";
  iphone.setAttribute("aria-hidden", "true");
  launchPlaceholder.removeAttribute("aria-hidden");
  queueBuildLogs();

  buildTimer = window.setTimeout(() => {
    runButton.classList.remove("running");
    buildStatus.classList.remove("building");
    buildStatus.classList.add("succeeded");
    statusDetail.textContent = "iPhone 17 Pro";
    statusText.textContent = t("buildSucceeded");
    previewTitle.textContent = "iPhone 17 Pro";
    launchStatusText.textContent = "Ready";
    launchPlaceholderCopy.textContent = t("pressRun");
  }, 2000);

  launchTimer = window.setTimeout(() => {
    simulatorPanel.classList.remove("launching");
    simulatorPanel.classList.add("launched");
    iphone.removeAttribute("aria-hidden");
    launchPlaceholder.setAttribute("aria-hidden", "true");
    iphone.classList.add("running", "run-pulse");
    window.setTimeout(() => {
      iphone.classList.remove("running", "run-pulse");
    }, 920);
  }, 2140);
});

applyStaticTranslations();
statusText.textContent = t("buildSucceeded");
updateBuildTime();
window.setInterval(updateBuildTime, 1000);
renderFile("about");
