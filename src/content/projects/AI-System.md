---
title: "Advanced NPC AI & Pathfinding"
description: "A strictly typed, production-ready AI framework featuring modular logic, Promise-based optimization, and dynamic pathing."
image: "../../assets/projects/cover.jpg"
thumbnail: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AiSysystem-picture.png" 
thumbnail_video: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AiSysystem-video.mp4"
role: "UI/System Dev"
genre: "AI / Simulation"
stack: ["Luau", "Promise", "PathfindingService", "Rojo"]
order: 2
---

# Overview
This framework is engineered using **Strict Luau** for maximum type safety. It abandons rigid state machines in favor of an asynchronous, event-driven architecture that allows for complex decision-making without performance overhead.

## Pathfinding & Logic Demo
Below is a demonstration of the agent navigation, target tracking, and state execution.

<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AiSysystem-picture.png">
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/AiSysystem-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Key Features
- **Async Optimization**: Fully modular and optimized using the **Promise** library and async functions for peak performance, ensuring non-blocking logic execution during expensive path computations.
- **Customizable Rigs**: AI agents are highly customizable with specific animations, damage mechanics, attack ranges, and detection radii, allowing for diverse enemy types from a single base class.
- **Dynamic Pathfinding**: Intelligent navigation that handles moving targets and complex geometry using Roblox's `PathfindingService` wrapped in custom retry logic.
- **Seamless Integration**: Designed for seamless integration into any system, utilizing a decouple Service/Controller pattern that drops into existing game loops with minimal setup.