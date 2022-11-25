import React from "react";
import Table from "../Table/Table";
import ClientCheckInForm from "../ClientCheckInForm/ClientCheckInForm";

const NewClientTable = ({ setNewClient, newClient, onAddClient, clients }) => {
  return (
    <div className="in-line">
      <div className="container">
        <h6 className="in-line__heading">Clients in line</h6>
        <ClientCheckInForm
          setNewClient={setNewClient}
          newClient={newClient}
          onAddClient={onAddClient}
        />
        <div className="in-line__box">
          {clients.length > 0 ? (
            <Table clients={clients} />
          ) : (
            <h2 style={{ paddingTop: "15px" }}> Clients line is empty</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewClientTable;
