/* Enhanced font imports for better readability */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* CSS Variables for theming */
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
  --code-bg: #1e1e2e;
  --particle-color: #475569;
}

.skills-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  font-family: var(--primary-font);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
}

/* Ensure proper mobile scrolling */
@media (max-width: 768px) {
  html, body {
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
    -webkit-overflow-scrolling: touch; /* iOS smooth scrolling */
  }
}

/* 3D Robot positioning */
.skills-page .spline-scene {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  z-index: 10;
  animation: fadeSlideIn 2s ease forwards;
}

/* Main heading */
.skills-page .intro-heading {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  animation: fadeSlideIn 1.5s ease forwards;
  z-index: 5;
  position: relative;
  max-width: calc(100% - 320px);
}

.skills-page .intro-heading span {
  color: red;
  background-size: 200% 200%;
  font-size: 5rem;
  animation: gradientShift 3s ease-in-out infinite;
}

/* Code Animation - Bottom Right Corner */
.skills-page .code-animation {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 420px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 8;
  animation: slideInFromLeft 1s ease 2s both;
}

.skills-page .code-animation .code-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background: linear-gradient(135deg, #5a5858, #c1d6d5);
  color: rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--primary-font);
}

.skills-page .code-animation .code-header .window-controls {
  display: flex;
  gap: 0.4rem;
}

.skills-page .code-animation .code-header .window-controls .control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.skills-page .code-animation .code-header .window-controls .control.red {
  background: #ff3126;
}

.skills-page .code-animation .code-header .window-controls .control.yellow {
  background: #f8b118;
}

.skills-page .code-animation .code-header .window-controls .control.green {
  background: #0fb62b;
}

.skills-page .code-animation .code-header .file-name {
  font-family: var(--primary-font);
  font-weight: 500;
}

.skills-page .code-animation .code-content {
  padding: 1.2rem;
  height: calc(100% - 60px);
  overflow: hidden;
  background: #484849;
}

.skills-page .code-animation .code-content pre {
  margin: 0;
  font-family: var(--primary-font);
  font-size: 0.9rem;
  line-height: 1.8;
  color: #eee;
  font-weight: 400;
}

.skills-page .code-animation .code-content pre .javascript {
  color: #ffe100;
}

.skills-page .code-animation .code-content pre .python {
  color: #4584b6;
}

.skills-page .code-animation .code-content pre .cursor {
  animation: blink 1s infinite;
  color: var(--accent-color);
  font-weight: bold;
}

/* Languages Section */
.skills-page .languages-section {
  margin: 2rem 7rem;
  display: flex;
  justify-content: left;
  animation: fadeInUp 1s ease 0.5s both;
  flex: 1;
  align-items: center;
}

.skills-page .languages-section .languages-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
}

.skills-page .languages-section .languages-grid .language-card {
  height: 140px;
  perspective: 1000px;
  animation: cardSlideIn 0.8s ease forwards;
  opacity: 0;
}

