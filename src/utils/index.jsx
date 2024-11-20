
 async function fetchMonsterData(value) {

    try{
      const URL = 'https://www.dnd5eapi.co/api/'
      const monsterUrl = 'monsters/' + value
      const fullUrl = URL + monsterUrl
    
      const response = await fetch(fullUrl)
      const monsterDataResponse = await response.json()
  
      console.log("monster =>", monsterDataResponse)

    } catch (error) {
      console.error(error.message);
    }
    
  }

  function displayImage(image_url){
    document.getElementById("image").src = image_url
  }
  
  export {fetchMonsterData, displayImage}
