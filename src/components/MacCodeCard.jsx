import React from "react";
import "./MacCodeCard.css";

const MacCodeCard = () => {
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
  "email": "prakashswami150569@gamil.com",
  "mobile": "+91 8767690131",
  "linkedin": "https://www.linkedin.com/in/prakash-swami",
  "github": "https://github.com/sprakash2006",
  "leetcode":"https://leetcode.com/u/sprakash_001",
  "hackerrank": "https://www.hackerrank.com/profile/prakashswami1501"
}
`}</code>
        </pre>
      </div>
    </div>
  );
};

export default MacCodeCard;
