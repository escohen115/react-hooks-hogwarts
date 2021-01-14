import React, {useState} from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from './HogList'



function App() {
  const [filterState, setFilterState] = useState('All')
  const [hogListState, setHogListState] = useState(hogs)

  function changeFilterState (newState){
    setFilterState(newState)

    if (newState === 'Greased'){
      const hogListFiltered = [...hogListState]
      .filter((hog)=>{
        return hog.greased === true
      }) 
      setHogListState(hogListFiltered)
    }
    else
    {
      setHogListState(hogs)
    }
  }

  function sortByCategory (category){
      const hogListSorted = [...hogListState]
        hogListSorted.sort((a,b) => {
          if (a[category] < b[category]){
            return -1
          }
          if (a[category] > b[category]){
            return 1
          }
          return 0
      })
      setHogListState(hogListSorted)
  }


  return (
    <div className="App">
      <Nav 
      filterState = {filterState}
      changeFilterState={changeFilterState}
      sortByCategory={sortByCategory}/>
      <HogList 
      hogListState={hogListState} 
      setHogListState={setHogListState}/> 
    </div>
  );


}

export default App;
