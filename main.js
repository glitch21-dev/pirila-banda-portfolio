function handleSend() {
  const msg = document.getElementById('form-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 4000);
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-cell, .contact-info, .contact-form').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});


/* ============================================
   CUSTOM CURSOR + TRAIL
   ============================================ */

const dot  = document.createElement('div');
const ring = document.createElement('div');
dot.className  = 'cursor-dot';
ring.className = 'cursor-ring';
document.body.appendChild(dot);
document.body.appendChild(ring);

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;
let lastTrailTime = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';

  // Trail particles — throttled to every 40ms
  const now = Date.now();
  if (now - lastTrailTime > 40) {
    lastTrailTime = now;
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = mouseX + 'px';
    trail.style.top  = mouseY + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
  }
});

// Ring follows with smooth lag
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Expand cursor on hoverable elements
const hoverTargets = 'a, button, .project-card, .skill-badge, .tag, .btn, .nav-links a, .contact-link';
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.classList.add('hovering');
    ring.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    dot.classList.remove('hovering');
    ring.classList.remove('hovering');
  });
});