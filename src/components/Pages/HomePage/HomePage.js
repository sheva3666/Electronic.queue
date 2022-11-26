import React, { useState } from "react";
import "./HomePage.scss";
import NewClientTable from "../../NewClientTable/NewClientTable";
import Table from "../../Table/Table";

const HomePage = () => {
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  console.log("13123");

  const nextClient = () => {
    if (clients.length > 0) {
      setServices([]);
      setServices([clients[0]]);
      clients.shift();
    } else {
      setServices([]);
    }
  };
  return (
    <>
      <div className="current-client">
        <div className="container">
            <h2 className="current-client__heading">Current client</h2>
          <Table clients={services} />
          <button className="current-client__btn btn" onClick={nextClient}>
            Next client
          </button>
        </div>
      </div>

      <NewClientTable clients={clients} setClients={setClients} />
    </>
  );
};

export default HomePage;
