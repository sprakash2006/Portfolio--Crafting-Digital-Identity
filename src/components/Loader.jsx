import React, { useState, useEffect } from 'react';

const CompactLoader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('initializing');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 3.5;
        
        if (newProgress <= 30) {
          setPhase('initializing');
        } else if (newProgress <= 70) {
          setPhase('processing');
        } else {
          setPhase('finalizing');
        }
        
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at center, #1a0033 0%, #0d001a 50%, #000000 100%),
        radial-gradient(ellipse at top right, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(75, 0, 130, 0.1) 0%, transparent 50%)
      `,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Exo 2', sans-serif",
    },

    starField: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(2px 2px at 15% 20%, rgba(255,255,255,0.9), transparent),
        radial-gradient(1px 1px at 85% 15%, rgba(200,200,255,0.8), transparent),
        radial-gradient(1px 1px at 25% 80%, rgba(255,200,200,0.7), transparent),
        radial-gradient(2px 2px at 75% 70%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1px 1px at 50% 30%, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 90% 85%, rgba(200,255,200,0.6), transparent),
        radial-gradient(1px 1px at 10% 90%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1px 1px at 60% 10%, rgba(255,200,255,0.6), transparent)
      `,
      backgroundSize: '300px 300px, 250px 250px, 180px 180px, 320px 320px, 200px 200px, 350px 350px, 150px 150px, 280px 280px',
      animation: 'starTwinkle 3s ease-in-out infinite alternate, starMove 25s linear infinite',
    },

    nebulaEffect: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      animation: 'nebulaFlow 18s ease-in-out infinite alternate',
    },

    loaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      padding: '40px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      minWidth: '400px',
      zIndex: 10,
    },

    titleText: {
      fontSize: '32px',
      fontWeight: '300',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      background: 'linear-gradient(45deg, #ffffff, #e0e0e0, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '200% 200%',
      animation: 'textShimmer 3s ease-in-out infinite',
      textAlign: 'center',
      marginBottom: '10px',
    },

    progressContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },

    progressBar: {
      width: '100%',
      height: '12px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.5)',
      position: 'relative',
    },

    progressFill: {
      height: '100%',
      width: `${progress}%`,
      background: `linear-gradient(90deg, 
        ${phase === 'initializing' 
          ? 'rgba(0, 191, 255, 0.9), rgba(138, 43, 226, 0.8)' 
          : phase === 'processing' 
          ? 'rgba(0, 255, 127, 0.9), rgba(0, 191, 255, 0.8)' 
          : 'rgba(255, 20, 147, 0.9), rgba(138, 43, 226, 0.8)'
        }
      )`,
      borderRadius: '6px',
      boxShadow: `
        0 0 25px ${phase === 'initializing' ? '#00bfff' : phase === 'processing' ? '#00ff7f' : '#ff1493'},
        inset 0 0 15px rgba(255, 255, 255, 0.2)
      `,
      transition: 'all 0.8s ease',
      position: 'relative',
      animation: 'progressPulse 2s ease-in-out infinite',
    },

    progressGlow: {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '30px',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
      animation: 'progressShine 3s ease-in-out infinite',
    },

    statusText: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },

    mainStatus: {
      fontSize: '18px',
      fontWeight: '300',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: `${phase === 'initializing' ? '#00bfff' : phase === 'processing' ? '#00ff7f' : '#ff69b4'}`,
      textShadow: `0 0 20px ${phase === 'initializing' ? '#00bfff' : phase === 'processing' ? '#00ff7f' : '#ff1493'}`,
      animation: 'statusGlow 2s ease-in-out infinite alternate',
    },

    percentageText: {
      fontSize: '24px',
      fontWeight: '400',
      color: 'white',
      textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
    },

    subStatus: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      fontWeight: '300',
      letterSpacing: '1px',
    },

    orbitalRing: (index) => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${200 + index * 60}px`,
      height: `${200 + index * 60}px`,
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '50%',
      animation: `orbit ${8 + index * 2}s linear infinite ${index % 2 === 0 ? 'normal' : 'reverse'}`,
      zIndex: 1,
    }),

    floatingParticle: (particle) => ({
      position: 'absolute',
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
      borderRadius: '50%',
      animation: `particleFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s alternate`,
      pointerEvents: 'none',
    }),
  };

  const getStatusText = () => {
    switch (phase) {
      case 'initializing':
        return {
          main: 'Initializing',
          sub: 'Setting up system components...'
        };
      case 'processing':
        return {
          main: 'Processing',
          sub: 'Analyzing data streams...'
        };
      case 'finalizing':
        return {
          main: 'Finalizing',
          sub: 'Preparing final output...'
        };
      default:
        return {
          main: 'Loading',
          sub: 'Please wait...'
        };
    }
  };

  const statusInfo = getStatusText();

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500&display=swap');
          
          @keyframes starTwinkle {
            0% { opacity: 0.4; }
            100% { opacity: 1; }
          }
          
          @keyframes starMove {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-100px); }
          }
          
          @keyframes nebulaFlow {
            0% { 
              transform: rotate(0deg) scale(1);
              opacity: 0.6;
            }
            100% { 
              transform: rotate(360deg) scale(1.3);
              opacity: 0.9;
            }
          }
          
          @keyframes textShimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes progressShine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(400px); }
            100% { transform: translateX(400px); }
          }
          
          @keyframes progressPulse {
            0%, 100% { box-shadow: 0 0 25px currentColor, inset 0 0 15px rgba(255, 255, 255, 0.2); }
            50% { box-shadow: 0 0 35px currentColor, inset 0 0 20px rgba(255, 255, 255, 0.3); }
          }
          
          @keyframes statusGlow {
            0% { text-shadow: 0 0 20px currentColor; }
            100% { text-shadow: 0 0 30px currentColor, 0 0 40px currentColor; }
          }
          
          @keyframes orbit {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          
          @keyframes particleFloat {
            0% { transform: translateY(0px) scale(1); opacity: 0.3; }
            100% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
          }
        `}
      </style>
      
      <div style={styles.container}>
        <div style={styles.starField}></div>
        <div style={styles.nebulaEffect}></div>
        
        {/* Orbital Rings */}
        {[0, 1, 2].map(index => (
          <div key={index} style={styles.orbitalRing(index)}></div>
        ))}
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div key={particle.id} style={styles.floatingParticle(particle)}></div>
        ))}
        
        <div style={styles.loaderContainer}>
          <div style={styles.titleText}>
            Loading
          </div>
          
          <div style={styles.progressContainer}>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}>
                <div style={styles.progressGlow}></div>
              </div>
            </div>
            
            <div style={styles.statusText}>
              <div style={styles.mainStatus}>
                {statusInfo.main}
              </div>
              <div style={styles.percentageText}>
                {Math.round(progress)}%
              </div>
              <div style={styles.subStatus}>
                {statusInfo.sub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompactLoader;