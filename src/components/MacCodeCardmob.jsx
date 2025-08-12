import React from "react";
import "./MacCodeCard.css";

const MacCodeCardmob = () => {
  return (
    <div className="card">
      <div className="mac-header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <span className="card-title">../src/Contact.json</span>
      <div className="code-editor">
        <pre>
          <code>{`  {
  "name": "Prakash Swami",
  "mail": "prakashswami150569@gamil.com",
  "mobile": "+91 8767690131",
}
`}</code>
        </pre>
      </div>
    </div>
  );
};

export default MacCodeCardmob;
