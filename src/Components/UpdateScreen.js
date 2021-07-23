import React, { useState } from "react";

// Style
import "./styles/UpdateScreen.css";

const locations = [
  { id: 1, location: "Attic" },
  { id: 2, location: "Garage" },
  { id: 3, location: "Wardrobe" },
];

const UpdateScreen = ({ showUpdate }) => {
  const [showNew, setShowNew] = useState(false);
  const [locationText, setLocationText] = useState("New Location?");

  const showNewLocation = () => {
    setShowNew(!showNew);
    if (locationText === "New Location?") {
      setLocationText("Old Location?");
    } else {
      setLocationText("New Location?");
    }
  };

  const NewLocation = () => {
    return (
      <>
        <input
          type="text"
          name="new-location"
          placeholder="Enter new location"
        />
      </>
    );
  };

  return (
    <section className="update-container">
      <button className="update-closebtn" onClick={() => showUpdate(false)}>
        X
      </button>
      <form method="post" className="update-form">
        <h2>Update Item</h2>
        <div className="update-location-flex">
          <label htmlFor="location">Change Location</label>
          <input
            type="button"
            value={locationText}
            onClick={() => showNewLocation()}
            className="location-btn"
          />
        </div>
        {showNew ? (
          <NewLocation />
        ) : (
          <select name="location">
            <option value="unselected">select a location</option>;
            {locations.map((storage) => {
              return (
                <option key={storage.id} value={storage.location}>
                  {storage.location}
                </option>
              );
            })}
          </select>
        )}

        <label htmlFor="new-desc">Describe Location</label>
        <textarea name="new-desc"></textarea>
        <label htmlFor="priority">Change priority</label>
        <select name="priority">
          <option value="undefined">select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="submit" value="Update" className="update-submitbtn" />
      </form>
    </section>
  );
};

export default UpdateScreen;
