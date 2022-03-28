console.log('script.js loaded');
const btnDinoName = document.querySelector('#btnLoad');
const dinoImage = document.querySelector('#dinoImage');


btnDinoName.addEventListener('click', () => {
  if (btnDinoName !== null) {
    btnDinoName.remove();
  }
  if (dinoImage !== null) {
    dinoImage.remove();
  }
  getDinoName();
});

async function getDinoName() {
  const response = await fetch('/dinoname');
  const data = await response.json();
  let dinoName = data[0].join(' ');
  console.log('data, ', data);

  let dinoNameDiv = document.createElement('div');
  dinoNameDiv.id = 'dinoName';
  dinoNameDiv.textContent = dinoName;
  document.querySelector('#dinoWrapper').appendChild(dinoNameDiv);

  getDinoImage();
}

async function getDinoImage() {
  const response = await fetch('/dinoImage');
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  let dinoImageUrl = dinoImage.tumbnailUrl;
  let dinoAlt = dinoImage.dinoName;
  console.log(dinoImage);

  let img = document.createElement('img');
  img.id = 'dinoImage';
  img.src = dinoImageUrl;
  img.alt = dinoAlt;
  document.querySelector('#dinoWrapper').appendChild(img);
}
