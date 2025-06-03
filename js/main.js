console.log('Main.js loaded');

// Scroll-triggered fade-in animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-down');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Simple testimonials slider (auto-scroll and swipe)
const slider = document.querySelector('.testimonials-slider');
if (slider) {
  let isDown = false, startX, scrollLeft;
  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
  // Auto-scroll
  setInterval(() => {
    slider.scrollLeft += 320;
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }, 4000);
}

// Language switching logic
const translations = {
  ro: {
    home: 'Acasă', about: 'Despre Noi', products: 'Produse/Servicii', testimonials: 'Testimoniale', blog: 'Blog', contact: 'Contact',
    heroTitle: 'Împuternicim afacerea ta cu soluții inovatoare', heroDesc: 'Ajutăm companiile să crească prin tehnologie de ultimă generație și consultanță de specialitate.', cta: 'Începe acum',
    aboutTitle: 'Despre Noi', aboutDesc: 'Fondată în 2010, <strong>Numele Companiei</strong> este dedicată furnizării de soluții digitale excepționale care stimulează succesul afacerii.', mission: 'Misiunea noastră este să împuternicim organizațiile prin tehnologie, inovație și integritate.', team: 'Echipa Noastră', achievements: 'Realizări & Premii', iso: 'Certificare ISO 9001', best: 'Premiul Best Startup 2023', productsTitle: 'Produsele & Serviciile Noastre', cloud: 'Soluții Cloud', cloudDesc: 'Infrastructură cloud scalabilă, sigură și fiabilă pentru afacerea ta.', consulting: 'Consultanță', consultingDesc: 'Consultanță de specialitate pentru optimizarea proceselor și tehnologiilor de business.', caseStudies: 'Studii de Caz', acme: 'Acme Corp', acmeDesc: 'Eficiență crescută cu 40% prin sistemul nostru ERP personalizat.', testimonialsTitle: 'Ce spun clienții noștri', testimonial1: '"Servicii și suport excepțional!"', testimonial2: '"Colaborare excelentă și rezultate peste așteptări!"', testimonialAuthor: '- John Smith, CTO, BigCo', testimonial2Author: '- Maria Popescu, CEO, Client2', blogTitle: 'Informații & Noutăți', blogPost: '5 Tendințe în Tehnologia de Afaceri', blogDesc: 'Rămâi în față cu cele mai noi perspective din tehnologia de afaceri...', readMore: 'Citește mai mult', contactTitle: 'Contactează-ne', name: 'Numele tău', email: 'Emailul tău', phone: 'Telefon (opțional)', message: 'Mesajul tău', send: 'Trimite mesajul', emailInfo: 'Email:', phoneInfo: 'Telefon:', addressInfo: 'Adresă:', address: 'Str. Business 123, Oraș, Țară', privacy: 'Politica de Confidențialitate', terms: 'Termeni și Condiții', copyright: '&copy; 2024 Numele Companiei. Toate drepturile rezervate.',
    galleryTitle: 'Galerie Foto',
    galleryAlt1: 'Exteriorul biroului',
    galleryAlt2: 'Echipa la lucru',
    galleryAlt3: 'Spațiu modern de lucru',
    galleryAlt4: 'Eveniment de afaceri',
    galleryAlt5: 'Interacțiune cu clientul',
    teamRole1: 'CEO – Lider vizionar cu peste 20 de ani experiență în tehnologie.',
    teamRole2: 'CTO – Expert în soluții de afaceri scalabile.',
    contactInfoEmail: 'Email:',
    contactInfoPhone: 'Telefon:',
    contactInfoAddress: 'Adresă:',
    thankYouTitle: 'Mulțumim pentru mesaj!',
    thankYouText: 'Mesajul tău a fost trimis cu succes. Vom reveni cu un răspuns cât mai curând posibil.',
    contactFormName: 'Numele tău',
    contactFormEmail: 'Emailul tău',
    contactFormPhone: 'Telefon (opțional)',
    contactFormMessage: 'Mesajul tău',
    contactFormButton: 'Trimite mesajul'
  },
  en: {
    home: 'Home', about: 'About Us', products: 'Products/Services', testimonials: 'Testimonials', blog: 'Blog', contact: 'Contact',
    heroTitle: 'Empowering Your Business with Innovative Solutions', heroDesc: 'We help companies grow with cutting-edge technology and expert consulting.', cta: 'Get Started',
    aboutTitle: 'About Us', aboutDesc: 'Founded in 2010, <strong>Company Name</strong> is dedicated to delivering exceptional digital solutions that drive business success.', mission: 'Our mission is to empower organizations through technology, innovation, and integrity.', team: 'Meet the Team', achievements: 'Achievements & Awards', iso: 'ISO 9001 Certified', best: '2023 Best Startup Award', productsTitle: 'Our Products & Services', cloud: 'Cloud Solutions', cloudDesc: 'Scalable, secure, and reliable cloud infrastructure for your business.', consulting: 'Consulting', consultingDesc: 'Expert advice to optimize your business processes and technology stack.', caseStudies: 'Case Studies', acme: 'Acme Corp', acmeDesc: 'Increased efficiency by 40% with our custom ERP system.', testimonialsTitle: 'What Our Clients Say', testimonial1: '"Outstanding service and support!"', testimonial2: '"Excellent collaboration and results beyond expectations!"', testimonialAuthor: '- John Smith, CTO, BigCo', testimonial2Author: '- Maria Popescu, CEO, Client2', blogTitle: 'Insights & News', blogPost: '5 Trends Shaping the Future of Business Technology', blogDesc: 'Stay ahead with the latest insights in business technology...', readMore: 'Read More', contactTitle: 'Contact Us', name: 'Your Name', email: 'Your Email', phone: 'Your Phone (optional)', message: 'Your Message', send: 'Send Message', emailInfo: 'Email:', phoneInfo: 'Phone:', addressInfo: 'Address:', address: '123 Business Rd, City, Country', privacy: 'Privacy Policy', terms: 'Terms of Service', copyright: '&copy; 2024 Company Name. All rights reserved.',
    galleryTitle: 'Photo Gallery',
    galleryAlt1: 'Business Office Exterior',
    galleryAlt2: 'Team Working Together',
    galleryAlt3: 'Modern Workspace',
    galleryAlt4: 'Business Event',
    galleryAlt5: 'Customer Interaction',
    teamRole1: 'CEO – Visionary leader with over 20 years of experience in technology.',
    teamRole2: 'CTO – Expert in scalable business solutions.',
    contactInfoEmail: 'Email:',
    contactInfoPhone: 'Phone:',
    contactInfoAddress: 'Address:',
    thankYouTitle: 'Thank you for your message!',
    thankYouText: 'Your message has been sent successfully. We will get back to you as soon as possible.',
    contactFormName: 'Your Name',
    contactFormEmail: 'Your Email',
    contactFormPhone: 'Your Phone (optional)',
    contactFormMessage: 'Your Message',
    contactFormButton: 'Send Message'
  },
  hu: {
    home: 'Főoldal', about: 'Rólunk', products: 'Termékek/Szolgáltatások', testimonials: 'Vélemények', blog: 'Blog', contact: 'Kapcsolat',
    heroTitle: 'Vállalkozását innovatív megoldásokkal erősítjük', heroDesc: 'Segítünk a cégeknek növekedni a legmodernebb technológiával és szakértői tanácsadással.', cta: 'Kezdje el',
    aboutTitle: 'Rólunk', aboutDesc: '2010-ben alapítva, a <strong>Cégnév</strong> elkötelezett a kiváló digitális megoldások szállítása mellett, amelyek elősegítik az üzleti sikert.', mission: 'Küldetésünk, hogy a szervezeteket technológiával, innovációval és integritással erősítsük.', team: 'Csapatunk', achievements: 'Eredmények & Díjak', iso: 'ISO 9001 Tanúsítvány', best: '2023 Legjobb Startup Díj', productsTitle: 'Termékeink & Szolgáltatásaink', cloud: 'Felhő Megoldások', cloudDesc: 'Skálázható, biztonságos és megbízható felhő infrastruktúra vállalkozásának.', consulting: 'Tanácsadás', consultingDesc: 'Szakértői tanácsadás az üzleti folyamatok és technológia optimalizálásához.', caseStudies: 'Esettanulmányok', acme: 'Acme Corp', acmeDesc: '40%-kal nőtt a hatékonyság egyedi ERP rendszerünkkel.', testimonialsTitle: 'Ügyfeleink mondták', testimonial1: '"Kiemelkedő szolgáltatás és támogatás!"', testimonial2: '"Kiváló együttműködés és várakozáson felüli eredmények!"', testimonialAuthor: '- John Smith, CTO, BigCo', testimonial2Author: '- Maria Popescu, CEO, Client2', blogTitle: 'Hírek & Információk', blogPost: '5 trend, amely meghatározza az üzleti technológia jövőjét', blogDesc: 'Maradjon naprakész az üzleti technológia legújabb trendjeivel...', readMore: 'Tovább', contactTitle: 'Lépjen kapcsolatba velünk', name: 'Az Ön neve', email: 'Az Ön email címe', phone: 'Telefon (opcionális)', message: 'Üzenete', send: 'Üzenet küldése', emailInfo: 'Email:', phoneInfo: 'Telefon:', addressInfo: 'Cím:', address: '123 Üzleti út, Város, Ország', privacy: 'Adatvédelmi irányelvek', terms: 'Felhasználási feltételek', copyright: '&copy; 2024 Cégnév. Minden jog fenntartva.',
    galleryTitle: 'Fotógaléria',
    galleryAlt1: 'Iroda külső nézete',
    galleryAlt2: 'Csapatmunka',
    galleryAlt3: 'Modern munkatér',
    galleryAlt4: 'Üzleti esemény',
    galleryAlt5: 'Ügyfélkapcsolat',
    teamRole1: 'CEO – Vízionárius vezető, több mint 20 év tapasztalattal a technológiában.',
    teamRole2: 'CTO – Szakértő a skálázható üzleti megoldásokban.',
    contactInfoEmail: 'Email:',
    contactInfoPhone: 'Telefon:',
    contactInfoAddress: 'Cím:',
    thankYouTitle: 'Köszönjük az üzenetet!',
    thankYouText: 'Üzenetét sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot.',
    contactFormName: 'Az Ön neve',
    contactFormEmail: 'Az Ön email címe',
    contactFormPhone: 'Telefon (opcionális)',
    contactFormMessage: 'Üzenete',
    contactFormButton: 'Üzenet küldése'
  }
};

