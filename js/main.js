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
    aboutTitle: 'Despre Noi', aboutDesc: 'Fondată în 2010, <strong>Numele Companiei</strong> este dedicată furnizării de soluții digitale excepționale care stimulează succesul afacerii.', mission: 'Misiunea noastră este să împuternicim organizațiile prin tehnologie, inovație și integritate.', team: 'Echipa Noastră', achievements: 'Realizări & Premii', iso: 'Certificare ISO 9001', best: 'Premiul Best Startup 2023', productsTitle: 'Produsele & Serviciile Noastre', cloud: 'Soluții Cloud', cloudDesc: 'Infrastructură cloud scalabilă, sigură și fiabilă pentru afacerea ta.', consulting: 'Consultanță', consultingDesc: 'Consultanță de specialitate pentru optimizarea proceselor și tehnologiilor de business.', caseStudies: 'Studii de Caz', acme: 'Acme Corp', acmeDesc: 'Eficiență crescută cu 40% prin sistemul nostru ERP personalizat.', testimonialsTitle: 'Ce spun clienții noștri', testimonial1: '"Servicii și suport excepțional!"', blogTitle: 'Informații & Noutăți', blogPost: '5 Tendințe în Tehnologia de Afaceri', blogDesc: 'Rămâi în față cu cele mai noi perspective din tehnologia de afaceri...', readMore: 'Citește mai mult', contactTitle: 'Contactează-ne', name: 'Numele tău', email: 'Emailul tău', phone: 'Telefon (opțional)', message: 'Mesajul tău', send: 'Trimite mesajul', emailInfo: 'Email:', phoneInfo: 'Telefon:', addressInfo: 'Adresă:', address: 'Str. Business 123, Oraș, Țară', privacy: 'Politica de Confidențialitate', terms: 'Termeni și Condiții', copyright: '&copy; 2024 Numele Companiei. Toate drepturile rezervate.'
  },
  en: {
    home: 'Home', about: 'About Us', products: 'Products/Services', testimonials: 'Testimonials', blog: 'Blog', contact: 'Contact',
    heroTitle: 'Empowering Your Business with Innovative Solutions', heroDesc: 'We help companies grow with cutting-edge technology and expert consulting.', cta: 'Get Started',
    aboutTitle: 'About Us', aboutDesc: 'Founded in 2010, <strong>Company Name</strong> is dedicated to delivering exceptional digital solutions that drive business success.', mission: 'Our mission is to empower organizations through technology, innovation, and integrity.', team: 'Meet the Team', achievements: 'Achievements & Awards', iso: 'ISO 9001 Certified', best: '2023 Best Startup Award', productsTitle: 'Our Products & Services', cloud: 'Cloud Solutions', cloudDesc: 'Scalable, secure, and reliable cloud infrastructure for your business.', consulting: 'Consulting', consultingDesc: 'Expert advice to optimize your business processes and technology stack.', caseStudies: 'Case Studies', acme: 'Acme Corp', acmeDesc: 'Increased efficiency by 40% with our custom ERP system.', testimonialsTitle: 'What Our Clients Say', testimonial1: '"Outstanding service and support!"', blogTitle: 'Insights & News', blogPost: '5 Trends Shaping the Future of Business Technology', blogDesc: 'Stay ahead with the latest insights in business technology...', readMore: 'Read More', contactTitle: 'Contact Us', name: 'Your Name', email: 'Your Email', phone: 'Your Phone (optional)', message: 'Your Message', send: 'Send Message', emailInfo: 'Email:', phoneInfo: 'Phone:', addressInfo: 'Address:', address: '123 Business Rd, City, Country', privacy: 'Privacy Policy', terms: 'Terms of Service', copyright: '&copy; 2024 Company Name. All rights reserved.'
  },
  hu: {
    home: 'Főoldal', about: 'Rólunk', products: 'Termékek/Szolgáltatások', testimonials: 'Vélemények', blog: 'Blog', contact: 'Kapcsolat',
    heroTitle: 'Vállalkozását innovatív megoldásokkal erősítjük', heroDesc: 'Segítünk a cégeknek növekedni a legmodernebb technológiával és szakértői tanácsadással.', cta: 'Kezdje el',
    aboutTitle: 'Rólunk', aboutDesc: '2010-ben alapítva, a <strong>Cégnév</strong> elkötelezett a kiváló digitális megoldások szállítása mellett, amelyek elősegítik az üzleti sikert.', mission: 'Küldetésünk, hogy a szervezeteket technológiával, innovációval és integritással erősítsük.', team: 'Csapatunk', achievements: 'Eredmények & Díjak', iso: 'ISO 9001 Tanúsítvány', best: '2023 Legjobb Startup Díj', productsTitle: 'Termékeink & Szolgáltatásaink', cloud: 'Felhő Megoldások', cloudDesc: 'Skálázható, biztonságos és megbízható felhő infrastruktúra vállalkozásának.', consulting: 'Tanácsadás', consultingDesc: 'Szakértői tanácsadás az üzleti folyamatok és technológia optimalizálásához.', caseStudies: 'Esettanulmányok', acme: 'Acme Corp', acmeDesc: '40%-kal nőtt a hatékonyság egyedi ERP rendszerünkkel.', testimonialsTitle: 'Ügyfeleink mondták', testimonial1: '"Kiemelkedő szolgáltatás és támogatás!"', blogTitle: 'Hírek & Információk', blogPost: '5 trend, amely meghatározza az üzleti technológia jövőjét', blogDesc: 'Maradjon naprakész az üzleti technológia legújabb trendjeivel...', readMore: 'Tovább', contactTitle: 'Lépjen kapcsolatba velünk', name: 'Az Ön neve', email: 'Az Ön email címe', phone: 'Telefon (opcionális)', message: 'Üzenete', send: 'Üzenet küldése', emailInfo: 'Email:', phoneInfo: 'Telefon:', addressInfo: 'Cím:', address: '123 Üzleti út, Város, Ország', privacy: 'Adatvédelmi irányelvek', terms: 'Felhasználási feltételek', copyright: '&copy; 2024 Cégnév. Minden jog fenntartva.'
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

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  // Navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks[0].textContent = t.home;
  navLinks[1].textContent = t.about;
  navLinks[2].textContent = t.products;
  navLinks[3].textContent = t.testimonials;
  navLinks[4].textContent = t.blog;
  navLinks[5].textContent = t.contact;
  // Hero
  document.querySelector('.hero-content h1').textContent = t.heroTitle;
  document.querySelector('.hero-content p').textContent = t.heroDesc;
  document.querySelector('.cta-btn').textContent = t.cta;
  // About
  document.querySelector('#about h2').textContent = t.aboutTitle;
  document.querySelector('#about p').innerHTML = t.aboutDesc;
  document.querySelector('#about .mission').textContent = t.mission;
  document.querySelector('#about .team h3').textContent = t.team;
  document.querySelector('#about .achievements h3').textContent = t.achievements;
  document.querySelectorAll('#about .achievements li')[0].childNodes[1].textContent = ' ' + t.iso;
  document.querySelectorAll('#about .achievements li')[1].childNodes[1].textContent = ' ' + t.best;
  // Products
  document.querySelector('#products h2').textContent = t.productsTitle;
  document.querySelectorAll('.product-card h4')[0].textContent = t.cloud;
  document.querySelectorAll('.product-card p')[0].textContent = t.cloudDesc;
  document.querySelectorAll('.product-card h4')[1].textContent = t.consulting;
  document.querySelectorAll('.product-card p')[1].textContent = t.consultingDesc;
  document.querySelector('#products .case-studies h3').textContent = t.caseStudies;
  document.querySelector('#products .case-study h4').textContent = t.acme;
  document.querySelector('#products .case-study p').textContent = t.acmeDesc;
  // Testimonials
  document.querySelector('#testimonials h2').textContent = t.testimonialsTitle;
  document.querySelector('.testimonial p').textContent = t.testimonial1;
  // Blog
  document.querySelector('#blog h2').textContent = t.blogTitle;
  document.querySelector('.blog-post h3').textContent = t.blogPost;
  document.querySelector('.blog-post p').textContent = t.blogDesc;
  document.querySelector('.read-more').textContent = t.readMore;
  // Contact
  document.querySelector('#contact h2').textContent = t.contactTitle;
  document.querySelector('input[name="name"]').placeholder = t.name;
  document.querySelector('input[name="email"]').placeholder = t.email;
  document.querySelector('input[name="phone"]').placeholder = t.phone;
  document.querySelector('textarea[name="message"]').placeholder = t.message;
  document.querySelector('.contact-form button').textContent = t.send;
  document.querySelectorAll('.contact-info p')[0].innerHTML = `<strong>${t.emailInfo}</strong> info@company.com`;
  document.querySelectorAll('.contact-info p')[1].innerHTML = `<strong>${t.phoneInfo}</strong> (123) 456-7890`;
  document.querySelectorAll('.contact-info p')[2].innerHTML = `<strong>${t.addressInfo}</strong> ${t.address}`;
  // Footer
  document.querySelector('.footer-links a[href="privacy-policy.html"]').textContent = t.privacy;
  document.querySelector('.footer-links a[href="terms-of-service.html"]').textContent = t.terms;
  document.querySelector('footer p').innerHTML = t.copyright;
}
// Set default language
setLanguage('ro'); 