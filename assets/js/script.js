/* --- COPY INTO assets/js/script.js --- */
const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};

const counters = document.querySelectorAll('.stat-number');
const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 150;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) startCounters();
}, { threshold: 0.5 });
observer.observe(document.querySelector('#stats'));

document.querySelectorAll('a, button, .bento-item, .service-card, .work-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4)';
        cursor.style.background = 'rgba(255,255,255,0.2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#00ff88';
    });
});

AOS.init({ duration: 1000, once: false });