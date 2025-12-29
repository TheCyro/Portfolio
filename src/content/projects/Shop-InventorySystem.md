---
title: "Shop & Inventory System"
description: "A comprehensive economy suite featuring a JSON-backed inventory, high-performance shop interface, and a secure, extensible currency manager."
image: "../../assets/projects/cover.jpg"
thumbnail: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_icture.png" 
thumbnail_video: "https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_video1.mp4"
role: "UI/System Dev"
genre: "RPG / Economy"
stack: ["Luau", "OOP", "JSON", "Roact"]
order: 3
---

# Overview
This project is a comprehensive **economy and management suite** designed to handle complex player data with efficiency. It combines three distinct but deeply integrated modules: a **JSON-backed Inventory**, a **High-Performance Shop**, and a **Secure Currency System**. The architecture prioritizes strict object-oriented patterns, ensuring that adding new items, currencies, or shop categories requires no code changes—only configuration updates.

## System Demos
Below are demonstrations of the inventory management and shop interaction workflows.

### 1. Inventory Management
<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_icture.png">
  <!-- Replace with your Inventory video link -->
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_video1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### 2. Shop & Purchasing
<video controls autoplay loop muted playsinline preload="metadata" poster="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_icture.png">
  <!-- Replace with your Shop/Currency video link -->
  <source src="https://raw.githubusercontent.com/TheCyro/Portfolio/main/Media/Shop-InventorySystem_video2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Key Features
- **JSON-Powered Inventory**: A fully modular, object-oriented framework powered by JSON registry tables. It is built for flexibility, allowing for easy maintenance and seamless integration into any project structure without hard dependencies.
- **High-Performance Shop**: Designed for speed, this fully modular object-oriented system is clean, easy to use, and highly customizable. It handles rapid transactions and UI updates efficiently, even with large item catalogs.
- **Flexible Currency Manager**: A highly flexible, secure, and maintainable backend. It is designed to allow easy addition and customization of multiple currency types (e.g., Gold, Gems, Event Tokens) with specific behaviors and functional limits.
- **Seamless Data Flow**: The three systems communicate via strict interfaces, ensuring that purchasing an item correctly deducts currency and instantiates the item in the inventory with zero race conditions or data desyncs.