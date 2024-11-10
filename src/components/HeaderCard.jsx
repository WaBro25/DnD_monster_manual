import result from 'autoprefixer/data/prefixes'
import { useState, useEffect } from 'react'
import logo from './logo/logo.png';
import { displayImage } from '../utils/index'

function HeaderCard({value}) {

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

    if(monster.image){
    const monsterImage = "https://www.dnd5eapi.co" + monster.image;
    const imgElement = document.getElementById("image");
    imgElement.src = monsterImage;
    imgElement.style.width = "250px";
    imgElement.style.height = "250px";
    }
  return (
    <> 
  <div class="grid grid-cols-1 border border-gray-300 w-64 h-64">
  <div>
    {monster.hit_points ? "HP : " + monster?.hit_points : ""}
  </div>
  <div>
    {monster?.armor_class?.[0].value ? "Armor Class : " + monster?.armor_class?.[0].value : ""}
</div> 
<div>
</div>
<div>{monster.alignment ? "Alignment : " + monster?.alignment : ""}</div>
  <div>
  {monster.speed ? "Fly speed : " + monster?.speed?.fly : ""}
</div>
<div>
  {monster.damage_immunities ? "Damage Immunities : " + monster?.damage_immunities : ""}
</div> 
</div>
</>
  )
}
export default HeaderCard