let days=document.getElementsByClassName("days")
let hours=document.getElementsByClassName("hours")
let minutes=document.getElementsByClassName("minutes")
let seconds=document.getElementsByClassName("seconds")



function countDown(){
    let targetDate = new Date("2024-12-31T23:59:59").getTime()
    let currentDate = new Date().getTime()
    let d = (targetDate - currentDate)/(1000*60*60*24)
    let h =((targetDate - currentDate)%(24*1000*60*60))/(1000*60*60)
    let m =((targetDate - currentDate)%(1000*60*60))/(1000*60)
    let s =((targetDate - currentDate)%(1000*60))/(1000)


    days[0].innerText=Math.floor(d)
    hours[0].innerText=Math.floor(h)
    minutes[0].innerText=Math.floor(m)
    seconds[0].innerText=Math.floor(s)
}

setInterval(()=>{countDown()},1000)