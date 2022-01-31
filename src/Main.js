import React from "react";
import UpdateProfileName from "./UpdateProfileName";

export default function Main({ username, brandname, onUpdateUserName}) {
  return (
    <div className="main-container">
      <div className="max-w-5xl mx-auto">
        <img
          className="bg-cover w-full h-96"
          src="https://picsum.photos/seed/picsum/600/400"
          alt="my coffee image"
        />
        <UpdateProfileName username={username} brandname={brandname} onUpdateUserName={onUpdateUserName}/>
      </div>
    </div>
  );
}
