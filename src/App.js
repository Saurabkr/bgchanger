import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  let arr = ['red', 'green', 'blue', 'purple', 'yellow', 'brown', 'pink', 'orange', 'cyan'];
  return (
    <>
     <div className="w-full h-screen duration-200" style={{ backgroundColor:color }}>
      <div className="fixed flex flex-wrap justify-center container bottom-12 px-2">
      <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-2 py-3 rounded-3xl">
         {arr.map((color, index) => (
          
          <button key={index} onClick={() => setColor(color)} className='outline-none px-4 rounded-lg' style={{ backgroundColor: color }}>

           {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
         ))}
      </div>
            
      </div>
     </div>
    </>
  );
}

export default App;
