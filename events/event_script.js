const dispWrapp = document.querySelector(".displayedsquare-wrapper");
const logAct = document.querySelector("ul");
const action = document.querySelector(".actionsquare-wrapper");
const lime = action.children[0];
const violet = action.children[1];
const orange = action.children[2];



// const colorChoice = () => {
//   const actions = document.querySelectorAll("actionsquare-wrapper");

//   for (let _element of actions){
//     actions.addEventListener("click", (a) => {
//         alert("hello");
//     });
    
//   };
// }

// colorChoice()
/// creating new squares

 const newlime = () => {
   const newsquarelime = document.createElement("div");
   newsquarelime.classList.add("displayedsquare");
   newsquarelime.style.background = "#00ff00";

   dispWrapp.appendChild(newsquarelime);
 };

 const newviolet = () => {
   const newsquareviolet = document.createElement("div");
   newsquareviolet.classList.add("displayedsquare");
   newsquareviolet.style.background = "#ff00ff";

   dispWrapp.appendChild(newsquareviolet);
 };

 const neworange = () => {
   const newsquareorange = document.createElement("div");
   newsquareorange.classList.add("displayedsquare");
   newsquareorange.style.background = "#ffa500";

   dispWrapp.appendChild(newsquareorange);
 };




 // add eventlistener

// lime.addEventListener("click", (l) => {
//   newlime();
//   newLog();
// });

// violet.addEventListener("click", (v) => {
//   newviolet();
//   newLog();
// });

// orange.addEventListener("click", (o) => {
//   neworange();
//   newLog();
// });


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// const clickOnSquare = (e) => {
//     console.log(e.target.classList[1])
//     console.log(getElapsedTime())
//   }

//// creating new log

const newLog = () => {
    const liAct = document.createElement("li");
    
    liAct.textContent = "created a new square";
    logAct.appendChild(liAct);
  }




const newColSquare = () => {
    const actions = document.querySelectorAll(".actionsquare");

    actions.forEach((action) => {
        if (action.classList[1]=== "green"){
            action.addEventListener("click", () => {
                newlime();
                newLog();
            });
        } else if (action.classList[1]=== "violet"){
            action.addEventListener("click", () =>{
                newviolet();
                newLog();
            });
        } else if (action.classlist[1]=== "orange"){
            action.addEventListener("click", () =>{
                neworange();
                newLog();
            })
        }
    });
}


newColSquare();

//// SPACEBAR

function spaceBar() {
    let e = new Event('keyup');
    e.which = e.keyCode = 32;
    e.code = "Backspace";
    e.key = " ";
    document.addEventListener("keyup", (e) => {
        newLog();
    });
}



spaceBar();