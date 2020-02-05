/* Coded by Crown_Wins */

let discordLink = "webhook"; //Edit this text with your Discord webhook

let axios = require(GetResourcePath(GetCurrentResourceName()) + '/node_modules/axios');

RegisterNetEvent('js:chat');
onNet("js:chat", (msg, color) => {
    
    let msg2 = "911 Call | Reason: " + msg + ' | Caller: ' + GetPlayerName(global.source);
    
    emitNet("chat:addMessage", -1, {
        args: [msg2],
        color: color
    })

    axios({
        method: 'post',
        url: discordLink,
        data: {
          content: msg2
        }
    });
    return
})
