// const displayedsquare = () => {
//     let square = document.createElement("displayedsquare"); 
    
// }

// displayedsquare()

const dispWrapp = document.getElementsByClassName("displayedsquare-wrapper")

const newsquare = document.createElement("div")
newsquare.classList.add("displayedsquare")
newsquare.style.background = "#00ff00";

dispWrapp[0].appendChild(newsquare);
