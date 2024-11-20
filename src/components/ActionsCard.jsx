import React, { useState, useEffect } from 'react'

function ActionsCard({value}) {
    const [monster, setMonster] = useState({});

    useEffect(() => {
        async function fetchMonsterData(){
          try{
          const URL = 'https://www.dnd5eapi.co/api/'
          const monsterURL = 'monsters/' + `${value}`
          const fullUrl = URL + monsterURL
          const response = await fetch(fullUrl)
  
          const monsterData = await response.json()
  
          setMonster(monsterData)
  
          }catch(err){
          console.log(err.message)
          }
        }
        fetchMonsterData()
      },[value])
      console.log("naammmeee", monster?.actions)

  return (
    <>
      {/* Bottom right column*/}
    {monster?.actions ? (
    <div class="absolute inset-y-80 right-96 grid grid-cols-1 border border-gray-300 w-64 h-64">
        <div>{monster?.actions[1].desc + " - "}
        {monster?.actions[2].desc + " - "}
        {monster?.actions[3].desc + " - "}
        </div>
    </div>): ''}
    </>
  )
}

export default ActionsCard