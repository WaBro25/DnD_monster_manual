import React, { useState } from 'react'
import { fetchMonsterData } from '../utils/index'
import AttributeCard from './AttributeCard';
import HeaderCard from './HeaderCard';
import ActionsCard from './ActionsCard';

function MonsterCard() {
  // how does the value from monsterCard get passed to the NameCard?

  // 1. we create a hook called monster

  const [monster, setMonster] = useState("");

      const handleChange=(value) => {
        fetchMonsterData(value)

        // 2. we set value to the hook we declared "setMonster"
        setMonster(value)
      }
    
      // 3. we then pass it as the prop to the NameCard component
      console.log("monster", monster)
     return (
      <>
      <div>
    <AttributeCard value={monster}/>
    <HeaderCard value={monster}/>
    <ActionsCard value={monster}/>
    <input class = "absolute top-10 left-10" type="text" id="monsterName" onChange={(e) => {handleChange(e.target.value)}} 
    placeholder="Enter monster name"/>
    </div>
    </>
  )
}

export default MonsterCard
