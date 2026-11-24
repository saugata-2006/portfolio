/* ================= SCROLL TOP ================= */

const ss = document.getElementById('scroll');

ss.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ================= SECTION SCROLL ================= */

function scrollToSection(id){

    const section = document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('show');
    });

    setTimeout(() => {
        section.classList.add('show');
    }, 300);

}

/* ================= CUSTOM CURSOR ================= */

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".dot");

let mouseX = 0,
    mouseY = 0;

let cursorX = 0,
    cursorY = 0;

let lastX = 0,
    lastY = 0;

document.addEventListener("mousemove", e => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function createParticle(x, y, dx, dy){

    const p = document.createElement("div");

    p.className = "particle";

    document.body.appendChild(p);

    let life = 1;

    let px = x;
    let py = y;

    const interval = setInterval(() => {

        px -= dx * 1.2;
        py -= dy * 1.2;

        life -= 0.08;

        p.style.left = px + "px";
        p.style.top = py + "px";

        p.style.opacity = life;

        if(life <= 0){

            clearInterval(interval);
            p.remove();

        }

    }, 19);

}

function animate(){

    cursorX += (mouseX - cursorX) * 0.14;
    cursorY += (mouseY - cursorY) * 0.14;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    const dx = mouseX - lastX;
    const dy = mouseY - lastY;

    dot.style.transform =
        `translate(${dx * 0.9}px, ${dy * 0.9}px)`;

    if(Math.abs(dx) + Math.abs(dy) > 1){

        createParticle(cursorX + 4, cursorY + 4, dx, dy);

    }

    lastX = mouseX;
    lastY = mouseY;

    requestAnimationFrame(animate);

}

animate();