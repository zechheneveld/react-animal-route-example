import React from "react";
import {Link} from 'react-router-dom';

let animals = ["Cow", "Pig", "Horse", 'Chicken'];

let animalList = animals.map(
  a => <li key={a}><Link to={`/item/${a}`}>{a}</Link></li>
);

const Items = () => (
  <div>
    <h1>Animals</h1>
    <ul>
      {animalList}
    </ul>
  </div>
  )

export default Items;