  import { useState } from 'react'
  import './App.css'
  import Startpage from './Component/Startpage'
  import GamePlay from './Component/GamePlay'


  function App() {
    const[gameStart,setGameStart]=useState(false);

    const toogleGame =()=>{
      setGameStart((prev)=>!prev);
    }

    return (
      <>
      {gameStart ? <GamePlay/>:<Startpage 
        toggle={toogleGame}
      />}
      </>
    )
  }

  export default App
