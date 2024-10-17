import React, {useState} from "react";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const[state, setState] = useState(0);
  return (
    <div className='todo'>
      <Sidebar/>
      <div className="todo_tasks">jj</div>
    </div>
    
  );
}

export default App;
