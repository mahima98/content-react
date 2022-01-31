import React from "react";
import Menu from "./Menu.js";

export default function Header({ username, brandname}) {
  console.log(brandname);
  return (
    <div className="header-container">
      <header className="flex justify-between px-2 py-4 border-b max-w-5xl mx-auto">
        <div className="text-xl py-2 px-2">{brandname}</div>
        <Menu userName={username} />
      </header>
    </div>
  );
}
