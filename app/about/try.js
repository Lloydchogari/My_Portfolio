// --- skills.scss ---

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

// CSS Variables for theming
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --card-bg: #ffffff;
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --accent-color: #00e0ff;
  --code-bg: #f1f5f9;
  --particle-color: #cbd5e1;
  --primary-font: 'JetBrains Mono', 'Monaco', 'Consolas', monospace;
}

[data-theme="dark"], .dark {
  --bg-color: #000000;
  --text-color: #ffffff;
  --card-bg: #000000;
  --border-color: #334155;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --code-bg: #000000;
  --particle-color: #475569;
}

body {
  overflow: auto;
  font-family: var(--primary-font);
}

// --- Main skills page container ---
.skills-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 2rem;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; 
  overflow-y: auto;

  // (Your .spline-scene, .intro-heading, .code-animation, .languages-section, .jobs-section, .particles styles etc unchanged)
  // ... [KEEP all your large/structural desktop styles here as they are]
}

// --- Keyframe animations ---
// (Keep all your animations declarations as they are below)
// ... [UNCHANGED]

// --- Media Queries (for larger screens) ---
// Place all your breakpoints for desktops and tablets above 768px here, same as before.
// ... [UNCHANGED]

// --- MOBILE RESPONSIVENESS FIXES: Place at the END of the file for highest specificity ---

@media (max-width: 768px) {
  // Allow html and body to expand naturally
  html, body {
    height: auto !important;
    min-height: 100vh !important;
    overflow-y: auto !important;
  }

  .skills-page {
    height: auto !important;
    min-height: 100vh !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    padding: 1rem !important;
  }

  // OVERRIDE fixed/absolute elements so they contribute to scroll height on mobile
  .skills-page .code-animation,
  .skills-page .spline-scene,
  .skills-page .particles,
  .skills-page .particles .particle,
  .skills-page .particles .explosive-particle {
    position: relative !important;
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;
    margin: 0 !important;
    z-index: auto !important;
  }

  // Hide or resize large floating elements if desired on mobile
  .skills-page .spline-scene {
    display: none !important;
  }

  // You may want to also adjust or hide other elements on small screens below
  // ... (keep your mobile-friendly grid/typography changes etc as before)
}

// For smallest screens
@media (max-width: 480px) {
  .skills-page {
    padding: 0.5rem !important;
    // ...any additional tweaks wanted for extra small screens
  }
}

// --- END ---

// (Keep your languages, jobs, animation, etc. component styles as above)
