let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll(".buttons");
let string = "";
let arr = Array.from(buttons);

arr.forEach((buttons) => {
  buttons.addEventListener('click', (btn) => {
    console.log(btn)
    if (btn.target.innerHTML == "=") {
      string = eval(string);
      screen.value = string;
    }

    else if (btn.target.innerHTML == "Ac") {
      string = "";
      screen.value = string;
    }

    else if (btn.target.innerHTML == "Del") {
      string = string.substring(0,string.length-1)
      screen.value = string;
    }

    else{
      string += btn.target.innerHTML
      screen.value = string;
    }

  });

});