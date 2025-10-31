# Digital Horizon — Front-End Developer Trial Task  
**Developer:** Jason Popejoy  

---

## Overview
**Digital Horizon** is my take on the cinematic, scroll-driven UI challenge.  
Rather than rebuilding a heavy 3D scene, I used the tools I know best — **ASP.NET Core MVC, C#, HTML, CSS, Bootstrap, and GSAP** — to create a smooth, immersive experience focused on performance and visual storytelling.  

The goal was simple: deliver a **non-standard, interactive UI** that feels modern, cinematic, and alive while maintaining clarity and usability.

---

## Architecture & Approach
The app follows a clean **MVC structure** with one focused layout:
- A **Hero section** featuring a looping video background, text overlay, and parallax layers.  
- A subtle **scroll transition** leading into a **Welcome** and **Tech Stack** section.  

Layered z-index ordering keeps each visual element independent — video, glow gradients, and overlays all work together without sacrificing smoothness.  
I replaced the original 3D model concept with a **Runway-generated nebula video** and enhanced it using CSS gradients, masks, and custom scroll animations.

---

## Technical Highlights
- **🎞️ GSAP + ScrollTrigger:** Handles fade-in transitions, parallax motion, and scroll synchronization.  
- **🧩 Bootstrap 5:** Provides responsive grid and layout structure.  
- **🎨 Custom CSS:** Creates the indigo glow palette, gradient masking, and seamless fade transitions to remove the “curtain rise” effect.  
- **⚡ Performance-First Design:** 720p optimized looping video with minimal animation overhead.  

---

## Creative Choices
The design leans into a **deep indigo and violet color scheme** to evoke a futuristic, high-tech aesthetic.  
Instead of overwhelming motion, I emphasized **subtle kinetic energy** — slow fades, gentle scroll-linked movement, and faint glow effects that make the page feel alive without losing its professional tone.  

Typography, contrast, and spacing were adjusted for readability in both bright and dark displays.

---

## AI Tool Usage
- **ChatGPT:** Used for brainstorming layout organization, debugging GSAP logic, and refining CSS layering.  
- **Runway ML:** Generated the nebula background loop that replaces the 3D model.  
All code structure, integration, and final styling were implemented manually in Visual Studio.

---

## Reflection & Future Enhancements
If given more time or Runway credits, I’d like to:
- Generate a smoother, more dynamic background loop.  
- Add interactive scroll cues that react to user input.  
- Expand the Tech Stack into a full showcase with hover previews and micro-animations.  

Overall, I’m proud of how this project balances **cinematic atmosphere** with **technical precision** — a showcase of my approach to modern, immersive front-end design.

---

## Links
- **Live Demo:** (https://digitalhorizons.onrender.com)  
