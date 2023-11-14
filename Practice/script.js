let allDate
let time 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let date
setInterval(() => {
    allDate = new Date
    time = allDate.getHours() + ":" + allDate.getMinutes() + ":" + allDate.getSeconds()
    document.querySelector("#time").innerHTML = time
    date = allDate.toLocaleDateString(undefined, options)
    document.querySelector("#day").innerHTML = date

}, 1000);