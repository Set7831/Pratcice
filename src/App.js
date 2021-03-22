import React from 'react';
import ListVehicle from './ListVehicle/ListVehicle.js';
import ListVehicleData from './ListVehicleData.js';
import './App.css';
import SearchIcon from './search.svg';
import AddIcon from './add.svg';

const App = () => (
    <div className="App">
      <div className="wrapper">
        <div className="navbar">
              <div className="search-container">
                  <img src={SearchIcon} className="search-icon" alt="Search"/>
                  <input type="text" className="search-input" placeholder="Search" />
              </div>
              <div className="add-button">
                  <div className="add-icon-container">
                    <img src={AddIcon} className="add-icon" alt="Add Vehicle" />
                  </div>
                  <div className="button-text">Add new Vehicle</div>
              </div>
        </div>
        <table className="table" >
          
              <tr className="table-row">
                  <th style={{width: "5%"}}>ID</th>
                  <th style={{width: "15%"}}>Vehicle</th>
                  <th>Driver</th>
                  <th>Color</th>
                  <th>Device</th>
                  <th>Location</th>
                  <th>Total ODO</th>
                  <th style={{width: "5%"}}>Actions</th>
              </tr>
              {ListVehicleData.map(item => (
                <ListVehicle
                  key={item.id}
                  ID={item.id}
                  Vehicle={item.vehicle}
                  Driver={item.driver}
                  Color={item.color}
                  Device={item.device}
                  Location={item.location}
                  Total_ODO={item.total_odo}
                  Edit={item.edit}
                  Delete={item.delete}
                />
              ))}
          </table>
        
      </div>
    </div>
);

export default App;
