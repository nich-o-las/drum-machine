import React, {useState, useEffect} from 'react';
import './DrumMachine.css';
import DrumPad from '../DrumPad/DrumPad';
import bankOne from '../../utils/banks/bankOne.json';
import bankTwo from '../../utils/banks/bankTwo.json';

export default function DrumMachine(){
  const [activeBank, setActiveBank] = useState(bankOne);
  const [activePad, setActivePad] = useState('');
  const [volume, setVolume] = useState(1);
  const displayActive = (a) => {
    setActivePad(a);
    setTimeout(()=>setActivePad(''), 500);
  }
  const toggleActive = () => {
    (activeBank === bankOne ? setActiveBank(bankTwo) : setActiveBank(bankOne));
  }
  const handleVolume = (e) => {
      setVolume(e.target.value / 100)
  }
  return(
    <div className="DrumMachine">
      <div className="DrumMachine-padBank DrumMachine-section">
          {activeBank.map((o, idx) => {
            return <DrumPad key={idx} volume={volume} setActive={()=>displayActive(o.name)} {...o}/>
          })}
      </div>
      <div className="DrumMachine-controls DrumMachine-section">
        <div className="switchBox">
          <span>Bank 1</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleActive}/>
            <span className="slider"></span>
          </label>
          <span>Bank 2</span>
        </div>
        <p><b>Active: </b></p>
        <p className="activePad">{activePad}</p>
        <input type="range" min="1" max="100" defaultValue={volume * 100} onChange={handleVolume} />
      </div>
    </div>
  )
}