// ================================
// Cinematic Hero Animations
// Using GSAP + ScrollTrigger
// ================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Developer note: fade in title on page load
gsap.to(".hero-title", {
    duration: 2,
    opacity: 1,
    ease: "power2.out",
    delay: 1 // syncs with video fade-in
});

// Developer note: simple parallax scroll animations
if (window.innerWidth > 768) {
    gsap.to(".layer-1", {
        y: -80,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
    });

    gsap.to(".layer-2", {
        y: -120,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }
    });
}

// Keep gentle zoom only
gsap.to(".hero-video", {
    scale: 1.1,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


// Developer note: fade out scroll indicator when scrolling
ScrollTrigger.create({
    trigger: "#hero",
    start: "top+=100 top",
    end: "bottom top",
    onEnter: () => gsap.to(".scroll-indicator", { opacity: 0, duration: 0.6 }),
    onLeaveBack: () => gsap.to(".scroll-indicator", { opacity: 1, duration: 0.6 })
});

// Subtle fade-in + upward lift for first content section
gsap.from(".content-section h2, .content-section p", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});
