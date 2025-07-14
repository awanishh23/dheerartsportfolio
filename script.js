// Updated Data Structure - Multiple images per category
const galleryCategories = [
  {
    id: 1,
    title: "Paintings",
    category: "Painting",
    description: "A collection of my painting works using various mediums",
    coverImage: "acryliconcanvas.jpeg",
    images: [
      {
        id: 1,
        title: "Fishing Boats - Van Gogh Style",
        medium: "Acrylic on Canvas",
        image: "acryliconcanvas.jpeg",
        description: "A vibrant exploration inspired by Van Gogh's style with bold colors and expressive brushstrokes.",
        year: "2024",
      },
      {
        id: 2,
        title: "Portrait Study",
        medium: "Oil on Canvas",
        image: "portraitoncanvas.jpeg",
        description: "Emotional expression through bold brushstrokes and dynamic color relationships.",
        year: "2023",
      },
      {
        id: 3,
        title: "Abstract Composition",
        medium: "Acrylic on Canvas",
        image: "acryliconcanvas.jpeg",
        description: "An abstract exploration of form and color harmony.",
        year: "2023",
      },
    ],
  },
  {
    id: 2,
    title: "Digital Art",
    category: "Digital Art",
    description: "Contemporary digital artwork exploring modern themes",
    coverImage: "digital.jpeg",
    images: [
      {
        id: 4,
        title: "Digital Dreams",
        medium: "Digital Mixed Media",
        image: "digital.jpeg",
        description: "Contemporary digital artwork exploring the intersection of technology and emotion.",
        year: "2024",
      },
      {
        id: 5,
        title: "Cyber Landscape",
        medium: "Digital Illustration",
        image: "digital.jpeg",
        description: "A futuristic landscape created using digital painting techniques.",
        year: "2024",
      },
    ],
  },
  {
    id: 3,
    title: "Calligraphy",
    category: "Calligraphy",
    description: "Traditional and modern calligraphy works",
    coverImage: "calligraphy.jpeg",
    images: [
      {
        id: 6,
        title: "Traditional Script",
        medium: "Ink on Paper",
        image: "calligraphy.jpeg",
        description: "Organic forms and natural textures combined with traditional calligraphy techniques.",
        year: "2023",
      },
      {
        id: 7,
        title: "Modern Calligraphy",
        medium: "Watercolor & Ink",
        image: "calligraphy.jpeg",
        description: "Contemporary approach to traditional calligraphy art.",
        year: "2024",
      },
    ],
  },
  {
    id: 4,
    title: "Sketches",
    category: "Sketch",
    description: "Collection of sketches and drawings",
    coverImage: "sketch.jpeg",
    images: [
      {
        id: 8,
        title: "Figure Study",
        medium: "Pencil on Paper",
        image: "sketch.jpeg",
        description: "Three-dimensional exploration of organic and geometric forms.",
        year: "2024",
      },
      {
        id: 9,
        title: "Architectural Sketch",
        medium: "Charcoal",
        image: "sketch.jpeg",
        description: "Detailed architectural study focusing on light and shadow.",
        year: "2023",
      },
    ],
  },
  {
    id: 5,
    title: "Teaching Projects",
    category: "Teaching",
    description: "Collaborative works with students",
    coverImage: "student.jpeg",
    images: [
      {
        id: 10,
        title: "Student Collaboration",
        medium: "Community Mural",
        image: "student.jpeg",
        description: "Large-scale mural created with high school students for the school cafeteria.",
        year: "2024",
      },
      {
        id: 11,
        title: "Workshop Results",
        medium: "Mixed Media",
        image: "student.jpeg",
        description: "Collection of works from student workshops and collaborative projects.",
        year: "2024",
      },
    ],
  },
]

// State
let selectedCategory = "All"
let filteredCategories = galleryCategories
let currentGalleryImages = []
let currentImageIndex = 0

// Update categories for filtering
const categories = ["All", "Painting", "Digital Art", "Calligraphy", "Sketch", "Teaching"]

// Data
const education = [
  {
    degree: "Master of Fine Arts (MFA)",
    school: "Banaras Hindu University",
    year: "2018",
    focus:
      "Specialized in Illustration, Art Pedagogy, and Multimedia | Presented research on digital art education |<br> Authored dissertation on the evolution of illustration |",
  },
  {
    degree: "Bachelor of Fine Arts (BFA)",
    school: "Banaras Hindu University",
    year: "2016",
    focus: "Visual Storytelling through Digital and Traditional Art Forms |",
  },
]