const langButtons = document.querySelectorAll('.lang-switcher button');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setLanguage(btn.dataset.lang);
  });
});

function renderHighlightedTestimonial(index, lang) {
  const t = translations[lang];
  const highlight = document.getElementById('testimonials-highlight');
  if (!highlight) return;
  let text = t.testimonial1, author = t.testimonialAuthor;
  if (index === 2) {
    text = t.testimonial2;
    author = t.testimonial2Author;
  }
  highlight.innerHTML = `<p>${text}</p><span>${author}</span>`;
  // Highlight the active logo
  document.querySelectorAll('.client-logo').forEach((img, i) => {
    img.classList.toggle('active', (i+1) === index);
  });
}

function setupTestimonialSwap() {
  const logos = document.querySelectorAll('.client-logo');
  logos.forEach(logo => {
    logo.addEventListener('click', function() {
      const idx = parseInt(this.dataset.client, 10);
      const lang = document.querySelector('.lang-switcher button.active').dataset.lang;
      renderHighlightedTestimonial(idx, lang);
    });
  });
}

function setLanguage(lang) {
  console.log('Switching language to:', lang);
  const t = translations[lang];
  if (!t) return;
  // Navbar (desktop)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks[0].textContent = t.home;
  navLinks[1].textContent = t.about;
  navLinks[2].textContent = t.products;
  navLinks[3].textContent = t.testimonials;
  navLinks[4].textContent = t.contact;
  // Navbar (mobile/drawer)
  const drawerNavLinks = document.querySelectorAll('.drawer-nav-links a');
  if (drawerNavLinks.length >= 5) {
    drawerNavLinks[0].textContent = t.home;
    drawerNavLinks[1].textContent = t.about;
    drawerNavLinks[2].textContent = t.products;
    drawerNavLinks[3].textContent = t.testimonials;
    drawerNavLinks[4].textContent = t.contact;
  }
  // Hero
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  const heroDesc = document.querySelector('.hero-content p');
  if (heroDesc) heroDesc.textContent = t.heroDesc;
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) ctaBtn.textContent = t.cta;
  // About
  const aboutTitle = document.querySelector('#about h2');
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
  const aboutDesc = document.querySelector('#about p');
  if (aboutDesc) aboutDesc.innerHTML = t.aboutDesc;
  const aboutMission = document.querySelector('#about .mission');
  if (aboutMission) aboutMission.textContent = t.mission;
  const aboutTeam = document.querySelector('#about .team h3');
  if (aboutTeam) aboutTeam.textContent = t.team;
  const aboutAchievements = document.querySelector('#about .achievements h3');
  if (aboutAchievements) aboutAchievements.textContent = t.achievements;
  const achievementItems = document.querySelectorAll('#about .achievements li');
  if (achievementItems.length > 0) {
    achievementItems[0].childNodes[1].textContent = ' ' + t.iso;
  }
  if (achievementItems.length > 1) {
    achievementItems[1].childNodes[1].textContent = ' ' + t.best;
  }
  // Products
  const productsTitle = document.querySelector('#products h2');
  if (productsTitle) productsTitle.textContent = t.productsTitle;
  const cloudProduct = document.querySelectorAll('.product-card h4')[0];
  if (cloudProduct) cloudProduct.textContent = t.cloud;
  const cloudDesc = document.querySelectorAll('.product-card p')[0];
  if (cloudDesc) cloudDesc.textContent = t.cloudDesc;
  const consultingProduct = document.querySelectorAll('.product-card h4')[1];
  if (consultingProduct) consultingProduct.textContent = t.consulting;
  const consultingDesc = document.querySelectorAll('.product-card p')[1];
  if (consultingDesc) consultingDesc.textContent = t.consultingDesc;
  // Testimonials
  const testimonialsTitle = document.querySelector('#testimonials h2');
  if (testimonialsTitle) testimonialsTitle.textContent = t.testimonialsTitle;
  const testimonialEls = document.querySelectorAll('.testimonial');
  if (testimonialEls.length > 0) {
    const testimonialP1 = testimonialEls[0].querySelector('p');
    const testimonialSpan1 = testimonialEls[0].querySelector('span');
    if (testimonialP1) testimonialP1.textContent = t.testimonial1;
    if (testimonialSpan1) testimonialSpan1.textContent = t.testimonialAuthor;
  }
  if (testimonialEls.length > 1) {
    const testimonialP2 = testimonialEls[1].querySelector('p');
    const testimonialSpan2 = testimonialEls[1].querySelector('span');
    if (testimonialP2) testimonialP2.textContent = t.testimonial2;
    if (testimonialSpan2) testimonialSpan2.textContent = t.testimonial2Author;
  }
  // Contact
  const contactTitle = document.querySelector('#contact h2');
  if (contactTitle) contactTitle.textContent = t.contactTitle;
  const nameInput = document.querySelector('input[name="name"]');
  if (nameInput) nameInput.placeholder = t.contactFormName;
  const emailInput = document.querySelector('input[name="email"]');
  if (emailInput) emailInput.placeholder = t.contactFormEmail;
  const phoneInput = document.querySelector('input[name="phone"]');
  if (phoneInput) phoneInput.placeholder = t.contactFormPhone;
  const messageInput = document.querySelector('textarea[name="message"]');
  if (messageInput) messageInput.placeholder = t.contactFormMessage;
  const contactFormButton = document.querySelector('.contact-form button');
  if (contactFormButton) contactFormButton.textContent = t.contactFormButton;
  const emailInfo = document.querySelectorAll('.contact-info p')[0];
  if (emailInfo) emailInfo.innerHTML = `<strong>${t.emailInfo}</strong> info@company.com`;
  const phoneInfo = document.querySelectorAll('.contact-info p')[1];
  if (phoneInfo) phoneInfo.innerHTML = `<strong>${t.phoneInfo}</strong> (123) 456-7890`;
  const addressInfo = document.querySelectorAll('.contact-info p')[2];
  if (addressInfo) addressInfo.innerHTML = `<strong>${t.addressInfo}</strong> ${t.address}`;
  // Footer
  const privacyLink = document.querySelector('.footer-links a[href="privacy-policy.html"]');
  if (privacyLink) privacyLink.textContent = t.privacy;
  const termsLink = document.querySelector('.footer-links a[href="terms-of-service.html"]');
  if (termsLink) termsLink.textContent = t.terms;
  const footerText = document.querySelector('footer p');
  if (footerText) footerText.innerHTML = t.copyright;
  // Gallery
  const galleryTitle = document.querySelector('#gallery h2');
  if (galleryTitle) galleryTitle.textContent = t.galleryTitle;
  const galleryImgs = document.querySelectorAll('.gallery-list img');
  if (galleryImgs.length >= 5) {
    galleryImgs[0].alt = t.galleryAlt1;
    galleryImgs[1].alt = t.galleryAlt2;
    galleryImgs[2].alt = t.galleryAlt3;
    galleryImgs[3].alt = t.galleryAlt4;
    galleryImgs[4].alt = t.galleryAlt5;
  }
  // Team member roles/messages
  const teamRoles = document.querySelectorAll('.team-member p');
  if (teamRoles.length >= 2) {
    teamRoles[0].textContent = t.teamRole1;
    teamRoles[1].textContent = t.teamRole2;
  }
  // Contact info labels
  const contactInfoPs = document.querySelectorAll('.contact-info p');
  if (contactInfoPs.length >= 3) {
    contactInfoPs[0].innerHTML = `<strong>${t.contactInfoEmail}</strong> info@company.com`;
    contactInfoPs[1].innerHTML = `<strong>${t.contactInfoPhone}</strong> (123) 456-7890`;
    contactInfoPs[2].innerHTML = `<strong>${t.contactInfoAddress}</strong> Str. Business 123, Oraș, Țară`;
  }
  // Thank you popup
  const thankYouTitle = document.querySelector('.thank-you-title');
  const thankYouText = document.querySelector('.thank-you-text');
  if (thankYouTitle) thankYouTitle.textContent = t.thankYouTitle;
  if (thankYouText) thankYouText.textContent = t.thankYouText;
  const caseStudiesH3 = document.querySelector('#products .case-studies h3');
  if (caseStudiesH3) caseStudiesH3.textContent = t.caseStudies;
  renderHighlightedTestimonial(document.querySelector('.client-logo.active')?.dataset.client ? parseInt(document.querySelector('.client-logo.active').dataset.client, 10) : 1, lang);
}
// Set default language
setLanguage('ro');

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Contact form thank you popup logic
const contactForm = document.getElementById('contact-form');
const thankYouPopup = document.getElementById('thank-you-popup');
const thankYouClose = document.getElementById('thank-you-close');
if (contactForm && thankYouPopup) {
  contactForm.addEventListener('submit', function(e) {
    console.log('Form submit handler running!');
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        thankYouPopup.style.display = 'flex';
        contactForm.reset();
      } else {
        response.json().then(data => {
          alert(data.error || 'A apărut o eroare. Încercați din nou.');
        });
      }
    })
    .catch(() => {
      alert('A apărut o eroare. Încercați din nou.');
    });
  });
}
if (thankYouClose && thankYouPopup) {
  thankYouClose.addEventListener('click', function() {
    thankYouPopup.style.display = 'none';
  });
}

