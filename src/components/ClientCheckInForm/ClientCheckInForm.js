import React from "react";
import "./ClientCheckInForm.scss";

const ClientCheckInForm = ({ onAddClient, newClient, setNewClient }) => {
  const inputChange = (e) => {
    setNewClient(e.target.value);
  };
  return (
    <form className="in-line__form" onSubmit={onAddClient}>
      <div className="in-line__form-box">
        <input
          className="in-line__form-input"
          value={newClient}
          onChange={inputChange}
          placeholder="Full name"
          type="text"
        />
        <p className="in-line__form-info">
          Name of the client you’re going to add in the line
        </p>
      </div>
      <button
        type="submit"
        className={
          newClient.length === 0
            ? "in-line__form-btn btn"
            : "in-service__btn btn"
        }
      >
        + Add to the line
      </button>
    </form>
  );
};

export default ClientCheckInForm;
