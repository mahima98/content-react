import React from "react";

export default function Menu({userName}) {
  return (
    <div>
      <ul className="flex">
        <li className="px-4 py-2 text-blue-500">Home</li>
        <li className="px-4 py-2 text-blue-500">Pricing</li>
        <li className="px-4 py-2 text-blue-500">FAQs</li>
        <li className="px-4 py-2 text-white bg-blue-500 rounded-md">
          {userName}'s Profile
        </li>
      </ul>
    </div>
  );
}
