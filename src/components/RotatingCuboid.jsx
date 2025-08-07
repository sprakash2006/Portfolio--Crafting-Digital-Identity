import React, { useEffect, useRef } from 'react';
import './RotatingCuboid.css'; // External CSS file for cleaner code

const RotatingCuboid = () => {
  const cubeRef = useRef(null);
  const sceneRef = useRef(null);
  const currentRotationX = useRef(0);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const autoRotate = useRef(true);
  const autoRotateTimeout = useRef(null);
  const fastInterval = useRef(null);
  const normalInterval = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const scene = sceneRef.current;

    // Fast initial rotation
    fastInterval.current = setInterval(() => {
      if (autoRotate.current) {
        currentRotationX.current += 4;
        cube.style.transform = `rotateX(${currentRotationX.current}deg)`;
      }
    }, 20);

    // Switch to slower speed after 1.5s
    setTimeout(() => {
      clearInterval(fastInterval.current);
      normalInterval.current = setInterval(() => {
        if (autoRotate.current) {
          currentRotationX.current += 1;
          cube.style.transform = `rotateX(${currentRotationX.current}deg)`;
        }
      }, 30);
    }, 1500);

    const onMouseDown = (e) => {
      isDragging.current = true;
      autoRotate.current = false;
      clearTimeout(autoRotateTimeout.current);
      scene.style.cursor = 'grabbing';
      startY.current = e.clientY;
    };

    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        scene.style.cursor = 'grab';
        autoRotateTimeout.current = setTimeout(() => {
          autoRotate.current = true;
        }, 2000);
      }
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const deltaY = e.clientY - startY.current;
      currentRotationX.current += deltaY * 0.5;
      cube.style.transform = `rotateX(${currentRotationX.current}deg)`;
      startY.current = e.clientY;
    };

  }, []);

  return (
    <div className="scene" ref={sceneRef}>
      <div className="cube" ref={cubeRef}>
        <div className="face front">AI Enthusiast</div>
        <div className="face back">Programmer</div>
        <div className="face top">Web Developer</div>
        <div className="face bottom">Data Analyst</div>
      </div>
    </div>
  );
};

export default RotatingCuboid;
