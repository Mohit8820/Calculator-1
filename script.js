const bottom = document.querySelector(".bottom");
const out = document.getElementById("out");

//get buttonpress
var num = document.querySelectorAll(".num");
var numLength = num.length;
console.log(numLength);

for (i = 0; i < numLength; i++) {
  num[i].addEventListener("click", function () {
    var value = this.innerHTML;
    var a = this;
    console.log(value);
    // buttonPress(value);
    this.classList.add("press");

    setTimeout(function () {
      a.classList.remove("press");
      console.log("abc");
    }, 100);

    calc(value);
  });
}

// get keypress
document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key == "Enter") num[17].click();
  if (event.key == "Backspace") num[0].click();
  for (i = 0; i < numLength; i++) {
    if (num[i].innerHTML == event.key) num[i].click();
  }

  // calc(event.key);
});
// function buttonPress(press) {
//   var p = "." + press;
//   var active = document.querySelector(p);
//   console.log(active);
//   active.classList.add("press");
//   console.log(active.classList);
// }

function calc(val) {
  switch (val) {
    case "1":
      out.textContent += val;
      break;
    case "2":
      out.textContent += val;
      break;
    case "3":
      out.textContent += val;
      break;
    case "4":
      out.textContent += val;
      break;
    case "5":
      out.textContent += val;
      break;
    case "6":
      out.textContent += val;
      break;
    case "7":
      out.textContent += val;
      break;
    case "8":
      out.textContent += val;
      break;
    case "9":
      out.textContent += val;
      break;
    case "0":
      out.textContent += val;
      break;
    case "C":
      clr();
      break;
    case "(":
      out.textContent += val;
      break;
    case ")":
      out.textContent += val;
      break;
    case "+":
      out.textContent += val;
      break;
    case "-":
      out.textContent += val;
      break;
    case "*":
      out.textContent += val;
      break;
    case "/":
      out.textContent += val;
      break;
    case "=":
      try {
        eval(out.textContent);
      } catch (e) {
        if (e instanceof SyntaxError) {
          bottom.textContent = "Error";
          setTimeout(function () {
            alert(e.message);
            clr();
          }, 100);

          // bottom.classList.add("bottom2");
        }
      }

      bottom.textContent = eval(out.textContent);
      bottom.style.backgroundColor = "#F5F3FF";
      out.textContent = bottom.textContent;
      if (bottom.textContent > 99999999 || bottom.textContent < -9999999) {
        bottom.style.fontSize = "120%";
      } else {
        bottom.style.fontSize = "240%";
      }
      break;
    case ".":
      out.textContent += val;
      break;
  }
}
function clr() {
  out.textContent = "";
  bottom.textContent = "0";
}