const experience = [
  {
    title: "Head of Department (PGT - Fine Arts) ",
    company: "Sapphire International School ",
    duration: "2024 - Present",
    location: "Noida-UP",
    description:
      " Teaching Fine Arts, Digital Design, and Illustration to 200+ students annually across Grades 6–12 <br>Integrate traditional art methods with industry-standard tools like Adobe Creative Suite and CorelDRAW \n| Develop and deliver 30+ structured lesson plans and project-based assessments per academic year \n| Mentor 50+ students yearly in portfolio creation, competition prep, and creative career guidance \n| Organize 5+ annual exhibitions, live workshops, and inter-school art events \n| Lead monthly digital design training sessions, enhancing tech skills and creative confidence in students",
    skills: ["Curriculum Development", "Student Mentorship", "Art History", "Digital Art", "Traditional Media"],
  },
  {
    title: "TGT - Fine Arts (Commercial/ Applied Art) ",
    company: "G.D. Goenka Public School",
    duration: "2019-2024",
    location: "Rohini Sector 22-Delhi",
    description:
      "Teach Fine Arts, Digital Design, Branding, and Illustration to over 200 students annually across Grades 6-12 | Develop and deliver 30+ structured lesson plans, projects, and assessments each year | Mentor more than 50 students annually in portfolio preparation, creative research, and career planning | Organize 5+ exhibitions, workshops, and student-led events, while leading monthly training sessions on Adobe Creative Suite (Photoshop, Illustrator) and CorelDRAW | Conduct over 50 practical sessions in drawing, painting, and composition, and teach core concepts in perspective drawing, digital painting, typography, illustration, and branding fundamentals.",
    skills: ["Mixed Media", "Gallery Exhibitions", "Art Sales", "Commission Work", "Art Curation"],
  },
  {
    title: "Assistant Professor (Adjunct) - (Commercial/ Applied Art) ",
    company: "University Of Delhi",
    duration: "2018-2019",
    location: "Delhi",
    description:
      "Taught art fundamentals to middle college students, organized college art shows, and collaborated with other teachers on interdisciplinary projects.",
    skills: ["Art Fundamentals", "Event Organization", "Digital Art Program", "Interdisciplinary Teaching"],
  },
]

const awards = [
  {
    title: "Galore Award 2024-25",
    organization: "Saphhire International School",
    year: "2024",
    description: "Recognized for innovative teaching methods and student achievement",
  },
  {
    title: "Judge for RANGSAAZ",
    organization: "Decathalon-Rohini",
    year: "2020",
    description: "Contributed to evaluating and encouraging artistic talent as part of the jury team.",
  },
  {
    title: "Applied Arts Competition",
    organization: "Banaras Hindu University",
    year: "2017",
    description: "Acheived top rank among all the participants",
  },
]

// DOM Elements
const educationGrid = document.getElementById("educationGrid")
const awardsGrid = document.getElementById("awardsGrid")
const filterButtons = document.getElementById("filterButtons")
const galleryGrid = document.getElementById("galleryGrid")
const artworkModal = document.getElementById("artworkModal")
const closeModal = document.getElementById("closeModal")
const hamburgerIcon = document.getElementById("hamburgerIcon")
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")

// Hamburger Menu Functions
function toggleMobileMenu() {
  hamburgerIcon.classList.toggle("active")
  mobileMenuOverlay.classList.toggle("active")
  document.body.style.overflow = mobileMenuOverlay.classList.contains("active") ? "hidden" : "auto"
}

function closeMobileMenu() {
  hamburgerIcon.classList.remove("active")
  mobileMenuOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderExperience()
  renderEducation()
  renderAwards()
  renderFilterButtons()
  renderGallery()
  setupEventListeners()
  setupScrollAnimations()
  setupSmoothScrolling()
})

