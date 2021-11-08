var current = 1;

const move = (n) => {
  if (current + n > 5) {
    current = 1;
    cal();
    return;
  }
  if (current + n < 1) {
    current = 5;
    cal();
    return;
  }
  if (current + n <= 5 || current + n >= 1) {
    current += n;
    cal();
    return;
  }
};

const cal = () => {
  for (var i = 1; i <= 5; i++) {
    if (i === current) {
      continue;
    }
    document.getElementById("item" + i).style.display = "none";
    document.getElementById("dot" + i).classList.remove("currentClick");
  }
  document.getElementById("dot" + current).classList.add("currentClick");
  document.getElementById("item" + current).style.display = "block";
};

const currentSlide = (n) => {
  current = n;
  for (let i = 1; i <= 5; i++) {
    if (i === current) {
      continue;
    }
    document.getElementById("dot" + i).classList.remove("currentClick");
    document.getElementById("item" + i).style.display = "none";
  }

  document.getElementById("dot" + current).classList.add("currentClick");
  document.getElementById("item" + current).style.display = "block";
};
