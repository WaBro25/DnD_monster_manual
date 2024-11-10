import React from 'react'

function Inventory() {

    const inventory = [
    { name: 'spell', likes: 'fireball' }, 
    { name: 'weapon', likes: 'longsword' },
    { name: 'stuff', likes: 'rope' },     
    { name: 'mounts', likes: 'horse' },                       
                  
]

const colour = [
    { color: "#3b82f6" },
    { color: "#34d399" },
    { color: "#3b82f6" },

]

return(
    <div class='absolute top-34 right-24'>
{inventory.map(item => {
    <li key={item.name}/>
    return(<div class="row-span-3 border-4 border-sky-500">
        <ul>
            <li>
                {item.name + ": " + item.likes}
</li>
    </ul>
    </div>)
})}
        </div>
  )
}

export default Inventory