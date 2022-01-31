import React, { useState } from "react";

export default function UpdateProfileName({
  username,
  brandname,
  onUpdateUserName,
}) {
  const [newName, setNewName] = useState(username);
  const onClickUpdate = (e) => {
    e.preventDefault();
    onUpdateUserName(newName);
  };
  return (
    <div className="py-16">
      <h1 className="text-3xl text-center font-bold py-4">
        {brandname} Profile
      </h1>

      <h3 className="text-center pb-4">Please update your name</h3>

      <div className="bg-gray-50 border max-w-2xl mx-auto rounded-md">
        <form className="flex flex-col gap-4 py-8">
          <div className="flex flex-col mx-8">
            <label className="text-start text-sm font-light">Name:</label>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              id="üsername"
              className="h-8 border px-2 rounded-md"
            />
          </div>
          <button
            onClick={onClickUpdate}
            className="bg-blue-700 text-white rounded-md py-2 mx-8 font-light"
          >
            Update
          </button>
          <div className="border mx-8 mt-4"></div>
          <div className="mx-8 py-4 text-sm font-light">Thank you.</div>
        </form>
      </div>
    </div>
  );
}
