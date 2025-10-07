document.querySelectorAll('[data-box]').forEach(box => {
    let resetTimeout;
    let lastMove = 0;

    box.addEventListener('mousemove', () => {
        const now = Date.now();
        if (now - lastMove < 200) return;
        lastMove = now;

        const moveX = (Math.random() - 0.5) * 150;
        const moveY = (Math.random() - 0.5) * 150;
        const rotate = (Math.random() - 0.5) * 20; // Random rotation between -10° and 10°

        gsap.to(box, {
            x: moveX,
            y: moveY,
            rotation: rotate,
            duration: 0.6,
            ease: "expo.out"
        });

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
            gsap.to(box, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)"
            });
        }, 1000);
    });

    box.addEventListener('mouseleave', () => {
        clearTimeout(resetTimeout);
        gsap.to(box, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});

// GSAP Fade Up Animation
document.querySelectorAll('.fade-up').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.4,
        ease: "power2.in",
        scrollTrigger: {
            trigger: el,
            start: "top 110%",
            toggleActions: "play reverse play reverse",
            once:false,
        }
    });
});


// GSAP skewed zoom Animation with staggered buttons
gsap.utils.toArray('.skew-zoom').forEach((el, i) => {
    gsap.from(el, {
        opacity: 0,
        y: -40,
        scale: 0.8,
        skewY: 5,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1, // Delay increases with index
        scrollTrigger: {
            trigger: el,
            start: "top 100%",
            toggleActions: "play reverse play reverse",
            once: false,
        }
    });
});


// GSAP skewed zoom Animation
document.querySelectorAll('.fade-scale').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        ease: "power3.in", 
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once:false,
        }
    });
});

 const body = document.body;
  const toggleBtn = document.getElementById("toggle-theme");
  const icon = document.getElementById("theme-icon");

  // Set initial theme
  body.classList.add("static-theme");

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("static-theme");
    body.classList.toggle("animated-theme");

    // Toggle icon
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });