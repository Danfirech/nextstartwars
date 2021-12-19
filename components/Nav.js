import React from "react";

export default function Nav() {
  return (
    <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
      <div>Starwars API</div>
      <div>
        <div>People</div>
        <div>Planets</div>
        <div>Vehicles</div>
      </div>
    </div>
  );
}
