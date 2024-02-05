import { useState , useRef } from 'react';

export {useState} from 'react';


export default function Player() {

  const playerName = useRef();
  const[handleClick,sethandleClick] = useState(null);


  function handleClickValue(){
    sethandleClick(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {handleClick ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClickValue}>Set Name</button>
      </p>
    </section>
  );
}
