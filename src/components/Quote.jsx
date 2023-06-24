import React from "react";

function Quote({heading}) {
  return (
    <div className="mb-5 text-center">
      <h1 className="text-4xl font-bold mb-5 lg:mb-10">{heading}</h1>

      <h2 className="text-lg text-gray-700 mb-2">
        Register to control your cinema account and
      </h2>

      <h3 className="text-lg">Follow everythin related to it</h3>
    </div>
  );
}

export default Quote;
