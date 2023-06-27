import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import ModalWind from './components/modalWind/modalWind';
import Modal from './components/modal/modal';


function App() {
  const [isClose  , setIsColse] = useState(true)

  let arr = ["imgLink" ] 

  return (
    <div className="App">
        <button onClick={()=>setIsColse(false)}>Open Modal</button>
      <Modal isClose={isClose} setIsColse={setIsColse} />
    

    <button>
      prev
    </button>

    <div>
        <img src='' />
    </div>

    <button>
     next
    </button>




      {/* <Counter /> */}

      {/* <button onClick={()=>setIsColse(!isClose)}>Open Modal</button> */}
      {/* <ModalWind isClose={isClose} setIsColse={setIsColse}  /> */}
    </div>
  );
}

export default App;
