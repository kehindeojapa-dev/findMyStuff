import React from "react";

// Style
import "./styles/DeleteScreen.css";

const DeleteScreen = ({ showDelete }) => {
  return (
    <section className="delete-container">
      <button className="close-btn" onClick={() => showDelete(false)}>
        X
      </button>
      <h2>Are you sure you want to delete item</h2>
      <div className="delete-buttons">
        <button className="yes-btn">Yes</button>
        <button className="no-btn" onClick={() => showDelete(false)}>
          No
        </button>
      </div>
    </section>
  );
};

export default DeleteScreen;
