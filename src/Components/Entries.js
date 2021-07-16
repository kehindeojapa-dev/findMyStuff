import React, { useState } from "react";

// Style
import "./styles/Entries.css";

// Data
import { data } from "../sample";

// Import Component
import Footer from "./Footer";
import NewEntry from "./NewEntry";
const Entries = () => {
  // App States
  const [showEntry, setShowEntry] = useState(false);
  return (
    <>
      <section className="entries-container">
        <div className="entries-intro">
          <h1>{"Daniel's"} Items</h1>
          <button className="entries-searchBtn">Search</button>
        </div>
        <section className="entries-addition">
          <p>Click to add new entry</p>
          <button
            className="entries-addBtn"
            onClick={() => setShowEntry(!showEntry)}
          >
            +
          </button>
        </section>

        {/* newEntry form is activated here */}
        {showEntry && <NewEntry showEntry={setShowEntry} />}

        <section className="entry-container">
          <h2>Tracked Items</h2>
          {data.map((item) => {
            return (
              <section className="entry">
                <div className="entry-row1">
                  <h3>{item.name}</h3>
                  <h4>
                    Location: <span>{item.location}</span>
                  </h4>
                  <p className="priority">{item.priority}</p>
                </div>
                <div className="entry-row2">
                  <p className="entry-dio">{item.description}</p>
                  <div>
                    <button className="entry-updateBtn">Update</button>
                    <button className="entry-deleteBtn">Delete</button>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
        <section className="entry-location">
          <p>View items based on location</p>
          <button>location view</button>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Entries;
