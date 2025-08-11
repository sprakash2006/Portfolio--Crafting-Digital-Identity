import React, { useState, useEffect, useRef } from 'react';

const StarfieldAnimation = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [magneticStars, setMagneticStars] = useState([]);
  const starIdCounter = useRef(0);
  const animationRef = useRef();

  // Generate initial magnetic stars
  useEffect(() => {
    const initialStars = [];
    for (let i = 0; i < 120; i++) { // Reduced from 150 to 100
      initialStars.push({
        id: starIdCounter.current++,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5, // Smaller stars: 0.5-2.5px
        opacity: Math.random() * 0.4 + 0.3, // Reduced opacity: 0.3-0.7
        vx: (Math.random() - 0.5) * 0.5, // Minimal horizontal drift
        vy: -(Math.random() * 1 + 0.5), // Upward movement: -0.5 to -1.5
        life: 1,
        isDissolving: false
      });
    }
    setMagneticStars(initialStars);
  }, []);

  // Generate background stars for the original animation
  const generateBackgroundStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      stars.push(`${x}px ${y}px rgba(255,255,255,0.3)`);
    }
    return stars.join(', ');
  };

  const backgroundStars = generateBackgroundStars(200); // Reduced from 300

  // Handle mouse movement with optimized updates
  useEffect(() => {
    let animationFrame;
    
    const handleMouseMove = (e) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setMousePos({ 
          x: e.clientX, 
          y: e.clientY,
          normalizedX: (e.clientX / window.innerWidth - 0.5) * 2,
          normalizedY: (e.clientY / window.innerHeight - 0.5) * 2
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Animation loop for magnetic stars
  useEffect(() => {
    const animate = () => {
      setMagneticStars(prevStars => {
        const newStars = [...prevStars];
        const cursorRadius = 25; // Slightly smaller dissolution radius
        const magnetRadius = 150; // Smaller magnetic field
        const magnetStrength = 0.3; // Much gentler magnetic force

        // Update existing stars
        for (let i = newStars.length - 1; i >= 0; i--) {
          const star = newStars[i];
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Check if star should be dissolved
          if (distance < cursorRadius && !star.isDissolving) {
            star.isDissolving = true;
            star.life = 1;
          }

          // Apply magnetic force
          if (distance < magnetRadius && distance > 0) {
            const force = (magnetRadius - distance) / magnetRadius * magnetStrength;
            const angle = Math.atan2(dy, dx);
            star.vx += Math.cos(angle) * force;
            star.vy += Math.sin(angle) * force;
          }

          // Apply gentle velocity with natural upward flow
          star.vx *= 0.99; // High damping for smooth horizontal movement
          star.vy *= 0.99;
          star.x += star.vx;
          star.y += star.vy;

          // Add constant upward drift and subtle horizontal drift
          if (!star.isDissolving) {
            star.vx += (Math.random() - 0.5) * 0.005; // Very subtle horizontal drift
            star.vy += -0.01; // Constant gentle upward force
            
            // Limit velocity ranges
            const maxVelX = 1;
            const maxVelY = 2;
            star.vx = Math.max(-maxVelX, Math.min(maxVelX, star.vx));
            star.vy = Math.max(-maxVelY, Math.min(0.5, star.vy)); // Allow mostly upward movement
          }

          // Slower, gentler dissolve animation
          if (star.isDissolving) {
            star.life -= 0.02; // Slower fade
            star.opacity = star.life;
            star.size = star.size * 1.05; // Gentler expansion
            
            if (star.life <= 0) {
              newStars.splice(i, 1);
              continue;
            }
          }

          // Keep stars within bounds - regenerate stars that move off screen
          if (star.x < -100) star.x = window.innerWidth + 100;
          if (star.x > window.innerWidth + 100) star.x = -100;
          
          // When stars reach the top, wrap them to the bottom
          if (star.y < -100) {
            star.y = window.innerHeight + 100;
            star.x = Math.random() * window.innerWidth; // Randomize x position when wrapping
          }
          
          // Remove stars that go too far down (shouldn't happen with upward flow)
          if (star.y > window.innerHeight + 100) {
            newStars.splice(i, 1);
            continue;
          }
        }

        // Count dissolved stars and generate equal number of new stars at bottom
        const dissolvedStarsCount = prevStars.length - newStars.length;
        
        for (let i = 0; i < dissolvedStarsCount; i++) {
          // Generate new stars at the bottom of the screen to flow upward
          const x = Math.random() * window.innerWidth;
          const y = window.innerHeight + Math.random() * 100; // Start below screen

          newStars.push({
            id: starIdCounter.current++,
            x: x,
            y: y,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.3,
            vx: (Math.random() - 0.5) * 0.5, // Minimal horizontal drift
            vy: -(Math.random() * 1 + 0.5), // Upward movement
            life: 1,
            isDissolving: false
          });
        }

        return newStars;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(ellipse at bottom, black 0%, #090A0F 100%)',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'none',
    },
    
    backgroundStars: {
      width: '1px',
      height: '1px',
      background: 'transparent',
      boxShadow: backgroundStars,
      animation: 'animStar 100s linear infinite',
      position: 'absolute',
      transform: `translate(${mousePos.normalizedX * 5}px, ${mousePos.normalizedY * 5}px)`,
      transition: 'transform 0.8s ease-out',
    },
    
    title: {
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      color: '#FFF',
      textAlign: 'center',
      fontFamily: "'Lato', sans-serif",
      fontWeight: '300',
      fontSize: '50px',
      letterSpacing: '10px',
      marginTop: '-60px',
      paddingLeft: '10px',
      background: 'linear-gradient(to bottom, white, #38495a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      transform: `translate(${mousePos.normalizedX * 2}px, ${mousePos.normalizedY * 2}px)`,
      transition: 'transform 0.6s ease-out',
      zIndex: 10,
    },
    
    magneticStar: (star) => ({
      position: 'absolute',
      left: `${star.x - star.size/2}px`,
      top: `${star.y - star.size/2}px`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      background: star.isDissolving 
        ? `radial-gradient(circle, rgba(255,255,255,${star.opacity}) 0%, rgba(255,220,150,${star.opacity * 0.3}) 60%, transparent 100%)`
        : '#fff',
      borderRadius: '50%',
      opacity: star.opacity,
      boxShadow: star.isDissolving 
        ? `0 0 ${star.size * 3}px rgba(255,255,255,${star.opacity * 0.4})`
        : `0 0 ${star.size * 0.5}px rgba(255,255,255,0.3)`,
      transition: star.isDissolving ? 'none' : 'opacity 0.3s ease-out',
      pointerEvents: 'none',
      transform: 'translate3d(0, 0, 0)', // GPU acceleration
      willChange: 'transform', // Optimize for frequent position changes
    }),
    
    cursor: {
      position: 'fixed',
      left: `${mousePos.x - 15}px`,
      top: `${mousePos.y - 15}px`,
      width: '30px',
      height: '30px',
      border: '2px solid rgba(255,255,255,0.6)',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 1000,
      background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
      transform: 'translate3d(0, 0, 0)', // GPU acceleration
      willChange: 'transform', // Optimize for frequent changes
    },
    
    cursorCore: {
      position: 'fixed',
      left: `${mousePos.x - 3}px`,
      top: `${mousePos.y - 3}px`,
      width: '6px',
      height: '6px',
      background: '#fff',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 1001,
      boxShadow: '0 0 10px rgba(255,255,255,0.8)',
      transform: 'translate3d(0, 0, 0)', // GPU acceleration
      willChange: 'transform', // Optimize for frequent changes
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
          
          @keyframes animStar {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-2000px);
            }
          }
          
          .backgroundStars::after {
            content: " ";
            position: absolute;
            top: 2000px;
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: ${backgroundStars};
          }
        `}
      </style>
      
      <div style={styles.container}>
        {/* Background animated stars */}
        <div className="backgroundStars" style={styles.backgroundStars}></div>
        
        {/* Magnetic interactive stars */}
        {magneticStars.map(star => (
          <div
            key={star.id}
            style={styles.magneticStar(star)}
          />
        ))}
        
        <div style={styles.title}>
          <span></span>
        </div>
        
        {/* Cursor */}
        <div style={styles.cursor}></div>
        <div style={styles.cursorCore}></div>
      </div>
    </>
  );
};

export default StarfieldAnimation;