document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const countysName = document.querySelector('input').value
    try{
        const response = await fetch(`https://seattle-rent-web-api-production.up.railway.app/api/${countysName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.Studio
    }catch(error){
        console.log(error)
    }
}