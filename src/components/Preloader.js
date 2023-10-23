import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";





const Preloader = (props) => {
  const mountRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const particleRotationSpeed = 0.0004;

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;  // Disable zoom

    let textMesh;

    // Parallax Effect
    mount.addEventListener("mousemove", (event) => {
      if(!textMesh) return;
      let mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      let mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      textMesh.rotation.y = mouseX * 0.09;  // adjust these values to change the intensity
      textMesh.rotation.x = mouseY * 0.2;
    });

    // Background Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 25;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xffffff,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    camera.position.z = 10;
    if (window.innerWidth <= 480) {  // Small mobile devices
        camera.position.z = 15;
    } else if (window.innerWidth <= 768) {  // Tablets
        camera.position.z = 12;
    }

    // 3D Text
    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      function (font) {
        let textSize = 1;  // default size
if (window.innerWidth <= 480) {  // Small mobile devices
    textSize = 0.5;
} else if (window.innerWidth <= 768) {  // Tablets
    textSize = 0.8;
}
        const textGeometry = new TextGeometry('Equinox IIITL', {
          font: font,
          size: textSize,
          height: 0.01,
        });
        textGeometry.computeBoundingBox();
        const xOffset =
          -0.5 *
          (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
        const yOffset =
          -0.5 *
          (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);
        const zOffset =
          -0.5 *
          (textGeometry.boundingBox.max.z - textGeometry.boundingBox.min.z);

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(xOffset, yOffset, zOffset);

        scene.add(textMesh);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += particleRotationSpeed;  // Rotate the particles
      controls.update();
      renderer.render(scene, camera);
 
    
    };

    animate();

    //diving to 3d text effect

    const handleWheel = (event) => {
        const zoomSpeed = 0.1;
        camera.position.z -= zoomSpeed * Math.sign(event.deltaY);
    
        // Limits to control the camera's position
        const MIN_Z = 0.09;  // Closest point
        const MAX_Z = 10;    // Farthest point
        camera.position.z = Math.max(camera.position.z, MIN_Z);
        camera.position.z = Math.min(camera.position.z, MAX_Z);
    
        controls.update();
        renderer.render(scene, camera);

// Unlock scrolling during transition
     
    
        // Inform the parent component about the camera's position
        if (props.onCameraPositionChange) {
            props.onCameraPositionChange(camera.position.z);
        }
    };
    
  
      window.addEventListener("wheel", handleWheel);


      //responsiveness and mediaqueries

      const onWindowResize = () => {
        // Update camera aspect ratio and renderer size
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    

    return () => {
        
      mount.removeChild(renderer.domElement);
      window.removeEventListener("scroll", handleWheel);
      window.removeEventListener('resize', onWindowResize);

    }

  }, [props]);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Preloader;
