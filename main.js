const move = (n) => {
  var x = document.getElementById("item1");
  let y = x.style.marginLeft;
  let domLength = document.querySelectorAll(".dot").length;

  if (n === 1) {
    if (y === (domLength - 1) * -1000 + "px") {
      x.style.marginLeft = "0px";
    } else {
      x.style.marginLeft = y.slice(0, y.length - 2) - 1000 + "px";
    }
  }
  if (n === -1) {
    if (parseInt(y.slice(0, y.length - 2)) >= 0) {
      x.style.marginLeft = (domLength - 1) * -1000 + "px";
    } else {
      x.style.marginLeft =
        parseInt(1000 + parseInt(y.slice(0, y.length - 2))) + "px";
    }
  }

  let cal = Math.abs(y.slice(0, y.length - 2) / +1000) + 1;
  let ind = 0;
  if (n > 0) {
    if (cal >= 5) {
      ind = 1;
    } else {
      ind = cal + 1;
    }
  } else if (n < 0) {
    if (cal === 1) {
      ind = 5;
    } else {
      ind = cal - 1;
    }
  }

  for (let i = 1; i <= domLength; i++) {
    if (i === cal + 1) {
      continue;
    } else {
      document.getElementById("dot" + cal).classList.remove("currentClick");
    }
  }

  document.getElementById("dot" + ind).classList.add("currentClick");
};

const currentSlide = (n) => {
  var x = document.getElementById("item1");
  x.style.marginLeft = (n - 1) * -1000 + "px";
  let domLength = document.querySelectorAll(".dot").length;
  for (let i = 1; i <= domLength; i++) {
    if (i === n) {
      continue;
    }
    document.getElementById("dot" + i).classList.remove("currentClick");
  }

  document.getElementById("dot" + n).classList.add("currentClick");
};
