const root = document.getElementById("root");

const random = () => {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  return hex[Math.floor(Math.random() * 16)];
};

const getColor = () => {
  let color1 = `#${random()}${random()}${random()}${random()}${random()}${random()}`;
  let color2 = `#${random()}${random()}${random()}${random()}${random()}${random()}`;
  let color3 = `#${random()}${random()}${random()}${random()}${random()}${random()}`;
  return [color1, color2, color3];
};

function copy(color) {
  navigator.clipboard.writeText(color);
}

let getCard = () => {
  let colors = getColor();
  return `<div class="card">
    <div class="color" style="background:${colors[0]}" onclick="copy('${colors[0]}')" >${colors[0]}</div>
    <div class="color" style="background:${colors[1]}" onclick="copy('${colors[1]}')" >${colors[1]}</div>
    <div class="color" style="background:${colors[2]}" onclick="copy('${colors[2]}')" >${colors[2]}</div>
    </div>`;
};

let cards = "";
for (let i = 0; i < 4; i++) {
  cards = cards + getCard();
}

root.innerHTML = cards;
