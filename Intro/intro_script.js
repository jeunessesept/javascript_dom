/* document.body.style.background = "#FF69B4"; */


const random_rgb = () => {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


document.body.style.background = random_rgb();

document.title = "caca bouDOM";


for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  }

