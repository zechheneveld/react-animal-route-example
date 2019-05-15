import React from "react";
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/">Home</Link>{" | "}
    <Link to="/farms">Farms</Link>{" | "}
    <Link to="/animals">Animals</Link>
  </div>
  )

export default Header;