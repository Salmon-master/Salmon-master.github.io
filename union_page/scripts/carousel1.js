let image = 1;
let carousel_interval;
let text = [
  "<h1>Union Rowing Club 1</h1>",
  "<h1>Union Rowing Club 2</h1>",
  "<h1>Union Rowing Club 3</h1>",
]

function onLoad() {
  carousel_interval = setInterval(cycle, 7000);
  document.getElementById("carousel").style.backgroundImage = "url(images/caurosel1/" + image.toString() + ".jpg)";
}

function cycle() {
  setTimeout(change, 2500);
  document.getElementById("carousel").classList.add('move');
  clearInterval(carousel_interval);
}


function change() {
  if (image < 3) {
    image++;
  } else {
    image = 1;
  }
  document.getElementById("carousel").style.backgroundImage = "url(images/caurosel1/" + image.toString() + ".jpg)";
  document.getElementById("carouseltxt").innerHTML = text[(image - 1)];
  carousel_interval = setInterval(cycle, 7000);
  setTimeout(removeClass, 2500);
}

function removeClass() {
  document.getElementById("carousel").classList.remove('move');
}