const express = require('express')

const { ServerConfig, Logger } = require('./config')
const apiRoutes = require('./routes')
const { where } = require('sequelize')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes)




app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
   // Logger.info("Successfully started the server",  {})

   const {City, Airport} = require('./models')
//     const delhi = await City.findByPk(2);
//    console.log(delhi);
//    const city = await City.findByPk(2)
//    await city.createAirport({name:"Indera gandi airport", code:"NDLS"})
//    //const airport = await Airport.create({name:'Chaudhari charan singh airport', code:"LKO", cityId:1})
//  // const Airforce = await lucknow.createAirport({name:'Airforce airport', code:'IAF' })
// //    console.log(chaudhari);
//    const airportInLko = await lucknow.getAirports()
//    console.log(airportInLko);
    
// const Airforce = await Airport.findByPk(11)
// console.log(Airforce);
// await lucknow.removeAirport(Airforce)

 await City.destroy({
    where: {
        id: 2
    }
 })

      
    
})