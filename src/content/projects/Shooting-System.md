---
title: "FPS Engine Framework"
description: "A strictly typed, production-ready gun system featuring server-side validation and procedural animation."
image: "../../assets/projects/cover.jpg"
thumbnail: "https://thecyro.github.io/Media/ShootingSystem_picture.png" 
thumbnail_video: "https://thecyro.github.io/Media/ShootingSystem-video.mp4"
role: "UI/System Dev"
genre: "FPS / Shooter"
stack: ["Luau", "Rojo", "Raycasting", "ContextActionService"]
order: 2
---

# Overview
This framework is engineered using **Strict Luau** for maximum type safety and performance. It abandons heavy external frameworks in favor of a lightweight, modular Service/Controller architecture optimized for maintainability and speed.

## Shooting System Demo
Below is a demonstration of the hit validation, procedural recoil recovery, and viewmodel animations.

<video controls autoplay loop muted playsinline>
  <source src="https://thecyro.github.io/Media/ShootingSystem-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Key Features
- **Server-Authoritative Validation**: Prevents exploiters by verifying ammo, fire rate, and hit origin/direction on the server before dealing damage.
- **Procedural Animation**: Features math-based recoil recovery and dynamic crosshair spread that reacts to movement and firing.
- **Custom ViewModel System**: A dedicated controller handles first-person weapon rendering, skin application, and animation states (Idle, Sprint, ADS, Reload).
- **Data-Driven Architecture**: Weapons are defined in strict configuration modules, allowing for rapid iteration of damage, recoil, and ballistics without touching core logic.