// Side-drawer nav logic for mobile
function setupSideDrawerNav() {
  const navToggle = document.getElementById('nav-toggle');
  const sideDrawer = document.getElementById('side-drawer');
  const navLinks = sideDrawer.querySelectorAll('.nav-links a');
  function closeDrawer() {
    sideDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }
  navToggle.addEventListener('click', function() {
    sideDrawer.classList.toggle('open');
    if (sideDrawer.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// Gallery carousel preview logic
function setupGalleryCarouselPreview() {
  const gallery = document.querySelector('.gallery-list');
  const imgs = gallery ? gallery.querySelectorAll('img') : [];
  const preview = document.getElementById('gallery-carousel-preview');
  if (!gallery || !preview || imgs.length === 0) return;
  // Create dots
  preview.innerHTML = '';
  imgs.forEach((img, idx) => {
    const dot = document.createElement('span');
    dot.className = 'gallery-carousel-dot' + (idx === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      gallery.scrollTo({ left: img.offsetLeft - gallery.offsetLeft, behavior: 'smooth' });
    });
    preview.appendChild(dot);
  });
  // Update dots on scroll
  gallery.addEventListener('scroll', () => {
    let activeIdx = 0;
    imgs.forEach((img, idx) => {
      const imgLeft = img.getBoundingClientRect().left - gallery.getBoundingClientRect().left;
      if (imgLeft < gallery.offsetWidth / 2) activeIdx = idx;
    });
    preview.querySelectorAll('.gallery-carousel-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIdx);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupTestimonialSwap();
  renderHighlightedTestimonial(1, document.querySelector('.lang-switcher button.active').dataset.lang);
  setupSideDrawerNav();
  setupGalleryCarouselPreview();
}); 