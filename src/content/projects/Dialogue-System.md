---
title: "NPC Dialogue System"
description: "A fully modular, object-oriented dialogue framework featuring advanced UI/UX capabilities and seamless integration."
image: "../../assets/projects/cover.jpg"
thumbnail: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/DialogueSystem-picture.png" 
thumbnail_video: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/DialogueSystem-video.mp4"
role: "UI/System Dev"
genre: "RPG / Narrative"
stack: ["Luau", "OOP", "Roact", "TweenService"]
order: 3
---

# Overview
This framework is a **fully modular, object-oriented system designed for flexibility and performance**. It prioritizes developer experience, being easy to read and highly customizable while maintaining strict typing. The architecture is engineered for seamless integration into any project, enabling rapid implementation and an efficient workflow for both programmers and narrative designers.

## Interaction Demo
Below is a demonstration of the dynamic text rendering, branching choices, and UI animations.

<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/DialogueSystem-picture.png">
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/DialogueSystem-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Key Features
- **Advanced UI & UX Capabilities**: Delivers a polished player experience with rich typewriter effects, dynamic text sizing, cinematic camera transitions, and responsive layout animations that adapt to screen size.
- **Object-Oriented Design**: Built using strict OOP principles, allowing for easy inheritance of dialogue classes and clean state management.
- **Modular Integration**: Designed to drop into existing codebases with zero friction. The system separates logic (Controller) from data (ModuleScripts), allowing designers to tweak conversations without breaking game loops.
- **Conditional Branching**: Supports complex narrative structures with unlocking choices, quest triggers, and event callbacks directly within the dialogue nodes.