import './App.css';
import ListVehicle from './ListVehicle/ListVehicle.js';
import ListVehicleData from './ListVehicleData.js';
import SearchIcon from './search.svg';
import AddIcon from './add.svg';

function App() {
  const list_vehicle = ListVehicleData.map(item =>{
    return(
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
    )
  })
  return (
    <div className="App">
      <div className="wrapper">
        <div className="navbar">
              <div className="search-container">
                  <img src={SearchIcon} className="search-icon"/>
                  <input type="text" className="search-input" placeholder="Search" />
              </div>
              <div className="add-button">
                  <div className="add-icon-container">
                    <img src={AddIcon} />
                  </div>
                  <div className="button-text">Add new Vehicle</div>
              </div>
        </div>
        <table className="table">
              <tr className="table-row">
                  <th>ID</th>
                  <th>Vehicle</th>
                  <th>Driver</th>
                  <th>Color</th>
                  <th>Device</th>
                  <th>Location</th>
                  <th>Total ODO</th>
                  <th>Actions</th>
              </tr>
          </table>
        {list_vehicle}
      </div>
    </div>
  );
}

export default App;
