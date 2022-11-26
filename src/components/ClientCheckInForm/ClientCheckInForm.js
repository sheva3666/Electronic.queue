import React from "react";
import "./ClientCheckInForm.scss";

const ClientCheckInForm = ({ onAddClient, newClient, setNewClient }) => {
  const inputChange = (e) => {
    setNewClient(e.target.value);
  };

  return (
    <form className="form" onSubmit={onAddClient}>
      <div className="form__box">
        <label> Name of the client you’re going to add in the line</label>
        <input
          className="form__input"
          value={newClient}
          onChange={inputChange}
          placeholder="Full name"
          type="text"
        />
      </div>
      <button
        disabled={!newClient}
        type="submit"
        className={
          newClient.length === 0 ? "form__btn btn" : "form__second-btn btn"
        }
      >
        + Add to the line
      </button>
    </form>
  );
};

export default ClientCheckInForm;
