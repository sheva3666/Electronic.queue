import React, { useState } from "react";
import Table from "../Table/Table";
import ClientCheckInForm from "../ClientCheckInForm/ClientCheckInForm";
import "./NewClientTable.scss";

const NewClientTable = ({ setClients, clients }) => {
  const [newClient, setNewClient] = useState("");

  const getDate = () => {
    const timestamp = new Date().getTime();
    return new Date(timestamp);
  };

  const getCurrentNumber = () => {
    const lastChild = clients.pop();

    if (clients.length === 0) {
      return 1;
    }
    return clients.length === 1 ? 2 : lastChild.status + 1;
  };

  const onAddClient = (e) => {
    e.preventDefault();

    setClients((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        fullName: newClient,
        status: getCurrentNumber(),
        dateTime: getDate().toLocaleString(),
      },
    ]);
    setNewClient("");
  };
  return (
    <div className="new-client">
      <div className="container">
        <h6 className="new-client__heading">Clients in line</h6>
        <ClientCheckInForm
          setNewClient={setNewClient}
          newClient={newClient}
          onAddClient={onAddClient}
        />
        {clients.length > 0 ? (
          <Table clients={clients} />
        ) : (
          <h2 style={{ paddingTop: "15px" }}>Clients line is empty</h2>
        )}
      </div>
    </div>
  );
};

export default NewClientTable;
