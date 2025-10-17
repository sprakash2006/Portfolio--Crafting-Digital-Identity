import React from 'react'

export default function WaveText() {
  const text = "PRAKASH SWAMI";
  
  return (
    <>
      <span className="wave-text">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="wave-letter"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      
      <style jsx>{`
        .wave-text {
          display: inline-flex;
          gap: 0;
        }
        
        .wave-letter {
          display: inline-block;
          animation: wave 1.5s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </>
  );
}