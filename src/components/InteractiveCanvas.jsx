// File: src/components/InteractiveCanvas.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 300 : 800; // Reduce count for mobile battery/perf
    const RANGE = 40;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    // Darker background to make the "neon" blocks pop
    const bgCol = 0x050505; 
    scene.fog = new THREE.FogExp2(bgCol, 0.035);
    
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- Geometry (The "Stud" Look) ---
    // A BoxGeometry represents a classic Roblox Part
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8); 
    
    // Material: Plastic-like feel common in Roblox
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00a2ff, 
      roughness: 0.1,
      metalness: 0.1,
    });
    
    const mesh = new THREE.InstancedMesh(geometry, material, PARTICLE_COUNT);
    
    const dummy = new THREE.Object3D();
    const particles = [];

    // Initialize positions in a "Cloud" distribution
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * RANGE;
      const y = (Math.random() - 0.5) * RANGE;
      const z = (Math.random() - 0.5) * 20 - 5; // Keep them somewhat in front/behind
      
      dummy.position.set(x, y, z);
      
      // discrete rotation (90 degree increments) to feel like a grid/studs
      const rotX = Math.floor(Math.random() * 4) * (Math.PI / 2);
      const rotY = Math.floor(Math.random() * 4) * (Math.PI / 2);
      dummy.rotation.set(rotX, rotY, 0);

      // Random scales for variety (1x1x1, 2x1x1, etc.)
      const scaleType = Math.random();
      if(scaleType > 0.8) dummy.scale.set(1, 2, 1);
      else if(scaleType > 0.6) dummy.scale.set(2, 1, 1);
      else dummy.scale.set(1, 1, 1);
      
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      
      particles.push({
        x, y, z,
        speed: (Math.random() * 0.005) + 0.002,
        offset: Math.random() * Math.PI * 2
      });
    }
    
    scene.add(mesh);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    // Blue & Green lights to match the brand gradient
    const blueLight = new THREE.PointLight(0x00a2ff, 2, 40);
    blueLight.position.set(10, 10, 10);
    scene.add(blueLight);

    const greenLight = new THREE.PointLight(0x00ff88, 2, 40);
    greenLight.position.set(-10, -10, 5);
    scene.add(greenLight);

    camera.position.z = 12;

    // --- Animation Loop ---
    let frameId;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.005;

      // Rotate the entire system slowly
      mesh.rotation.y = time * 0.05;
      mesh.rotation.z = time * 0.02;

      // Gentle floating wave effect for individual instances
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        
        // Float up/down sine wave
        dummy.position.set(
          p.x, 
          p.y + Math.sin(time + p.offset) * 0.5, 
          p.z
        );
        
        // Re-apply static rotations/scales stored in the matrix? 
        // For performance, we usually don't update individual matrices every frame 
        // unless necessary. Here we just rotate the whole group (above).
        // If we want individual motion, we must read the matrix, modify position, write back.
        // For this simple bg, rotating the group `mesh.rotation` is much cheaper.
      }
      // mesh.instanceMatrix.needsUpdate = true; // Uncomment if updating individual particles

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', opacity: 0.5 }} />;
}