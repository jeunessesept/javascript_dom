///Select the last child of the <ol> tag and put it at the beginning of the list

const ord = document.querySelector("ol");
const a = ord.children[0];
const b = ord.children[1];
const c = ord.children[2];
const d = ord.children[3];
const e = ord.children[4];

e.appendChild(a);
a.appendChild(b);
b.appendChild(c);
c.appendChild(d);


/// Move the <h2> of the third section in the second one and vice-versa

const title2 = document.querySelectorAll("section");

const f = title2[0];
const g = title2[1];
const h = title2[2];

h.appendChild(g);


/// Delete the last section from the DOM, we don't need it anyways

const lastsection = document.getElementsByTagName("section")[2];
lastsection.parentNode.removeChild(lastsection)






