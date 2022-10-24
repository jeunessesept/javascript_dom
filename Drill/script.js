//// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
////Find the element that contains Fast and Furious.

const unord = document.querySelector("ul");
const lili = unord.querySelectorAll("li");
const fast = unord.children[5];
const firstUnChild = unord.children[0];
const lilo = unord.children;
const children = unord.childNodes;

children.forEach((child) => {
  console.log(child.nodeName);
  if (child.textContent === "Fast and Furious") {
    console.log(child, "found it");
    child.classList.add("important");
    unord.prepend(fast);
  }
});

///If it's not the first element move it to the top of the list

// if (unord.firstChild !== fast) {
//   unord.prepend(fast);
// }

// console.log(firstUnChild);
// console.log(lili);
// console.log(unord.firstElementChild);
// console.log(lili[1]);
// console.log(lili[3]);

///Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element

lili.forEach((lil) => {
  lil.addEventListener("click", () => {
    alert(lil.textContent);

    if (lil === fast) {
      alert(
        "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    }
  });
});

///(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).

for (i = 0; i < lili.length; i++) {
  for (j = 0; j < lili.length; j++) {
    if (i != j && lili[i].textContent === lili[j].textContent) {
      unord.removeChild(lili[j]);
    }
  }
}

///Add an eventListener on the document body, listening for keyup.
///When pressing the r key of the keyboard the list should get sorted in a random order,
///however Fast and Furious should remain the first element (most important franchise ever, remember?)


const randSorOrd = () => {
  document.addEventListener("keyup", () => {
    if (e.key === "r") {
      lili.sort(Math.floor(Math.random() * 0.5));
    }
  });
};

randSorOrd(); ///// ++++ => essayer avec une boucle forEach qui change le numéro d'index de chaque élément

//(*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned

const clonFast = () => {
  document.addEventListener("keyup", (e) => {
    if (e.key === "d") {
      ///===>> juste besoin d'ajouter 'key === " "'
      cFast = fast.cloneNode([(deep = true)]);
      unord.prepend(cFast);
    }
  });
};

clonFast();

//Create a new <div> before the list, using createElement and insertBefore

let newDiv = document.createElement("div");
let refUl = unord;

document.body.insertBefore(newDiv, refUl);

///Using createElement, create a <select> tag into the previously created <div>,
///with two <option>s in it: "important franchises" and "normal franchises"
const div = document.querySelector("div");
const selTag = document.createElement("select");
const optFran1 = document.createElement("option");
const optFran2 = document.createElement("option");
const selectA = document.querySelector("select");

selTag.insertAdjacentHTML(
  "afterbegin",
  '<option value="normal"> normal franchises </option>'
);
selTag.insertAdjacentHTML(
  "beforeend",
  '<option value="important"> important franchises </option>'
);

div.appendChild(selTag);

////Add an eventListener to the <select>, on change, if the option "important franchise" is chosen,
////only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
selTag.addEventListener("change", () => {
  if (selTag.value === "normal") {
    for (element of lili) {
      element.style.visibility = "visible";
    }
  }
  if (selTag.value === "important") {
    for (element of lili) {
      if (element.classList.contains("important")) {
        element.style.visibility = "visible";
      } else if (!element.classList.contains("important")) {
        element.style.visibility = "hidden";
      }
    }
  }
});
