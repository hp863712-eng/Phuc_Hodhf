/**
 * ============================================================================
 * NEXUS — BEYOND THE UNKNOWN | CORE JAVASCRIPT
 * Author: Senior Frontend Developer & UI/UX Specialist
 * Project: Đồ án môn Thiết kế Web & Vibe Coding
 * Student: Phúc Hoàng — MSSV: 125000578
 * ============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. KHỞI TẠO THƯ VIỆN AOS (ANIMATE ON SCROLL) AN TOÀN
     -------------------------------------------------------------------------- */
  const initAOS = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic',
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    } else {
      console.warn('AOS library not loaded from CDN. Fallback active: elements displayed normally.');
      // Dự phòng: Đảm bảo toàn bộ phần tử có data-aos không bị ẩn nếu CDN lỗi
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
      });
    }
  };

  initAOS();

  /* --------------------------------------------------------------------------
     2. ĐIỀU HƯỚNG HEADER & MOBILE MENU
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Hiệu ứng đổi màu nền Header khi cuộn trang
  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Kiểm tra ngay khi tải trang

  // Đóng mở Mobile Navigation
  const toggleMobileMenu = (forceClose = false) => {
    if (!mobileToggle || !mainNav) return;
    const isCurrentlyOpen = mainNav.classList.contains('is-open');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    if (shouldOpen) {
      mainNav.classList.add('is-open');
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.setAttribute('aria-label', 'Đóng danh mục điều hướng');
      document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi menu mở
    } else {
      mainNav.classList.remove('is-open');
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'Mở danh mục điều hướng');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  // Tự động đóng menu mobile khi chọn mục liên kết & cập nhật active link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Đóng mobile menu nếu đang mở
      toggleMobileMenu(true);

      // Cập nhật trạng thái active
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Tự động đánh dấu active link theo vị trí cuộn trang (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  /* --------------------------------------------------------------------------
     3. NÚT QUAY LẠI ĐẦU TRANG (BACK TO TOP)
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  const handleBackToTopVisibility = () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0.7';
      backToTopBtn.style.pointerEvents = 'auto';
    }
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  /* --------------------------------------------------------------------------
     4. TRAILER VIDEO MODAL (XEM TRAILER THỰC TẾ)
     -------------------------------------------------------------------------- */
  let lastActiveTrigger = null;

  const trailerModal = document.getElementById('trailer-modal');
  const closeTrailerBtn = document.getElementById('close-trailer-btn');
  const trailerIframe = document.getElementById('trailer-iframe');
  const openTrailerButtons = document.querySelectorAll('.open-trailer-btn');

  // Video trailer sci-fi chất lượng cao (YouTube nocookie embed)
  const TRAILER_VIDEO_URL = 'https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk?autoplay=1&mute=0&rel=0';

  const openTrailerModal = (trigger) => {
    lastActiveTrigger = trigger || document.activeElement;
    if (!trailerModal || !trailerIframe) return;
    trailerIframe.src = TRAILER_VIDEO_URL;
    trailerModal.removeAttribute('hidden');
    // Ép trình duyệt render layout trước khi thêm class hiệu ứng
    requestAnimationFrame(() => {
      trailerModal.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
    if (closeTrailerBtn) closeTrailerBtn.focus();
  };

  const closeTrailerModal = () => {
    if (!trailerModal || !trailerIframe) return;
    trailerModal.classList.remove('is-open');
    // Ngắt luồng video và âm thanh ngay lập tức
    trailerIframe.src = '';
    setTimeout(() => {
      trailerModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
      if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
        lastActiveTrigger.focus();
        lastActiveTrigger = null;
      }
    }, 250);
  };

  openTrailerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTrailerModal(btn);
    });
  });

  if (closeTrailerBtn) {
    closeTrailerBtn.addEventListener('click', closeTrailerModal);
  }

  if (trailerModal) {
    trailerModal.addEventListener('click', (e) => {
      // Đóng khi click ngoài khung modal container
      if (e.target === trailerModal) {
        closeTrailerModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. CLOSED ALPHA ACCESS PASS MODAL (TRẢI NGHIỆM TƯƠNG TÁC THỰC TẾ)
     -------------------------------------------------------------------------- */
  const demoModal = document.getElementById('demo-modal');
  const closeDemoBtn = document.getElementById('close-demo-btn');
  const openDemoButtons = document.querySelectorAll('.open-demo-btn');
  const alphaForm = document.getElementById('alpha-access-form');
  const alphaResultCard = document.getElementById('alpha-result-card');
  const resetTicketBtn = document.getElementById('reset-ticket-btn');

  // Field elements
  const codenameInput = document.getElementById('pilot-codename');
  const emailInput = document.getElementById('pilot-email');
  const platformSelect = document.getElementById('pilot-platform');

  const codenameError = document.getElementById('codename-error');
  const emailError = document.getElementById('email-error');

  const resultCodename = document.getElementById('result-codename');
  const resultPlatform = document.getElementById('result-platform');
  const resultKey = document.getElementById('result-key');
  const ticketUniqueId = document.getElementById('ticket-unique-id');

  const openDemoModal = (trigger) => {
    lastActiveTrigger = trigger || document.activeElement;
    toggleMobileMenu(true); // Đóng mobile drawer nếu đang mở
    if (!demoModal) return;
    demoModal.removeAttribute('hidden');
    requestAnimationFrame(() => {
      demoModal.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
    if (codenameInput) codenameInput.focus();
  };

  const closeDemoModal = () => {
    if (!demoModal) return;
    demoModal.classList.remove('is-open');
    setTimeout(() => {
      demoModal.setAttribute('hidden', '');
      document.body.style.overflow = '';
      if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
        lastActiveTrigger.focus();
        lastActiveTrigger = null;
      }
    }, 250);
  };

  openDemoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDemoModal(btn);
    });
  });

  if (closeDemoBtn) {
    closeDemoBtn.addEventListener('click', closeDemoModal);
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeDemoModal();
      }
    });
  }

  // Xử lý gửi Form đăng ký Alpha Pass
  if (alphaForm) {
    alphaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Codename
      const codenameVal = codenameInput.value.trim();
      const codenameGroup = codenameInput.closest('.form-group');
      if (codenameVal.length < 3) {
        codenameGroup.classList.add('has-error');
        isValid = false;
      } else {
        codenameGroup.classList.remove('has-error');
      }

      // Validate Email
      const emailVal = emailInput.value.trim();
      const emailGroup = emailInput.closest('.form-group');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        emailGroup.classList.add('has-error');
        isValid = false;
      } else {
        emailGroup.classList.remove('has-error');
      }

      if (!isValid) return;

      // Giả lập tạo Access Key lượng tử độc bản
      const randomKeySuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
      const generatedKey = `NXUS-${randomTicketNum}-${randomKeySuffix}-ALPHA`;

      // Cập nhật thẻ kết quả
      if (resultCodename) resultCodename.textContent = codenameVal;
      if (resultPlatform) resultPlatform.textContent = platformSelect.options[platformSelect.selectedIndex].text;
      if (resultKey) resultKey.textContent = generatedKey;
      if (ticketUniqueId) ticketUniqueId.textContent = `#NX-ALPHA-2026-${randomTicketNum}`;

      // Chuyển view
      alphaForm.setAttribute('hidden', '');
      if (alphaResultCard) alphaResultCard.removeAttribute('hidden');

      // Thông báo Toast thành công
      showToast(`Chúc mừng ${codenameVal}! Đã cấp thẻ Alpha Pass thành công.`);
    });
  }

  if (resetTicketBtn) {
    resetTicketBtn.addEventListener('click', () => {
      if (alphaForm) {
        alphaForm.reset();
        alphaForm.removeAttribute('hidden');
      }
      if (alphaResultCard) {
        alphaResultCard.setAttribute('hidden', '');
      }
      if (codenameInput) codenameInput.focus();
    });
  }

  /* --------------------------------------------------------------------------
     6. XỬ LÝ PHÍM ESCAPE ĐÓNG TOÀN BỘ MODAL
     -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (trailerModal && trailerModal.classList.contains('is-open')) {
        closeTrailerModal();
      }
      if (demoModal && demoModal.classList.contains('is-open')) {
        closeDemoModal();
      }
      if (mainNav && mainNav.classList.contains('is-open')) {
        toggleMobileMenu(true);
      }
    }
  });

  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION HELPER
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');

  const showToast = (message, duration = 4000) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, duration);
  };

  /* --------------------------------------------------------------------------
     8. DỰ PHÒNG XỬ LÝ LỖI HÌNH ẢNH (FALLBACK SCI-FI HOLOGRAM SVG)
     -------------------------------------------------------------------------- */
  // Khi hình ảnh ngoài mạng bị lỗi/mất kết nối, tự động thay bằng đồ họa SVG công nghệ
  const generateSvgFallback = (titleText) => {
    const cleanTitle = titleText ? titleText.substring(0, 30) : 'NEXUS ASSET';
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#0A0E1A"/>
        <defs>
          <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.2"/>
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="760" height="460" rx="12" fill="url(#cyber-grad)" stroke="#00E5FF" stroke-width="2" stroke-dasharray="8 6"/>
        <circle cx="400" cy="220" r="60" fill="none" stroke="#00E5FF" stroke-width="3"/>
        <polygon points="400,180 435,240 365,240" fill="none" stroke="#8B5CF6" stroke-width="2.5"/>
        <text x="400" y="320" fill="#F5F7FF" font-family="'Orbitron', sans-serif" font-size="20" font-weight="700" text-anchor="middle" letter-spacing="3">NEXUS SYSTEM ARCHIVE</text>
        <text x="400" y="355" fill="#A5ADC0" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle">${cleanTitle}</text>
      </svg>
    `.trim();
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgCode)}`;
  };

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      if (!this.dataset.fallbackApplied) {
        this.dataset.fallbackApplied = 'true';
        const altText = this.getAttribute('alt') || 'Simulated Hologram';
        this.src = generateSvgFallback(altText);
        this.classList.add('fallback-applied');
      }
    });
  });

  console.log('%c NEXUS — BEYOND THE UNKNOWN ', 'background: #00E5FF; color: #070910; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;');
  console.log('%c System initialized successfully. Student: Phúc Hoàng (125000578) ', 'color: #8B5CF6; font-size: 11px;');
});
