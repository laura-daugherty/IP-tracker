import React, {useState} from 'react';
import './App.css';

function App() {
  const [ipAddress, setIpAddress] = useState({ 
    ipAddress: ""
  })

  const handleChange = function (event:any) {
    setIpAddress({ ipAddress: event.target.value})
  }

  const lookupIpAddress = function(IpAddress:{ipAddress:string}) {
    
  }

  return (
    <div className="App">
      <div className="purple"/>
      <header className="app-header">
        <h1>
          IP Address Tracker
        </h1>
      </header>
      <div>
      <input
          className="input"
          type="text"
          onChange={handleChange}
          placeholder="Enter IP address here"
        />
        <button onClick={() => lookupIpAddress(ipAddress)}>
          >
        </button>
      </div>
      <div>
        <div>
          <h3>
            IP ADDRESS
          </h3>
          {/* <h2>
            {ip address}
          </h2> */}
        </div>
        <div>
          <h3>
            LOCATION
          </h3>
          {/* <h2>
            {location}
          </h2> */}
        </div>
        <div>
          <h3>
            TIMEZONE
          </h3>
          {/* <h2>
            {timezone}
          </h2> */}
        </div>
        <div>
          <h3>
            ISP
          </h3>
          {/* <h2>
            {isp}
          </h2> */}
        </div>
      </div>
      <div className="map"/>
    </div>
  );
}

export default App;
