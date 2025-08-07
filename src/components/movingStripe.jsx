import React from "react";
import "./MovingStripe.css"; 

function MovingStripe() {

  const items = [
        "FEATURE RICH",
        "END-TO-END WEB APP",
        "RESPONSIVE",
        "ROBUST",
        "SCALABLE",
        "SECURE",
        "ACCESSIBLE",
        "USER FRIENDLY",
        "PERFORMANT",
        "OPTIMIZED",
        "MODULAR",
        "FAST LOADING",
        "CLEAN CODE",
        "SEAMLESS UX",
        "MAINTAINABLE"
    ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <span className="item-collection-1">
          {items.map((text, index) => (
            <span>
            <span className="item" key={`col1-${index}`}>{text}</span>
                <span class='star'>&#10025;</span>
            </span>
          ))}
        </span>
        <span className="item-collection-2">
          {items.map((text, index) => (
            <span>
                <span className="item" key={`col2-${index}`}>{text}</span>
                <span class='star'>&#10025;</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default MovingStripe;
