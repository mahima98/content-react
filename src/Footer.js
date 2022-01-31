import React from "react";

export default function Footer({ username }) {
  return (
    <div className="footer-container">
      <footer className="flex justify-between max-w-5xl mx-auto px-4">
        <div className="py-4 text-sm text-gray-600 font-light">
          @ 2021 Coffee House
        </div>
        <div className="py-4 text-blue-500">Ask a question to {username}</div>
      </footer>
    </div>
  );
}
