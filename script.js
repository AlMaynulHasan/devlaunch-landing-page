// 1. Theme Toggle Persistence
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.innerText = isDark ? "☀️" : "🌙";
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('portfolio-theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.innerText = "☀️";
}

// 2. Smooth Scroll
document.getElementById('cta-scroll').addEventListener('click', () => {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
});

// 3. Slider Logic
const slider = document.getElementById('slider');
let index = 0;

function move(dir) {
    index = (index + dir + 3) % 3;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => move(1));
document.getElementById('prevBtn').addEventListener('click', () => move(-1));
setInterval(() => move(1), 5000);

// 4. Form Handling
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form-success').classList.remove('hidden');
    e.target.style.display = 'none';
});