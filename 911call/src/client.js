/* Coded by Crown_Wins */

RegisterCommand("911", async (source, args) => {
    let argString = args.join(" ")
    emitNet("js:chat", (argString ? argString : "No reason/location provided.."), [255,0,0])
    return
})
