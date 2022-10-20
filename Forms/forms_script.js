/// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">.
/// The content of the field and the span should always remain the same.

const spanFirst = document.querySelector("#display-firstname");
const input_1 = document.querySelector("#firstname");

input_1.addEventListener("keyup", () => {
  spanFirst.textContent = input_1.value;
});

///Add a keyup listener on the second input (the number input), so that if the age is below
///18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

const input_2 = document.querySelector("#age");
const sect_age = document.querySelector("#a-hard-truth");

input_2.addEventListener("keyup", () => {
  if (input_2.value < 18) {
    sect_age.style.visibility = "hidden";
  } else if (input_2.value > 18) {
    sect_age.style.visibility = "visible";
  }
});

///Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red)
///if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const input_3 = document.querySelector("#pwd");
const input_4 = document.querySelector("#pwd-confirm");

const inputs = [input_3, input_4];

inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length < 6) {
      input.style.background = "red";
    } else if (input.value.length > 6) {
      input.style.background = "green";
    }

    if (input_3.value === input_4.value) {
      input.style.background = "blue";
    }
  });
});

//// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use,
//// we'll say that the dark mode is just turning the background black and the text white.

const input_5 = document.querySelector("#toggle-darkmode");
console.log(input_5.value)

input_5.addEventListener("change", () =>{
    if (input_5.value === "light"){
        document.body.style.background = "white";
        document.body.style.color = "black";
    } else if (input_5.value === "dark"){
        document.body.style.background = "black";
        document.body.style.color = "white"
    }
})