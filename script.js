const animatedElements = document.getElementsByClassName('animated-text');

const delayToShow = setTimeout(() => {
  for (let i = 0; i < animatedElements.length; i++) {
    animatedElements[i].style.visibility = 'visible';
  }
}, 3000);

/* const popUp = document.getElementById('pop-up-info');
const backPopupFilter = document.getElementById('back-popup-cover');

backPopupFilter.addEventListener('click', () => {
  document.body.style.overflow = 'unset';
  popUp.style.visibility = 'hidden';
  backPopupFilter.style.visibility = 'hidden';
})

function ShowMoreDetails(item) {
  popUp.style.visibility = 'visible';
  backPopupFilter.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';

  popUp.innerHTML = generateHtmlForPopup(popUpDisplayData[item.id]);
}

function generateHtmlForPopup(game) {
  console.log(game)
  return `
  <h2>${game.title}</h2>
  <img src=${game.img_src}>
  <p class="card-text">${game.desc}</p>

  <div class="external-links-container">
    <div class="external-link-access">
      <img class="external-link-image" src="./images/play-icon.png" alt="github logo">
      <a href="https://i.simmer.io/@ianisout/farty-mcfart" target="_blank">PLAY</a>
    </div>
    <div class="external-link-access">
      <img class="external-link-image" src="./images/GitHub-Mark-Light-32px.png" alt="github logo">
      <a href="https://github.com/ianisout/mc-thrust" target="_blank">Repo</a>
    </div>
  </div>

  </div>
  `
}

const popUpDisplayData = {
  mcfarty: {
    title: 'Farty McFart',
    characteristics: ["3D", "Arcade"],
    desc: "Silly little one, a first tackle at a 3D game development. I should (and will) create more levels and add more details and physics to this one. I've moved on to other projects in order to explore an learn other tools.",
    playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
    repoLink: "https://github.com/ianisout/mc-thrust",
    img_src: "./images/screenshots/fartymcfart.png"
  },
}; */