// Render Functions
function renderEducation() {
  educationGrid.innerHTML = education
    .map(
      (edu) => `
        <div class="education-card fade-in">
            <div class="education-header">
                <div>
                    <h3>${edu.degree}</h3>
                    <div class="school">${edu.school}</div>
                    <div class="focus">${edu.focus}</div>
                </div>
                <div class="year-badge">${edu.year}</div>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderExperience() {
  const experienceGrid = document.getElementById("experienceGrid")
  experienceGrid.innerHTML = experience
    .map(
      (exp) => `
        <div class="experience-card fade-in">
          <div class="experience-header">
            <div>
              <h3>${exp.title}</h3>
              <div class="company">${exp.company}</div>
              <div class="duration">${exp.duration} • ${exp.location}</div>
            </div>
          </div>
          <div class="experience-description">
            <p>${exp.description}</p>
          </div>
          <div class="experience-skills">
            ${exp.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
          </div>
        </div>
      `,
    )
    .join("")
}

function renderAwards() {
  awardsGrid.innerHTML = awards
    .map(
      (award) => `
        <div class="award-card fade-in">
            <div class="award-header">
                <div class="award-icon">
                    <i class="fas fa-trophy"></i>
                </div>
                <div class="award-content">
                    <h3>${award.title}</h3>
                    <div class="organization">${award.organization}</div>
                    <div class="description">${award.description}</div>
                    <div class="year-badge">${award.year}</div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function renderFilterButtons() {
  filterButtons.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-btn ${category === selectedCategory ? "active" : ""}" 
                data-category="${category}">
            ${category}
        </button>
    `,
    )
    .join("")
}

function renderGallery() {
  filteredCategories =
    selectedCategory === "All"
      ? galleryCategories
      : galleryCategories.filter((cat) => cat.category === selectedCategory)

  galleryGrid.innerHTML = filteredCategories
    .map(
      (category) => `
        <div class="artwork-card fade-in" data-category-id="${category.id}">
            <div class="artwork-image">
                <img src="${category.coverImage}" alt="${category.title}">
                <div class="image-count">${category.images.length} photos</div>
            </div>
            <div class="artwork-info">
                <h3>${category.title}</h3>
                <div class="medium">${category.description}</div>
                <div class="artwork-meta">
                    <span class="category-badge">${category.category}</span>
                    <span class="artwork-count">${category.images.length} items</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function showCategoryModal(categoryId) {
  const category = galleryCategories.find((cat) => cat.id === Number.parseInt(categoryId))
  if (!category) return

  currentGalleryImages = category.images
  currentImageIndex = 0

  updateModalContent()
  artworkModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function updateModalContent() {
  if (currentGalleryImages.length === 0) return

  const currentImage = currentGalleryImages[currentImageIndex]

  document.getElementById("modalImage").src = currentImage.image
  document.getElementById("modalImage").alt = currentImage.title
  document.getElementById("modalTitle").textContent = currentImage.title
  document.getElementById("modalCategory").textContent =
    galleryCategories.find((cat) => cat.images.some((img) => img.id === currentImage.id))?.category || ""
  document.getElementById("modalYear").textContent = currentImage.year
  document.getElementById("modalMedium").innerHTML = `<strong>Medium:</strong> ${currentImage.medium}`
  document.getElementById("modalDescription").textContent = currentImage.description

  // Update navigation info
  document.getElementById("modalImageCounter").textContent =
    `${currentImageIndex + 1} of ${currentGalleryImages.length}`

  // Update navigation buttons
  const prevBtn = document.getElementById("modalPrevBtn")
  const nextBtn = document.getElementById("modalNextBtn")

  prevBtn.style.display = currentGalleryImages.length > 1 ? "block" : "none"
  nextBtn.style.display = currentGalleryImages.length > 1 ? "block" : "none"

  prevBtn.disabled = currentImageIndex === 0
  nextBtn.disabled = currentImageIndex === currentGalleryImages.length - 1
}

function navigateModal(direction) {
  if (direction === "prev" && currentImageIndex > 0) {
    currentImageIndex--
  } else if (direction === "next" && currentImageIndex < currentGalleryImages.length - 1) {
    currentImageIndex++
  }
  updateModalContent()
}

function hideArtworkModal() {
  artworkModal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Event Listeners
function setupEventListeners() {
  // Hamburger menu
  hamburgerIcon.addEventListener("click", toggleMobileMenu)

  // Close mobile menu when clicking on overlay
  mobileMenuOverlay.addEventListener("click", (e) => {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu()
    }
  })

  // Close mobile menu when clicking on navigation links
  document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Filter buttons
  filterButtons.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      selectedCategory = e.target.dataset.category
      renderFilterButtons()
      renderGallery()
      setupScrollAnimations()
    }
  })

  // Gallery category cards
  galleryGrid.addEventListener("click", (e) => {
    const categoryCard = e.target.closest(".artwork-card")
    if (categoryCard) {
      const categoryId = categoryCard.dataset.categoryId
      showCategoryModal(categoryId)
    }
  })

  // Modal navigation
  document.getElementById("modalPrevBtn").addEventListener("click", () => navigateModal("prev"))
  document.getElementById("modalNextBtn").addEventListener("click", () => navigateModal("next"))

  // Modal close
  closeModal.addEventListener("click", hideArtworkModal)
  artworkModal.addEventListener("click", (e) => {
    if (e.target === artworkModal) {
      hideArtworkModal()
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (artworkModal.classList.contains("active")) {
      if (e.key === "Escape") {
        hideArtworkModal()
      } else if (e.key === "ArrowLeft") {
        navigateModal("prev")
      } else if (e.key === "ArrowRight") {
        navigateModal("next")
      }
    }
    if (mobileMenuOverlay.classList.contains("active") && e.key === "Escape") {
      closeMobileMenu()
    }
  })
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all fade-in and scale-in elements
  document.querySelectorAll(".fade-in, .scale-in").forEach((el) => {
    observer.observe(el)
  })
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Additional utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      closeMobileMenu()
    }
    // Re-setup animations if needed
    setupScrollAnimations()
  }, 250),
)


