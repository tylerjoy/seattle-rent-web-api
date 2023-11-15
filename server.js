const express = require('express')
const app = express()
const PORT = 8000

const fairMarketRent2023 = {
    'king county':{
      'Studio': 2042,
      'One-Bedroom': 2100,
      'Two-Bedroom': 2455,
      'Three-Bedroom': 3297,
      'Four-Bedroom': 3847
    },
    'pierce county':{
      'Studio': 1174,
      'One-Bedroom': 1308,
      'Two-Bedroom': 1643,
      'Three-Bedroom': 2335,
      'Four-Bedroom': 2740
    },
    'snohomish county':{
      'Studio': 2042,
      'One-Bedroom': 2100,
      'Two-Bedroom': 2455,
      'Three-Bedroom': 3297,
      'Four-Bedroom': 3847
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:countyName', (request, response)=>{
    const countysName = request.params.countyName.toLowerCase()
    if(fairMarketRent2023[countysName]){
      response.json(fairMarketRent2023[countysName])
    }else{
      response.json(fairMarketRent2023['king county'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})