.skills-page .languages-section .languages-grid .language-card .card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.skills-page .languages-section .languages-grid .language-card .card-inner:hover {
  transform: rotateY(180deg);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-front,
.skills-page .languages-section .languages-grid .language-card .card-inner .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 8px 25px var(--shadow-color);
  transition: all 0.3s ease;
  font-family: var(--primary-font);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-front {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-front:hover {
  border-color: var(--hover-color);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-front .lang-image {
  width: 40px;
  height: 40px;
  margin-bottom: 0.8rem;
  object-fit: contain;
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-front h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color);
  font-family: var(--primary-font);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-back {
  background: linear-gradient(135deg, var(--card-bg), var(--hover-color, #4f46e5));
  transform: rotateY(180deg);
  border: 2px solid var(--hover-color, #4f46e5);
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-back p {
  margin-bottom: 1rem;
  color: white;
  font-weight: 500;
  font-family: var(--primary-font);
  font-size: 0.9rem;
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-back .expertise-level {
  width: 80%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.skills-page .languages-section .languages-grid .language-card .card-inner .card-back .expertise-level .level-bar {
  height: 100%;
  width: 85%;
  background: white;
  border-radius: 2px;
  animation: fillBar 2s ease-in-out;
}

/* Jobs Section */
.skills-page .jobs-section {
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-left: -30rem;
  display: flex;
  justify-content: center;
  animation: fadeInUp 1s ease 1s both;
}

.skills-page .jobs-section .jobs-container {
  max-width: 1000px;
  width: 100%;
  text-align: center;
}

.skills-page .jobs-section .jobs-container h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--text-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--primary-font);
}

.skills-page .jobs-section .jobs-container .jobs-unified-card {
  background: var(--card-bg);
  border: 2px solid var(--accent-color);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 15px 35px var(--shadow-color);
  animation: jobCardSlideIn 0.8s ease forwards;
  opacity: 0;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item {
  position: relative;
  margin: 1.5rem 0;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item:first-child {
  margin-top: 0;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item:last-child {
  margin-bottom: 0;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content {
  text-align: left;
  padding: 0 1rem;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.8rem;
  font-family: var(--primary-font);
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content p {
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  font-size: 1rem;
  font-family: var(--primary-font);
  font-weight: 400;
}

.skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff4444, transparent);
  margin: 2rem 1rem;
  border-radius: 1px;
  box-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
}

/* Floating Particles */
.skills-page .particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.skills-page .particles .particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--particle-color);
  border-radius: 50%;
  animation: floatUp linear infinite;
  opacity: 0.7;
}

.skills-page .particles .explosive-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 50%;
  animation: explode linear infinite;
  opacity: 0;
}

.skills-page .particles .explosive-particle::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  animation: sparkle 0.3s ease-out;
}

/* Animations */
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes explode {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  20% {
    opacity: 1;
    transform: scale(1) rotate(90deg);
  }
  40% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
  }
  60% {
    opacity: 0.8;
    transform: scale(2) rotate(270deg);
  }
  80% {
    opacity: 0.3;
    transform: scale(3) rotate(360deg);
  }
  100% {
    opacity: 0;
    transform: scale(4) rotate(450deg);
  }
}

@keyframes sparkle {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.8);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 107, 107, 0.4);
  }
  100% {
    box-shadow: 0 0 40px 20px rgba(255, 107, 107, 0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px) rotateX(10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

@keyframes jobCardSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

@keyframes fillBar {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .skills-page .code-animation {
    width: 350px;
    height: 280px;
    bottom: 1rem;
    right: 1rem;
  }

  .skills-page .languages-section .languages-grid {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: 1.2rem;
  }

  .skills-page .languages-section .languages-grid .language-card {
    height: 120px;
  }
}

@media (max-width: 768px) {
  .skills-page {
    padding: 1rem;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  }
  
  /* Ensure body and html allow scrolling */
  html, body {
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
  }
}

@media (max-width: 768px) {
  .skills-page {
    padding: 1rem;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: block; /* Change from flex to block for better mobile flow */
  }

  /* Remove fixed positioning for mobile - make it relative and centered */
  .skills-page .spline-scene {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 1rem auto;
    top: auto;
    right: auto;
  }

  .skills-page .intro-heading {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    max-width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
    display: block;
    width: 100%;
  }

  /* Code animation to bottom center on mobile */
  .skills-page .code-animation {
    position: relative;
    width: 100%;
    max-width: 350px;
    height: 250px;
    margin: 2rem auto 1rem;
    bottom: auto;
    right: auto;
    display: block;
  }

  .skills-page .languages-section {
    margin: 1.5rem 0;
    display: block;
    width: 100%;
  }

  .skills-page .languages-section .languages-grid {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 1rem;
    margin: 0 auto;
    max-width: 100%;
  }

  .skills-page .languages-section .languages-grid .language-card {
    height: 110px;
  }

  .skills-page .languages-section .languages-grid .language-card .card-inner .card-front,
  .skills-page .languages-section .languages-grid .language-card .card-inner .card-back {
    padding: 0.8rem;
  }

  .skills-page .languages-section .languages-grid .language-card .card-inner .card-front .lang-image {
    width: 32px;
    height: 32px;
    margin-bottom: 0.5rem;
  }

  .skills-page .languages-section .languages-grid .language-card .card-inner .card-front h3 {
    font-size: 1.1rem;
  }

  .skills-page .jobs-section {
    margin: 2rem 0;
    margin-left: 0;
    display: block;
    width: 100%;
    position: relative;
  }

  .skills-page .jobs-section .jobs-container {
    width: 100%;
    max-width: 100%;
  }

  .skills-page .jobs-section .jobs-container h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card {
    padding: 1.5rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item {
    margin: 1rem 0;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content h3 {
    font-size: 1.2rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content p {
    font-size: 0.9rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-divider {
    margin: 1.5rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .skills-page {
    padding: 0.5rem;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    display: block;
  }
  
  .skills-page .spline-scene {
    width: 140px;
    height: 140px;
  }

  .skills-page .intro-heading {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  .skills-page .code-animation {
    max-width: 320px;
    height: 220px;
  }

  .skills-page .code-animation .code-content {
    padding: 1rem;
  }

  .skills-page .code-animation .code-content pre {
    font-size: 0.8rem;
    line-height: 1.6;
  }

  .skills-page .languages-section .languages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .skills-page .languages-section .languages-grid .language-card {
    height: 100px;
  }

  .skills-page .languages-section .languages-grid .language-card .card-inner .card-front .lang-image {
    width: 28px;
    height: 28px;
    margin-bottom: 0.3rem;
  }

  .skills-page .languages-section .languages-grid .language-card .card-inner .card-front h3 {
    font-size: 0.8rem;
  }

  .skills-page .jobs-section .jobs-container h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card {
    padding: 1rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item {
    margin: 0.8rem 0;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content h3 {
    font-size: 1rem;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-content p {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  .skills-page .jobs-section .jobs-container .jobs-unified-card .job-item .job-divider {
    margin: 1rem 0.3rem;
    height: 1.5px;
  }
}
