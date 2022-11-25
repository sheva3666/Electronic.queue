import React from "react";
import "./Table.scss";

const Table = ({ clients }) => {
  return (
    <>
      <h6 className="table__heading">In service</h6>
      <div className="table__box">
        <div className="table__heads">
          <div className="table__head">Number in line</div>
          <div className="table__head">Full name</div>
          <div className="table__head">Check-in time</div>
        </div>

        {clients.map((client) => {
          return (
            <div className="table__user">
              <div className="table__user-number" key={client.id}>
                {client.Status + 4}
              </div>
              <div className="table__user-name" key={client.id}>
                {client.FullName}
              </div>
              <div className="table__user-time" key={client.id}>
                {client.dateTime}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
