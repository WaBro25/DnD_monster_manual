import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NameCard from './components/nameCard'
import './index.css'
import LandingPage from './LandingPage'

function App() {

  const [selectedMonster, setSelectedMonster] = useState()
  return (
    <>
<div>
  <LandingPage selectedMonster={selectedMonster}/>
</div>
    </>
  )
}

export default App
