/*const addElement = () => {
    let newSect = document.createElement("section");
    let newContent = document.createTextNode("jiacinto")
    newSect.appendChild(newContent);
    const currentArt = document.getElementsByTagName("article");
    document.body.insertBefore(newSect, currentArt);
}

addElement()*/

const random_rgb = () => {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



const addElement = (name) =>{
    let newSect = document.createElement("section");
    newSect.textContent = name; 
    const befFoot = document.querySelector("footer");
    document.body.insertBefore(newSect, befFoot);
    let sect = document.querySelectorAll("section");
    for (let element of sect){
        element.style.background = random_rgb();
    }
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    for (let element of sect){
        if  ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) {
            element.style.color = '#FFF';
        } else {
            element.style.color = '#000';
        }
    }
    
}

addElement("jiacinto")

