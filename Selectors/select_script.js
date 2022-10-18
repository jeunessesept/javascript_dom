const allimp = document.querySelectorAll(".important");
console.log(allimp);
let title = allimp.title;
allimp.title = "this is an important item"; 


//////// querySelector

const important = document.querySelector(".important");
important.setAttribute("title", "this is an important item");



////// querySelectorAll


const importants = document.querySelectorAll(".important");

for (let i = 0; i < importants.length; i++) {
    let imp = importants[i];
    imp.title = "this is an important item";
    }


///// Select all the img tags and loop through them. If they have no important class, turn their display property to none


const images = document.querySelectorAll("img");


for (let element of images) {
    if (element.classList.contains("important")){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

//// Loop through all the paragraphs and display their content in the console. 
////If the paragraph has a class, display its classname as well


const para = document.querySelectorAll("p");

for (let element of para) {
    console.log(element.innerText);
    console.log(element.className);
}




////Give each of the paragraph a random text color (different for each one) 
///UNLESS it has a class then leave it as it is.

const elem = document.querySelectorAll('p');


const random_rgb = () => {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

for (let element of elem){
    element.style.color = random_rgb();
}

