import React, { useState } from 'react'
import HeaderCard from './components/headerCard'
import NameCard from './components/nameCard'
import MonsterCard from './components/MonsterCard'


function LandingPage() {
  const [selectedMonster, setSelectedMonster] = useState([])
    
  return (
    <div>
        <NameCard selectedMonster={selectedMonster}/>
        <MonsterCard selectedMonster={selectedMonster}/>
    </div>
  )
}

export default LandingPage