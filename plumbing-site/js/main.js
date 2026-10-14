// Mobile nav toggle + simple form handling
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
      toggle.textContent = expanded ? '✕' : '☰';
    });

    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  // Simple contact form feedback (no backend – shows success message)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = document.getElementById('form-message');
      if (msg) {
        msg.textContent = 'Thank you! We received your request and will contact you shortly.';
        msg.style.display = 'block';
        form.reset();
      }
    });
  }
});
