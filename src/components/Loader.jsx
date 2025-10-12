import React, { useState, useEffect } from "react";

const CompactLoader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("initializing");
  const [particles, setParticles] = useState([]);

  // Progress Logic (Fixed)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        let newProgress = prev + 1.5; // slower and smoother
        if (newProgress <= 30) setPhase("initializing");
        else if (newProgress <= 70) setPhase("processing");
        else setPhase("finalizing");

        if (newProgress >= 100) {
          newProgress = 0; // loop again
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Floating particles
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
      minHeight: "100vh",
      background: `
        radial-gradient(ellipse at center, #1a0033 0%, #0d001a 50%, #000000 100%),
        radial-gradient(ellipse at top right, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(75, 0, 130, 0.1) 0%, transparent 50%)
      `,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Exo 2', sans-serif",
    },

    starField: {
      position: "absolute",
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
      backgroundSize:
        "300px 300px, 250px 250px, 180px 180px, 320px 320px, 200px 200px, 350px 350px, 150px 150px, 280px 280px",
      animation:
        "starTwinkle 3s ease-in-out infinite alternate, starMove 25s linear infinite",
    },

    loaderContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      padding: "40px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      minWidth: "400px",
      zIndex: 10,
    },

    titleText: {
      fontSize: "32px",
      fontWeight: "300",
      letterSpacing: "4px",
      textTransform: "uppercase",
      background: "linear-gradient(45deg, #ffffff, #e0e0e0, #ffffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      backgroundSize: "200% 200%",
      animation: "textShimmer 3s ease-in-out infinite",
      textAlign: "center",
    },

    progressBar: {
      width: "100%",
      height: "12px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "6px",
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.5)",
      position: "relative",
    },

    progressFill: {
      height: "100%",
      width: `${progress}%`,
      background: `linear-gradient(90deg, 
        ${
          phase === "initializing"
            ? "rgba(0, 191, 255, 0.9), rgba(138, 43, 226, 0.8)"
            : phase === "processing"
            ? "rgba(0, 255, 127, 0.9), rgba(0, 191, 255, 0.8)"
            : "rgba(255, 20, 147, 0.9), rgba(138, 43, 226, 0.8)"
        }
      )`,
      borderRadius: "6px",
      boxShadow: `
        0 0 25px ${
          phase === "initializing"
            ? "#00bfff"
            : phase === "processing"
            ? "#00ff7f"
            : "#ff1493"
        },
        inset 0 0 15px rgba(255, 255, 255, 0.2)
      `,
      transition: "all 0.5s ease",
    },

    mainStatus: {
      fontSize: "18px",
      fontWeight: "300",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: `${
        phase === "initializing"
          ? "#00bfff"
          : phase === "processing"
          ? "#00ff7f"
          : "#ff69b4"
      }`,
      textShadow: `0 0 20px ${
        phase === "initializing"
          ? "#00bfff"
          : phase === "processing"
          ? "#00ff7f"
          : "#ff1493"
      }`,
    },

    percentageText: {
      fontSize: "24px",
      fontWeight: "400",
      color: "white",
      textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
    },
  };

  const getStatusText = () => {
    switch (phase) {
      case "initializing":
        return { main: "Initializing", sub: "Setting up components..." };
      case "processing":
        return { main: "Processing", sub: "Analyzing data..." };
      case "finalizing":
        return { main: "Finalizing", sub: "Preparing output..." };
      default:
        return { main: "Loading", sub: "Please wait..." };
    }
  };

  const statusInfo = getStatusText();

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500&display=swap');
          @keyframes starTwinkle { 0% {opacity: 0.4;} 100% {opacity: 1;} }
          @keyframes starMove { 0% {transform: translateY(0);} 100% {transform: translateY(-100px);} }
          @keyframes textShimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.starField}></div>
        <div style={styles.loaderContainer}>
          <div style={styles.titleText}>Loading</div>

          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>

          <div style={styles.mainStatus}>{statusInfo.main}</div>
          <div style={styles.percentageText}>{Math.round(progress)}%</div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
            {statusInfo.sub}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompactLoader;
