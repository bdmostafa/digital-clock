function startingTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;
    setTimeout(startingTime, 0);
}

function addZero(i) {
    if (i < 10) return i = "0" + i;
    return i;
}