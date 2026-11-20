/* ============================================================
   SharkGo — script.js
   ------------------------------------------------------------
   SI TE SHTONI MAKINE TE RE (2 hapa):
   1. Hedhni foton ne te njejtin folder me emrin: marka-01.webp
      (rekomandim: WebP me sfond TRANSPARENT)
   2. Kopjoni nje objekt me poshte ne CARS dhe ndryshoni te dhenat.
      - Nese fotoja ka sfond transparent:  multiply: false
      - Nese fotoja ka sfond te bardhe:    multiply: true
        (e shkrin sfondin e bardhe ne faqe)
   ============================================================ */

const WHATSAPP_NUMBER = '355696013225';       // numri ku shkojne rezervimet
const INSTAGRAM_URL = 'https://www.instagram.com/'; // NDESHONI me linkun real

const CARS = [
  {
    slug: 'URUS',
    name: { sq: 'Lamborghini Urus', en: 'Lamborghini Urus' },
    desc: { sq: 'SUV Sport · V8 · AWD', en: 'Sport SUV · V8 · AWD' },
    price: 1300,
    glow: 'radial-gradient(circle, rgba(253,224,71,0.22) 0%, rgba(255,255,255,0) 62%)',
    image: 'urusss.jpg', 
    multiply: true,
    multiply: false,
fill: true,
  },
  {
    slug: 'g63',
    name: { sq: 'Mercedes-Benz G-63', en: 'Mercedes-Benz G-63' },
    desc: { sq: 'Ikone Off-Road · V8', en: 'Off-Road Icon · V8' },
    price: 700,
    glow: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, rgba(255,255,255,0) 62%)',
    image: 'g63 ai.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
  {
    slug: 'GLE 450d ',
    name: { sq: 'Mercedes Benz GLE 450d', en: 'Mercedes Benz GLE 450d' },
    desc: { sq: 'Luks & Komfort · AWD', en: 'Luxury & Comfort · AWD' },
    price: 250,
    glow: 'radial-gradient(circle, rgba(214,211,209,0.35) 0%, rgba(255,255,255,0) 62%)',
    image: 'gle 450d.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
  {
    slug: 'GLC 220d ',
    name: { sq: 'Mercedes Benz GLC 220d', en: 'Mercedes Benz GLC 220d' },
    desc: { sq: 'Kupe Sportive ·', en: 'Sport Coupe · ' },
    price: 150,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'glc 220d.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'GLC 200d ',
    name: { sq: 'Mercedes Benz GLC 200d', en: 'Mercedes Benz GLC 200d' },
    desc: { sq: 'Kupe Sportive ·', en: 'Sport Coupe · ' },
    price: 150,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'glc 200d.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'GLC  ',
    name: { sq: 'Mercedes Benz GLC ', en: 'Mercedes Benz GLC 2021' },
    desc: { sq: 'Kupe Sportive ·', en: 'Sport Coupe · ' },
    price: 100,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'glc 2021.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'E Class ',
    name: { sq: 'Mercedes Benz E Class Coupe ', en: 'Mercedes Benz E Class Coupe ' },
    desc: { sq: 'Kupe Sportive ·', en: 'Sport Coupe · ' },
    price: 100,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'e class coupe.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Cayenne ',
    name: { sq: 'Porsche Cayenne ', en: 'Porsche Cayenne ' },
    desc: { sq: 'SUV Sportive ·', en: 'Sport SUV · ' },
    price: 150,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'porsche cayenne.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Escalade ',
    name: { sq: 'Cadillac Escalade ', en: 'Cadillac Escalade ' },
    desc: { sq: 'SUV e Madhe & Luksoze ·', en: 'Big  & Luxury SUV · ' },
    price: 150,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'cadillac.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Series 7 ',
    name: { sq: 'BMW Seria 7 ', en: 'BMW Series 7 ' },
    desc: { sq: 'Sedan Luksi ·', en: 'Luxury Sedan · ' },
    price: 100,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'seria 7.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Golf 7',
    name: { sq: 'VW Golf 7', en: 'VW Golf 7' },
    desc: { sq: 'Hatchback Sportiv ·', en: 'Sportive Hatchback · ' },
    price: 50,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'golf.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },

  {
    slug: 'Tiguan',
    name: { sq: 'VW Tiguan', en: 'VW Tiguan' },
    desc: { sq: 'SUV Ekonomik ·', en: 'Economic SUV · ' },
    price: 40,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'tiguan.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
  
  {
    slug: 'Passat CC',
    name: { sq: 'VW Passat CC', en: 'VW Passat CC' },
    desc: { sq: 'Sedan Ekonomik ·', en: 'Economic Sedan · ' },
    price: 35,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'passat.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
  {
    slug: 'Hyundai i30',
    name: { sq: 'Hyundai i30', en: 'Hyundai i30' },
    desc: { sq: 'Hatchback  ·', en: ' Hatchback · ' },
    price: 25,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'i30.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Hyundai Tucson',
    name: { sq: 'Hyundai Tucson', en: 'Hyundai Tucson' },
    desc: { sq: 'SUV Ekonomik  ·', en: ' Economic SUV · ' },
    price: 50,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'TUCSON.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Polo',
    name: { sq: 'VW Polo', en: 'VW Polo' },
    desc: { sq: 'Hatchback Ekonomik ·', en: 'Economic Hatchback · ' },
    price: 20,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'POLO.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'Passat',
    name: { sq: 'VW Passat', en: 'VW Passat' },
    desc: { sq: 'Wagon Familjar ·', en: 'Family Wagon · ' },
    price: 40,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'p.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
   {
    slug: 'A3',
    name: { sq: 'Audi A3', en: 'Audi A3' },
    desc: { sq: 'Hatchback i Vogel ·', en: 'Small Hatchback · ' },
    price: 30,
    glow: 'radial-gradient(circle, rgba(147,197,253,0.28) 0%, rgba(255,255,255,0) 62%)',
    image: 'a3.jpg',
    multiply: true,
    multiply: false,
fill: true,
  },
  
];

const I18N = {
  sq: { book: 'REZERVO TANI', perDay: '/ dite', wa: 'Pershendetje SharkGo! Dua te rezervoj: ' },
  en: { book: 'BOOK NOW', perDay: '/ day', wa: 'Hello SharkGo! I would like to book: ' },
};

/* ============================================================
   Logjika e sliderit — NUK ka nevoje te preket
   ============================================================ */

let lang = localStorage.getItem('sharkgo-lang') || 'sq';
let current = 0;
let timer = null;

const slidesEl = document.getElementById('slides');
const tabsEl = document.getElementById('tabs');
const underline = document.getElementById('tab-underline');

const waLink = (car) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(I18N[lang].wa + car.name[lang])}`;

const arrowIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';

// --- Ndertimi i sllajdeve ---
CARS.forEach((car, i) => {
  const s = document.createElement('section');
  s.className = 'slide' + (car.fill ? ' is-photo' : '');
  s.dataset.testid = `slide-${car.slug}`;
  s.innerHTML = `
    <div class="slide-glow" style="background:${car.glow}"></div>
    <div class="slide-backdrop" aria-hidden="true">${car.name.en}</div>
    <div class="car-wrap" style="--zoom:${car.zoom || 1}">
      <div class="car-wrap">
        <img src="${car.image}" alt="${car.name.en}" draggable="false"
             class="${car.multiply ? 'multiply' : ''}" data-testid="car-image-${car.slug}" />
        <div class="car-shadow" aria-hidden="true"></div>
      </div>
    </div>
    <div class="slide-info">
      <p class="reveal car-desc" data-testid="car-desc-${car.slug}"></p>
      <h1 class="reveal car-title" data-testid="car-title-${car.slug}"></h1>
      <p class="reveal car-price" data-testid="car-price-${car.slug}"></p>
      <div class="reveal">
        <a class="book-btn" data-testid="book-btn-${car.slug}" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>`;
  slidesEl.appendChild(s);

  const t = document.createElement('button');
  t.dataset.testid = `tab-${car.slug}`;
  t.addEventListener('click', () => goTo(i));
  tabsEl.appendChild(t);
});

const slides = [...slidesEl.children];
const tabs = [...tabsEl.querySelectorAll('button')];

function renderTexts() {
  CARS.forEach((car, i) => {
    const s = slides[i];
    s.querySelector('.car-desc').textContent = car.desc[lang];
    s.querySelector('.car-title').textContent = car.name[lang];
    s.querySelector('.car-price').innerHTML =
      `€${car.price} <small>${I18N[lang].perDay}</small>`;
    const btn = s.querySelector('.book-btn');
    btn.innerHTML = `${I18N[lang].book} ${arrowIcon}`;
    btn.href = waLink(car);
    tabs[i].textContent = car.name[lang];
  });
  document.getElementById('lang-sq').classList.toggle('active', lang === 'sq');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
  requestAnimationFrame(moveUnderline);
}

function moveUnderline() {
  const tab = tabs[current];
  if (!tab) return;
  underline.style.left = tab.offsetLeft + 'px';
  underline.style.width = tab.offsetWidth + 'px';
}

function show(index, dir) {
  const old = slides[current];
  const next = slides[index];
  current = index;

  old.classList.remove('active');
  old.classList.add('leaving');

  next.style.clipPath = dir >= 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)';
  next.classList.add('active');
  // force reflow qe tranzicioni te luaje
  void next.offsetWidth;
  next.style.clipPath = 'inset(0% 0% 0% 0%)';

  setTimeout(() => {
    old.classList.remove('leaving');
    old.style.clipPath = '';
  }, 950);

  tabs.forEach((t, i) => t.classList.toggle('active', i === index));
  moveUnderline();
  restartTimer();

  // preload foto e ardhshme
  const img = new Image();
  img.src = CARS[(index + 1) % CARS.length].image;
}

function goTo(i) { if (i !== current) show(i, i > current ? 1 : -1); }
function next() { show((current + 1) % CARS.length, 1); }
function prev() { show((current - 1 + CARS.length) % CARS.length, -1); }

function restartTimer() {
  clearTimeout(timer);
  timer = setTimeout(next, 6000);
}

function setLang(l) {
  lang = l;
  localStorage.setItem('sharkgo-lang', l);
  renderTexts();
}

// --- Eventet ---
document.getElementById('next-arrow').addEventListener('click', next);
document.getElementById('prev-arrow').addEventListener('click', prev);
document.getElementById('lang-sq').addEventListener('click', () => setLang('sq'));
document.getElementById('lang-en').addEventListener('click', () => setLang('en'));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
});

let touchX = null;
const sliderEl = document.getElementById('slider');
sliderEl.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
sliderEl.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
  touchX = null;
});

window.addEventListener('resize', moveUnderline);

document.getElementById('wa-header').href = `https://wa.me/${WHATSAPP_NUMBER}`;
document.getElementById('ig-header').href = INSTAGRAM_URL;

// --- Intro ---
const intro = document.getElementById('intro');
const word = document.getElementById('intro-word');
'SHARKGO'.split('').forEach((ch, i) => {
  const sp = document.createElement('span');
  sp.textContent = ch;
  sp.style.animationDelay = 0.15 + i * 0.05 + 's';
  word.appendChild(sp);
});
setTimeout(() => {
  intro.classList.add('hide');
  document.getElementById('header').classList.add('show');
}, 1600);

// --- Start ---
slides[0].classList.add('active');
tabs[0].classList.add('active');
renderTexts();
restartTimer();