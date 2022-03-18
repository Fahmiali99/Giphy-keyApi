import React from "react";

const giphy = process.env.YOUR_API_KEY;
console.log(giphy);

function Giphy() {
  return (
    <div className="text-center">
      <h1>Giphy Key Api</h1>
    </div>
  );
}

export default Giphy;
