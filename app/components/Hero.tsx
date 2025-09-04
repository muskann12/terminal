'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Shield geometry
    const shieldGeometry = new THREE.RingGeometry(1, 1.5, 8);
    const shieldMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00FF94, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    scene.add(shield);

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.computeBoundingSphere();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00FF94,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      shield.rotation.y += 0.01;
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-10"
    >
      {/* Three.js canvas container */}
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Decorative floating dots */}
      <div className="absolute inset-0 z-5">
        <div className="floating-element absolute top-20 left-10 w-3 h-3 md:w-4 md:h-4 bg-[#00FF94] rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-10 md:right-20 w-4 h-4 md:w-5 md:h-5 bg-[#FF2E63] rounded-full opacity-40"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-[#00FF94] rounded-full opacity-50"></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 text-center w-full mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Headline section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 md:mb-6 cyber-gradient neon-text leading-tight">
            CYBER
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">FORTRESS</span>
          </h1>
          
          {/* Typing animation text */}
          <div className="text-xl sm:text-2xl mb-6 md:mb-8 text-gray-300 font-light tracking-wide">
            <span className="typing-animation">Advanced Security Solutions</span>
          </div>
        </div>
        
        {/* Description text */}
        <p className="text-lg sm:text-xl mb-8 md:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
          Enterprise-grade cybersecurity tools and dark web monitoring.
          <br className="hidden sm:block" />
          <span className="text-[#00FF94] font-medium">Protect your digital assets.</span>
        </p>

        {/* Action buttons - Made smaller for desktop */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-14 px-2">
          <button 
            onClick={() => scrollToSection('breach-checker')}
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            CHECK BREACHES
          </button>
          <button 
            onClick={() => scrollToSection('tools')}
            className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#FF2E63] text-[#FF2E63] font-bold rounded-lg hover:bg-[#FF2E63]/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            EXPLORE TOOLS
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#00B4FF] text-[#00B4FF] font-bold rounded-lg hover:bg-[#00B4FF]/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            LEARN MORE
          </button>
        </div>

        {/* Stats cards */}
        <div className="w-full px-2 sm:px-4 mb-6 md:mb-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1 */}
            <div className="p-3 sm:p-4 rounded-lg border border-[#00FF94]/50 text-center backdrop-blur-sm neon-glow-green">
              <div className="text-xl sm:text-2xl font-bold text-[#00FF94]">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Security Tools</div>
            </div>
            {/* Card 2 */}
            <div className="p-3 sm:p-4 rounded-lg border border-[#FF2E63]/50 text-center backdrop-blur-sm neon-glow-pink">
              <div className="text-xl sm:text-2xl font-bold text-[#FF2E63]">24/7</div>
              <div className="text-xs sm:text-sm text-gray-300">Monitoring</div>
            </div>
            {/* Card 3 */}
            <div className="p-3 sm:p-4 rounded-lg border border-[#00FF94]/50 text-center backdrop-blur-sm neon-glow-green">
              <div className="text-xl sm:text-2xl font-bold text-[#00FF94]">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#00FF94] rounded-full flex justify-center neon-glow-green">
          <div className="w-1.5 h-2.5 bg-[#00FF94] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* CSS-in-JS styles */}
      <style jsx>{`
        .neon-glow-green {
          box-shadow: 0 0 5px #00FF94;
          animation: pulse-green 2s infinite alternate;
        }
        .neon-glow-pink {
          box-shadow: 0 0 5px #FF2E63;
          animation: pulse-pink 2s infinite alternate;
        }
        .neon-text {
          text-shadow: 0 0 5px #00FF94;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 5px #00FF94; }
          100% { box-shadow: 0 0 10px #00FF94; }
        }
        @keyframes pulse-pink {
          0% { box-shadow: 0 0 5px #FF2E63; }
          100% { box-shadow: 0 0 10px #FF2E63; }
        }
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #00FF94;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00FF94 }
        }
        /* Hide floating dots on mobile for better performance */
        @media (max-width: 640px) {
          .floating-element {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;