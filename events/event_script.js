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




//  const newviolet = () => {
//    const newsquareviolet = document.createElement("div");
//    newsquareviolet.classList.add("displayedsquare");
//    newsquareviolet.style.background = "#ff00ff";

//    dispWrapp.appendChild(newsquareviolet);
//  };

//  const neworange = () => {
//    const newsquareorange = document.createElement("div");
//    newsquareorange.classList.add("displayedsquare");
//    newsquareorange.style.background = "#ffa500";

//    dispWrapp.appendChild(newsquareorange);
//  };




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

const newLog = (color) => {
    const liAct = document.createElement("li");
    liAct.textContent = ("created a new " + color +" square")
    logAct.appendChild(liAct);
  }

const logSpace = () => {
    const liAct = document.createElement("li");
    liAct.textContent = "Space is the place";
    logAct.appendChild(liAct);
}

/// creating new squares

  const newSquare = (color) => {
    const newsquare = document.createElement("div");
    newsquare.classList.add("displayedsquare");
    newsquare.classList.add(color);
    newsquare.addEventListener("click" , (e) => {
        alert(e.target.classList[1])
    })
 
    dispWrapp.appendChild(newsquare);
  }



const newColSquare = () => {
    const actions = document.querySelectorAll(".actionsquare");
    actions.forEach((action) => {
            action.addEventListener("click", (e) => {
                newSquare(e.target.classList[1]);
                newLog(e.target.classList[1]);
            });   
    });
}


newColSquare();

//// SPACEBAR

const random_rgb = () => {
    let r = Math.floor(Math.random()* 255);
    let g = Math.floor(Math.random()* 255);
    let b = Math.floor(Math.random()* 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    
}

const spaceBar = () => {
    let e = new Event('keyup');
    document.addEventListener("keyup", (e) => {
      if (e.key == " " ||
      e.code == "Space" ||      
      e.keycode == 32  ) {
        logSpace();
        document.body.style.background = random_rgb();
      }
        

    });
}
spaceBar();






