import React, {useEffect} from 'react';
import './DrumPad.css';

export default function DrumPad(props){  
  const playAudio = () => {
    const audio = new Audio(props.sample)
    audio.volume = props.volume;
    audio.play();
  };
  const handleKeyPress = (e)=>{
    if(e.keyCode === props.keyCode){
      playAudio();
      props.setActive();
    }
  }
  useEffect(()=>{document.addEventListener('keydown', handleKeyPress)}, []);
  return(
    <div 
      id={props.keyPress}
      onClick={()=>{
        playAudio();
        props.setActive();
      }} 
      onKeyDown={()=>props.onKeyDown()}
      className="DrumPad"
    >
      <p><b>{props.keyPress}</b></p>
      <p>{props.name}</p>
    </div>
  )
}
