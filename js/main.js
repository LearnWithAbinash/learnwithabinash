/**
 * Main JavaScript - Learn With Abinash
 * Handles: Navigation, animations, counters, form, and UI interactions
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────
  // Initialize Lucide Icons
  // ──────────────────────────────────────────────
  function initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // ──────────────────────────────────────────────
  // Header Scroll Effect
  // ──────────────────────────────────────────────
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    function handleScroll() {
      const currentScroll = window.pageYOffset;

      // Add scrolled class for background blur
      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Auto hide/show header on scroll direction (optional for mobile)
      if (window.innerWidth <= 768) {
        if (currentScroll > lastScroll && currentScroll > 200) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // ──────────────────────────────────────────────
  // Mobile Navigation Toggle
  // ──────────────────────────────────────────────
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (!navToggle || !navMenu) return;

    function toggleMenu() {
      const isOpen = navMenu.classList.contains('active');
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      body.classList.toggle('nav-open');

      // Update ARIA
      navToggle.setAttribute('aria-expanded', !isOpen);

      // Animate hamburger to X
      const spans = navToggle.querySelectorAll('span');
      if (spans.length === 3) {
        if (!isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      }
    }

    navToggle.addEventListener('click', toggleMenu);

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
        toggleMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  }

  // ──────────────────────────────────────────────
  // Active Navigation Link Highlighting
  // ──────────────────────────────────────────────
  function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ──────────────────────────────────────────────
  // Scroll Animations (Intersection Observer)
  // ──────────────────────────────────────────────
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .section-header, .feature-card, .course-card, .testimonial-card, .exam-category-card, .step-card, .value-card'
    );

    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el, index) => {
      // Stagger animation delay for card groups
      if (el.classList.contains('feature-card') ||
        el.classList.contains('course-card') ||
        el.classList.contains('testimonial-card') ||
        el.classList.contains('exam-category-card') ||
        el.classList.contains('step-card') ||
        el.classList.contains('value-card')) {
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
      }
      observer.observe(el);
    });
  }

  // ──────────────────────────────────────────────
  // Counter Animation (Hero Stats)
  // ──────────────────────────────────────────────
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number, [data-count]');
    if (counters.length === 0) return;

    const observerOptions = {
      root: null,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    if (!target || isNaN(target)) return;

    const suffix = element.getAttribute('data-suffix') || '';
    const format = element.getAttribute('data-format'); // 'k' for 1.5K style
    const duration = 2000;
    const startTime = Date.now();

    function formatNumber(num) {
      if (format === 'k' && num >= 1000) {
        const k = num / 1000;
        return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'K';
      }
      return num.toLocaleString();
    }

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const current = Math.round(eased * target);

      element.textContent = formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatNumber(target) + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // ──────────────────────────────────────────────
  // Smooth Scroll for Anchor Links
  // ──────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ──────────────────────────────────────────────
  // Contact Form Handler
  // ──────────────────────────────────────────────
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate form submission (replace with actual backend)
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Sending...';
      submitBtn.disabled = true;
      initIcons();

      setTimeout(() => {
        // For now, construct a mailto link as a fallback
        const subject = encodeURIComponent(`New Inquiry from ${data.name} - ${data['training-type'] || 'General'}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nTraining Type: ${data['training-type'] || 'Not specified'}\n\nMessage:\n${data.message}`
        );

        window.location.href = `mailto:Learn.With.Abinash@gmail.com?subject=${subject}&body=${body}`;

        showFormMessage('Thank you for your message! Redirecting to your email client...', 'success');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        initIcons();
        form.reset();
      }, 1000);
    });
  }

  function showFormMessage(message, type) {
    // Remove existing messages
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();

    const msgEl = document.createElement('div');
    msgEl.className = `form-message form-message-${type}`;
    msgEl.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle-2' : 'alert-circle'}"></i>
      <span>${message}</span>
    `;

    const form = document.getElementById('contact-form');
    if (form) {
      form.insertAdjacentElement('afterend', msgEl);
      initIcons();
      setTimeout(() => msgEl.remove(), 5000);
    }
  }

  // ──────────────────────────────────────────────
  // Testimonial Auto-Rotate (Optional)
  // ──────────────────────────────────────────────
  function initTestimonialRotation() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length <= 1) return;

    // Only auto-rotate on mobile where cards are stacked
    if (window.innerWidth > 768) return;

    let currentIndex = 0;
    setInterval(() => {
      cards[currentIndex].classList.remove('testimonial-active');
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add('testimonial-active');
    }, 5000);
  }

  // ──────────────────────────────────────────────
  // Interactive Tech Bubbles (Hero Section)
  // ──────────────────────────────────────────────
  function initParticles() {
    const container = document.getElementById('techBubbles');
    if (!container) return;

    const techItems = [
      // Data Science & BI
      { label: 'Power BI', icon: '📊', color: '#F2C811' },
      { label: 'Python', icon: '🐍', color: '#3776AB' },
      { label: 'SQL', icon: '🗄️', color: '#336791' },
      { label: 'Excel', icon: '📗', color: '#217346' },
      { label: 'Tableau', icon: '📈', color: '#E97627' },
      { label: 'R', icon: '📐', color: '#276DC3' },
      { label: 'DAX', icon: '⚡', color: '#F2C811' },
      { label: 'Power Query', icon: '🔄', color: '#4B8BBE' },
      // Data Engineering
      { label: 'Spark', icon: '🔥', color: '#E25A1C' },
      { label: 'Hadoop', icon: '🐘', color: '#66CCFF' },
      { label: 'Azure', icon: '☁️', color: '#0078D4' },
      { label: 'AWS', icon: '🌩️', color: '#FF9900' },
      { label: 'Databricks', icon: '🧱', color: '#FF3621' },
      { label: 'MongoDB', icon: '🍃', color: '#47A248' },
      { label: 'PostgreSQL', icon: '🐘', color: '#336791' },
      { label: 'Airflow', icon: '🌀', color: '#017CEE' },
      // ML & AI
      { label: 'TensorFlow', icon: '🧠', color: '#FF6F00' },
      { label: 'PyTorch', icon: '🔦', color: '#EE4C2C' },
      { label: 'Scikit-learn', icon: '⚙️', color: '#F7931E' },
      { label: 'Keras', icon: '🔴', color: '#D00000' },
      { label: 'OpenAI', icon: '🤖', color: '#00A67E' },
      { label: 'LangChain', icon: '🔗', color: '#1C3C3C' },
      { label: 'Hugging Face', icon: '🤗', color: '#FFD21E' },
      { label: 'NLP', icon: '💬', color: '#8B5CF6' },
      // Libraries
      { label: 'Pandas', icon: '🐼', color: '#150458' },
      { label: 'NumPy', icon: '🔢', color: '#013243' },
      { label: 'Matplotlib', icon: '📉', color: '#11557C' },
      { label: 'Seaborn', icon: '🎨', color: '#5A9BD5' },
      { label: 'Plotly', icon: '📊', color: '#3F4F75' },
      { label: 'Git', icon: '🔀', color: '#F05032' },
      { label: 'Docker', icon: '🐳', color: '#2496ED' },
      { label: 'MLflow', icon: '📦', color: '#0194E2' },
      { label: 'Jupyter', icon: '📓', color: '#F37626' },
      { label: 'VS Code', icon: '💻', color: '#007ACC' },
      { label: 'Copilot', icon: '✨', color: '#6E40C9' },
      { label: 'Gemini', icon: '💎', color: '#4285F4' },
      { label: 'Claude', icon: '🟠', color: '#D97706' },
      { label: 'XGBoost', icon: '🚀', color: '#189FDD' },
      { label: 'SSIS', icon: '📦', color: '#CC2936' },
      { label: 'SSRS', icon: '📄', color: '#CC2936' },
    ];

    // Mouse tracking for interactivity
    let mouseX = -1000, mouseY = -1000;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    container.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    // Bubble state
    const bubbles = [];
    const bubbleCount = Math.min(techItems.length, 35);
    const shuffled = techItems.sort(() => Math.random() - 0.5).slice(0, bubbleCount);

    shuffled.forEach((tech, i) => {
      const el = document.createElement('div');
      el.className = 'tech-bubble';
      el.innerHTML = `<span class="tech-bubble-icon">${tech.icon}</span><span class="tech-bubble-label">${tech.label}</span>`;

      // Random starting position & speed
      const size = 0.6 + Math.random() * 0.5; // scale factor
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const speedX = (Math.random() - 0.5) * 0.3;
      const speedY = (Math.random() - 0.5) * 0.2 - 0.05; // slight upward drift
      const baseOpacity = 0.15 + Math.random() * 0.35;

      el.style.cssText = `
        left: ${x}%;
        top: ${y}%;
        transform: scale(${size});
        opacity: ${baseOpacity};
        --bubble-color: ${tech.color};
        animation-delay: ${i * -0.8}s;
      `;

      container.appendChild(el);
      bubbles.push({ el, x, y, speedX, speedY, size, baseOpacity, origSpeedX: speedX, origSpeedY: speedY });
    });

    // Animate bubbles
    function animateBubbles() {
      const containerW = container.offsetWidth;
      const containerH = container.offsetHeight;

      bubbles.forEach(b => {
        // Base movement
        b.x += b.speedX;
        b.y += b.speedY;

        // Wrap around edges
        if (b.x > 105) b.x = -5;
        if (b.x < -5) b.x = 105;
        if (b.y > 105) b.y = -5;
        if (b.y < -5) b.y = 105;

        // Mouse repel effect
        const bxPx = (b.x / 100) * containerW;
        const byPx = (b.y / 100) * containerH;
        const dx = bxPx - mouseX;
        const dy = byPx - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;

        let extraX = 0, extraY = 0;
        let glowOpacity = b.baseOpacity;

        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * 2;
          extraX = (dx / dist) * force;
          extraY = (dy / dist) * force;
          glowOpacity = Math.min(b.baseOpacity + 0.3, 0.85);
        }

        b.el.style.left = (b.x + extraX) + '%';
        b.el.style.top = (b.y + extraY) + '%';
        b.el.style.opacity = glowOpacity;
      });

      requestAnimationFrame(animateBubbles);
    }

    requestAnimationFrame(animateBubbles);

    // Also create small background sparkle particles
    for (let i = 0; i < 25; i++) {
      const spark = document.createElement('div');
      spark.className = 'tech-sparkle';
      const size = 2 + Math.random() * 4;
      spark.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(37, 99, 235, ${0.1 + Math.random() * 0.2});
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: sparkleFloat ${8 + Math.random() * 12}s ease-in-out infinite;
        animation-delay: ${Math.random() * -10}s;
      `;
      container.appendChild(spark);
    }
  }

  // ──────────────────────────────────────────────
  // Back to Top Button
  // ──────────────────────────────────────────────
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '<i data-lucide="chevron-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    btn.title = 'Back to top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    initIcons();
  }

  // ──────────────────────────────────────────────
  // Lazy Loading Images
  // ──────────────────────────────────────────────
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ──────────────────────────────────────────────
  // Tech Stack Bar Animation
  // ──────────────────────────────────────────────
  function initTechBarScroll() {
    const techBar = document.querySelector('.tech-bar-track');
    if (!techBar) return;

    // Duplicate items for infinite scroll effect
    const items = techBar.innerHTML;
    techBar.innerHTML = items + items;
  }

  // ──────────────────────────────────────────────
  // CSS Injection for Dynamic Styles
  // ──────────────────────────────────────────────
  function injectDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Animate In */
      .fade-in, .slide-in-left, .slide-in-right, .scale-in,
      .feature-card, .course-card, .testimonial-card, 
      .exam-category-card, .step-card, .value-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .slide-in-left {
        transform: translateX(-50px);
      }
      
      .slide-in-right {
        transform: translateX(50px);
      }
      
      .scale-in {
        transform: scale(0.9);
      }
      
      .animate-in {
        opacity: 1 !important;
        transform: translate(0, 0) scale(1) !important;
      }
      
      /* Back to Top */
      .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--primary, #2563eb);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      }
      
      .back-to-top:hover {
        background: var(--primary-dark, #1d4ed8);
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
      }
      
      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .back-to-top svg {
        width: 20px;
        height: 20px;
      }
      
      /* Spinner */
      .spin {
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }
      
      /* Form Message */
      .form-message {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.25rem;
        border-radius: 0.75rem;
        margin-top: 1rem;
        font-size: 0.9rem;
        animation: slideDown 0.3s ease;
      }
      
      .form-message svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      
      .form-message-success {
        background: #ecfdf5;
        color: #065f46;
        border: 1px solid #a7f3d0;
      }
      
      .form-message-error {
        background: #fef2f2;
        color: #991b1b;
        border: 1px solid #fecaca;
      }
      
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Notification */
      .notification {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 10000;
        background: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        padding: 1rem 1.5rem;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        max-width: 400px;
      }
      
      .notification.show {
        transform: translateX(0);
      }
      
      .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .notification-content svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      
      .notification-warning {
        border-left: 4px solid #f59e0b;
      }
      
      .notification-warning svg {
        color: #f59e0b;
      }
      
      .notification-info {
        border-left: 4px solid #2563eb;
      }
      
      .notification-info svg {
        color: #2563eb;
      }
      
      /* Nav Open - Body Lock */
      body.nav-open {
        overflow: hidden;
      }
      
      /* Section header animate */
      .section-header {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .section-header.animate-in {
        opacity: 1;
        transform: translateY(0);
      }

      /* Header transition */
      .header {
        transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }

  // ──────────────────────────────────────────────
  // Initialize Everything
  // ──────────────────────────────────────────────
  function init() {
    injectDynamicStyles();
    initIcons();
    initHeader();
    initMobileNav();
    initActiveNav();
    initScrollAnimations();
    initCounterAnimation();
    initSmoothScroll();
    initContactForm();
    initParticles();
    initBackToTop();
    initLazyLoading();
    initTechBarScroll();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
