import React from "react";
import "./Table.scss";

const Table = ({ clients }) => {
  return (
    <>
      <div className="table__box">
        <div className="table__heads">
          <div className="table__head">Number in line</div>
          <div className="table__head">Full name</div>
          <div className="table__head">Check-in time</div>
        </div>

        {clients.map((client) => (
          <div key={client.id} className="table__user">
            <div className="table__user-column">{client.status}</div>
            <div className="table__user-column">{client.fullName}</div>
            <div className="table__user-column">{client.dateTime}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
