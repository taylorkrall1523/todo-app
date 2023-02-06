import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("InitialMenuItems");

  const addToList = () => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("")};
    
  return (
    <div class="App">
      <h2>SideBar 1</h2>
      <ul>{list.length > 0 && list.map((item) => <li>{item} </li>)}</ul>
      <input
type="text"
value={value}
onChange={(e) => setValue(e.target.value)}
/>{" "} <button onClick={addToList}> Click to Add </button>
    </div>
  );
}




export default App;
