import React /*, { useState }*/ from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  // const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li>
            {/* <NavLink to="/about">Home</NavLink> */}
            <a href="/">Home</a>
          </li>
          <li>
            {/* <NavLink to="/about">About</NavLink> */}
            <a href="/about">About</a>
          </li>
          <li>
            {/* <NavLink to="/contact">Contact</NavLink> */}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
