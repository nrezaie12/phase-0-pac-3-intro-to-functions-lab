function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    var noanswer = "I can\'t hear you!"
    var yesanswer = "YES INDEED!"
    var yesdinner = 'I would love to!'
    if (string.toLowerCase(string) === string) {
        return noanswer;
    }
    else if (string.toUpperCase(string) === string) {
        return yesanswer;
    }
    else if ("Let\'s have dinner together!" === string) {
        return yesdinner

    }

}