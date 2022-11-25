import React, { useState } from "react";
import NewClientTable from "../../NewClientTable/NewClientTable";
import Table from "../../Table/Table";

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState("");
  const [services, setServices] = useState([]);

  const onAddClient = (e) => {
    e.preventDefault();
    const newClientItem = {
      id: Date.now(),
      FullName: newClient,
      Status: 0,
      dateTime: Date.now(),
    };

    setClients((prevState) => [...prevState, newClientItem]);
    setNewClient("");
  };

  const nextClient = () => {
    setServices([clients[0]]);
    clients.shift();
  };
  return (
    <>
      <div className="in-line">
        <div className="container">
          <Table clients={services} />
          <button className="in-service__btn btn" onClick={nextClient}>
            Next client
          </button>
        </div>
      </div>

      <NewClientTable
        setNewClient={setNewClient}
        newClient={newClient}
        onAddClient={onAddClient}
        clients={clients}
      />
    </>
  );
};

export default HomePage;
