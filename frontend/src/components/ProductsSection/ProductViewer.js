import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ProductViewer({ product }) {
   const containerRef = useRef();
   const meshRef = useRef();

   useEffect(() => {
      // Remove any existing canvases in the container
      while (containerRef.current.firstChild) {
         containerRef.current.firstChild.remove();
      }

      // Set up scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
         75,
         window.innerWidth / window.innerHeight,
         0.1,
         1000,
      );
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      containerRef.current.appendChild(renderer.domElement);

      // Add lighting
      const light = new THREE.AmbientLight(0xffffff);
      scene.add(light);

      // Add directional light to illuminate the meshes
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // Create mesh based on the selected product
      let geometry;
      switch (product) {
         case 'kombucha':
            geometry = new THREE.BoxGeometry();
            break;
         case 'kimchi':
            geometry = new THREE.SphereGeometry();
            break;
         case 'sauerkraut':
            geometry = new THREE.CylinderGeometry();
            break;
         case 'water-kefir':
            geometry = new THREE.ConeGeometry();
            break;
         default:
            geometry = new THREE.BoxGeometry();
      }
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      meshRef.current = mesh;
      scene.add(mesh);

      // Animate the scene
      const animate = () => {
         requestAnimationFrame(animate);

         // Rotate the mesh
         mesh.rotation.x += 0.01;
         mesh.rotation.y += 0.01;

         renderer.render(scene, camera);
      };
      animate();

      // Handle resizing
      window.addEventListener('resize', () => {
         const width = window.innerWidth;
         const height = window.innerHeight;
         renderer.setSize(width, height);
         camera.aspect = width / height;
         camera.updateProjectionMatrix();
      });

      return () => {
         // Cleanup
         renderer.dispose();
      };
   }, [product]);

   return <div ref={containerRef} className='product-viewer'></div>;
}

export default ProductViewer;
