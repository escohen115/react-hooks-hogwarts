import React from "react";
import piggy from "../assets/porco.png";

function Nav ({changeFilterState, filterState, sortByCategory}) {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
        <br></br>
        <button onClick={()=>changeFilterState('Greased')}> Greased Filter </button>
        <button onClick={()=>changeFilterState('All')}> View All  </button>
        <button onClick={()=>sortByCategory('name')}>Sort by Name</button>
        <button onClick={()=>sortByCategory('weight')}>Sort by Weight</button>

    </div>
  );
};

export default Nav;
