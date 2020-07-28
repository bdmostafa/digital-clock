function startingTime() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('date').innerHTML = day + "-" + month + "-" + year;
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;
    setTimeout(startingTime, 0);
}

function addZero(i) {
    if (i < 10) return i = "0" + i;
    return i;
}