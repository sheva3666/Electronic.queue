import './App.scss';
import { useState } from "react";

function App() {
  const [clients, setClients] = useState([]);

  const [newClient, setNewClient] = useState("");

  const [services, setServices] = useState([]);




  const inputChange = (e) => {
    setNewClient(e.target.value);
  };

  const addClient = (e) => {
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
    <div className="App">
     <header className="header">
      <div className="container">
        <div className="header__box">
          <a href="">
            <img src="" alt="" />
          </a>
          <div className="header__logo">NICE LOGO</div>
        </div>
      </div>
    </header>

    <section className="in-service">
      <div className="container">
        <h6 className="in-service__heading">In service</h6>
        <div className="in-service__box">
          <div className="in-service__heads">
            <div className="in-service__head">Number in line</div>
            <div className="in-service__head">Full name</div>
            <div className="in-service__head">Check-in time</div>
          </div>


          {services.map((service) => {
          return <div className="in-service__user">
                    <div className="in-service__user-number" key={4}>{service.Status+4}</div>
                    <div className="in-service__user-name" key={5}>{service.FullName}</div>
                    <div className="in-service__user-time" key={6}>{service.dateTime}</div>
                 </div>
          
        })}
          <button className="in-service__btn btn" onClick={nextClient}>Next client</button>
        </div>
      </div>
    </section>

    <section className="in-line">
      <div className="container">
        <h6 className="in-line__heading">Clients in line</h6>

        <form className="in-line__form" onSubmit={addClient}>
          <div className="in-line__form-box">
          <input className="in-line__form-input" value={newClient} onChange={inputChange} placeholder="Full name" type="text" />
          <p className="in-line__form-info">Name of the client you’re going to add in the line</p>
          </div>
          <button type="submit" class="in-line__form-btn btn">+ Add to the line</button>
        </form>

        <div className="in-line__box">
          <div className="in-line__heads">
            <div className="in-line__head">Number in line</div>
            <div className="in-line__head">Full name</div>
            <div className="in-line__head">Check-in time</div>
          </div>
          {clients.map((client) => {
            return <div className="in-line__user">
                      <div className="in-line__user-number" key={1}>{client.Status}</div>
                      <div className="in-line__user-name" key={2}>{client.FullName}</div>
                      <div className="in-line__user-time" key={3}>{client.dateTime}</div>
                   </div> 
          })
          }
        </div> 
      </div>
    </section>
    </div>
  );
};

export default App;
