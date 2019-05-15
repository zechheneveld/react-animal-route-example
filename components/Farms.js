import React from "react";
import {Link} from 'react-router-dom';

let farms = ["Greenvile Farm", "Redding Farm", "Scottsdale Farm", 'Glendale Farm'];

let farmList = farms.map(
  f => <li to={`/item/${f}`}>{f}</li>
);

const Farms = () => (
  <div>
  <h1>Farms</h1>
      <ul>
      {farmList}
    </ul>
  </div>
  )

export default Farms;