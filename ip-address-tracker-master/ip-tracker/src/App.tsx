import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

type Res = {
  ip?: string;
  isp?: string;
  location?: {
    city: string;
    postalCode: string;
    region: string;
    timezone: string;
  }
};
type Domains = string[];

function App() {
  const [ipAddress, setIpAddress] = useState({ 
    ipAddress: ""
  })
  const [ipData, setIpData] = useState({})

  const handleChange = function (event:any) {
    setIpAddress({ ipAddress: event.target.value})
  }

  const lookupIpAddress = function(IpAddress:{ipAddress:string}) {
    const apiKey = "at_TRBYrFOIjsPy2m3153j3tysb2gHeO"
    if (ipAddress.ipAddress === "") {
      axios
        .get("https://geo.ipify.org/api/v1", {
          params: {apiKey}
        }) 
        .then((response) => {
          console.log(response)
          setIpData(response.data)
        })
    } else {
      // axios
      //   .get("https://geo.ipify.org/api/v1", {
      //     params: {apiKey}, 
      //     data: {ipAddress: {ipAddress}}
      //   }) 
      //   .then((response) => {
      //     console.log(response)
      //   })
    }
  }


  const displayAddress = function(ipData: Res) {
    if (ipData) {
      return (
        <div>
          {ipData.ip}
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }

  const displayLocation = function(ipData: Res) {
    if (ipData && ipData.location) {
      return (
        <div>
          {ipData.location.city}, {ipData.location.region} {ipData.location.postalCode}
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }

  const displayTimezone = function(ipData: Res) {
    if (ipData && ipData.location) {
      return (
        <div>
          {ipData.location.timezone}
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }

  const displayISP = function(ipData: Res) {
    if (ipData) {
      return (
        <div>
          {ipData.isp}
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
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
          hi
        </button>
      </div>
      <div>
        <div>
          <h3>
            IP ADDRESS
          </h3>
          <h2>
            {displayAddress(ipData)}
          </h2>
        </div>
        <div>
          <h3>
            LOCATION
          </h3>
          <h2>
            {displayLocation(ipData)}
          </h2>
        </div>
        <div>
          <h3>
            TIMEZONE
          </h3>
          <h2>
            {displayTimezone(ipData)}
          </h2>
        </div>
        <div>
          <h3>
            ISP
          </h3>
          <h2>
            {displayISP(ipData)}
          </h2>
        </div>
      </div>
      <div className="map"/>
    </div>
  );


}

export default App;

