//VARIABLES
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor(){
    bgColor.classList.add("online");
}


async function connectionStatus(){
    try {
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-256px-SIPI_Jelly_Beans_4.1.07.tiff.jpg' + (new Date()).getTime());
        image.src = "./images/online.png"
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
        console.error(error);
        statusDisplay.textContent  = "OOPS!! Your internet connection is down";
        image.src = "./images/offline.jpeg";
        bgColor.classList.remove("online");

    }
}

//MONITOR THE CONNECTION
setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are ONLINE!, CONNECTION LOOKS GOOD";
        setColor();
    }
}, 5000);


//CHECK CONNECTION WHEN THE PAGE LOADS

window.addEventListener("load", async (event) => {
    if 
    (connectionStatus()) {
        statusDisplay.textContent = "You are ONLINE";
    } else {
        statusDisplay.textContent = "You are OFFLINE";
    }
})