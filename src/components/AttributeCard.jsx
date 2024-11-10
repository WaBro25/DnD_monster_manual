import { useState, useEffect } from 'react'

function AttributeCard({value}) {

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
  console.log("CONST", monster.constitution)
  return (
    <div class="grid grid-cols-2 border border-gray-300 left:64 top-0 left-0 w-64 h-64">
          {monster?.strength ? <div>Strength :</div> : ""}
          {monster?.strength}

          {monster?.dexterity ? <div>Dexterity :</div> : ""}
          {monster?.dexterity}

          {monster?.constitution ? <div>Constitution :</div> : ""}
          {monster?.constitution} 

          {monster?.intelligence ? <div>Intelligence :</div> : ""}
          {monster?.intelligence}

          {monster?.wisdom ? <div>Wisdom :</div> : ""}
          {monster?.wisdom}
          
          {monster.charisma ? <div>Charisma :</div> : ""}
          {monster?.charisma}
          </div>
  
  )
}

export default AttributeCard