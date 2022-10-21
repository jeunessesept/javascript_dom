//// Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
////Find the element that contains Fast and Furious.

const unord = document.querySelector("ul");
console.log(unord);

const children = unord.childNodes;
console.log(children);

children.forEach((child) => {
  console.log(child.nodeName);
  if (child.textContent === "Fast and Furious") {
    console.log(child, "found it");
    child.classList.add("important");
  }
});

///If it's not the first element move it to the top of the list

const lili = unord.querySelectorAll("li");
const fast = unord.children[5];
const firstUnChild = unord.children[0];

console.log(firstUnChild);
console.log(lili);
console.log(unord.firstElementChild);

if (unord.firstChild !== fast) {
  unord.prepend(fast);
}

///Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element

lili.forEach((lil) => {
  lil.addEventListener("click", () => {
    alert(lil.textContent);

    if (lil === fast){
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
    }
  });
});


///(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).

