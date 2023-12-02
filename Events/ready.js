const {Events} = require('discord.js')
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(clinet){
      console.log(`Logged in!`)
    }

}