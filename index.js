function setTime(){
    const date = new Date();
    let hrs = String(date.getHours()).padStart(2,0);
    const min = String(date.getMinutes()).padStart(2,0);
    const sec = String(date.getSeconds()).padStart(2,0);
    const side = Number(hrs) >= "12" ? "PM" : "AM";
    if(hrs=="00"){
        hrs="12";
    }
    let str = hrs + ":" + min + ":" + sec + " " + side;

    document.getElementById("clock").textContent = str;
}
setInterval(setTime,1000);