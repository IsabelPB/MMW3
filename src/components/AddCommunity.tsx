import React, { useState } from "react";

const AddCommunityButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("");

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleAddCommunity = () => {
    // You can implement the logic to add a community here
    console.log("Adding community:", communityName, communityType);
    // Reset the form
    setCommunityName("");
    setCommunityType("");
    // Close the popup
    closePopup();
  };

  return (
    <main>
      <div className="m-30">
        <p>Communities</p>
      </div>
      <div className="flex justify-start ml-20 ">
        <button
          onClick={openPopup}
          className="bg-blue-500 text-white p-2 rounded-xl"
        >
          Community +
        </button>
        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2">Add a Community</h2>
              <label className="block mb-2 text-zinc-800">
                Community Name:
              </label>
              <input
                type="text"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                className="w-full p-2 mb-2 border text-zinc-800 border-gray-300 rounded"
              />
              <label className="block mb-2 text-zinc-800">
                Community Type (e.g., Movies or Music):
              </label>
              <input
                type="text"
                value={communityType}
                onChange={(e) => setCommunityType(e.target.value)}
                className="w-full p-2 mb-2 border border-gray-300 text-zinc-800 rounded"
              />
              <button
                onClick={handleAddCommunity}
                className="bg-blue-500 text-white rounded p-2 mr-2"
              >
                Add
              </button>
              <button
                onClick={closePopup}
                className="bg-gray-300 text-gray-700 rounded p-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AddCommunityButton;
