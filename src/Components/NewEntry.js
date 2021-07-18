import React, { useState } from "react";

// Style Import
import "./styles/NewEntry.css";

const locations = [
  { id: 1, location: "Attic" },
  { id: 2, location: "Garage" },
  { id: 3, location: "Wardrobe" },
];

const NewEntry = ({ showEntry }) => {
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
        <input type="text" name="newlocation" />
      </>
    );
  };

  return (
    <>
      <section className="newentry">
        <button onClick={() => showEntry(false)} className="newentry-closebtn">
          X
        </button>
        <h2>Track New Item</h2>
        <form className="newentry-form">
          <label htmlFor="item">Item Name</label>
          <input type="text" name="item" />
          <div className="newentry-location">
            <label htmlFor="location">Pick location</label>
            <input
              type="button"
              className="newlocation-btn"
              value={locationText}
              onClick={() => showNewLocation()}
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

          <label htmlFor="description">Describe location</label>
          <textarea name="description"></textarea>
          <label htmlFor="priority">Priority</label>
          <select name="priority">
            <option value="unselected">select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input type="hidden" value={"daniel@gmail.com"} name="user" />
          <input type="submit" value="Track" />
        </form>
      </section>
    </>
  );
};

export default NewEntry;
