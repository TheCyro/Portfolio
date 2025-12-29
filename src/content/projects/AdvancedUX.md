---
title: "Advanced UX"
description: "A polished UI suite featuring an immersive 3D main menu and a smart, lag-free loading system."
image: "../../assets/projects/cover.jpg"
thumbnail: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_picture.png" 
thumbnail_video: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_video1.mp4"
role: "UI/System Dev"
genre: "User Interface / Utility"
stack: ["Luau", "TweenService", "ContentProvider", "SurfaceGui", "Roact"]
order: 4
---

# Overview
This project focuses on the "First Time User Experience" (FTUE). It combines a **cinematic 3D Main Menu**—which lives inside the game world rather than just sitting on the screen—with a **Smart Asset Loader** that ensures the game is fully ready before the player spawns, preventing the common issue of textures "popping in" during gameplay.

## System Demos
Below are demonstrations of the motion design in the menus and the custom logic behind the loading screen.

### 1. Immersive 3D Menu
Instead of a flat 2D screen, this menu is projected into the 3D world. This allows for depth effects, lighting, and particles to interact with the interface seamlessly.
<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_picture.png">
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_video1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 2. Custom Loading Animations
A "Slot Machine" style progress counter. Instead of basic text, it uses a custom image sequence that rolls smoothly to the next number as assets finish loading.
<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_picture.png">
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AdvancedUX_video2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Key Features
- **3D Camera Projection**: The menu isn't a static overlay. It uses custom camera math to project the UI onto a 3D surface that perfectly faces the player. This enables cinematic depth and 3D background effects while keeping the buttons crisp and responsive on any screen size.
- **Smart Asset Batching**: Loading thousands of assets at once causes lag. My system breaks the load queue into small "batches" (chunks of 10), processing them systematically to keep the animation frame rate smooth while the game loads.
- **Stylized Visual Feedback**: I moved away from boring text percentages. The system uses a custom animation controller to "roll" through image textures for numbers, giving the loading screen a premium, polished feel.
- **Interactive Micro-Animations**: Buttons feature satisfying "micro-interactions." When hovered or clicked, they use `TweenService` to scale, change font weight, and animate highlights, making the interface feel tactile and responsive.
- **Streaming Compatibility**: The loader explicitly handles Roblox's "StreamingEnabled," forcing the server to send the geometry around the spawn point before the loading screen fades, ensuring the player never falls through the floor.