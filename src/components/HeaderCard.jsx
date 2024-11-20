import { useState, useEffect } from 'react'

function HeaderCard({value}) {

  const [monster, setMonster] = useState({});
  const [loading, setLoading] = useState(false)

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

    if(monster?.image){
    const monsterImage = "https://www.dnd5eapi.co" + monster.image;
    const imgElement = document.getElementById("image");
    imgElement.src = monsterImage;
    imgElement.style.width = "545px";
    imgElement.style.height = "510px"; 
    }

  return (
    <>
      {/* Top right column*/}
      {monster?.hit_points ? 
      <div class="absolute inset-y-20 right-96 grid grid-cols-1 border border-gray-300 w-64 h-60">
      <div>
    {monster?.hit_points ? "HP: " + monster?.hit_points : null}
  </div>
  <div>
    {monster?.armor_class?.[0].value ? "Armor Class: " + monster?.armor_class?.[0].value : null}
</div> 
<div>{monster?.alignment ? "Alignment: " + monster?.alignment : null}
</div>
<div>
  {monster?.size ? "Size: " + monster?.size: undefined}
</div> 
  <div>
  {monster?.speed ? "Fly speed: " + monster?.speed?.fly : undefined}
</div>  
<div>
  {monster?.damage_immunities ? "Damage Immunities: " + monster?.damage_immunities : undefined}
</div>
<div>
  {monster?.legendary_actions?.name ? "Legendary Actions: " + 
  monster?.legendary_actions[0].name +  ", " + 
  monster?.legendary_actions[1].name + ", " + 
  monster?.legendary_actions[2].name: undefined}
</div> 
  </div>
  : ""}
  {/* Bottom left column*/}
  {monster?.challenge_rating ? 
<div class="grid grid-cols-1 border border-gray-300 w-64 h-64">
  <div>
    {monster?.challenge_rating? "Challenge Rating: " + monster?.challenge_rating: null}
  </div> 
    <div>
    {monster?.type ? "Type: " + monster?.type: null}
  </div> 
  <div>
    {monster?.xp ? "Xp: " + monster?.xp: null}
  </div> 
  <div>
    {monster?.languages ? "Languages: " + monster?.languages: null}
  </div> 
  <div>
  {monster?.hit_dice ? "Hit Dice: " + monster?.hit_dice : undefined}
</div>  
</div>
: ""}
</>

  )
}
export default HeaderCard