const animatedElements = document.getElementsByClassName('animated-text');

const delayToShow = setTimeout(() => {
  for (let i = 0; i < animatedElements.length; i++) {
    animatedElements[i].style.visibility = 'visible';
  }
}, 3000);


// Back to top button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// TEMP

const popUpDisplayData = {

  mcfarty: {
    title: 'Farty McFart',
    characteristics: "3D, Arcade",
    playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
    repoLink: "https://github.com/ianisout/mc-thrust",
    mainTools: "Unity 3D"
  },

  tilevania: {
    title: 'TileVania',
    characteristics: "2D, Arcade",
    playLink: "https://i.simmer.io/@ianisout/tilevania-gamedev-tv-learning-project",
    repoLink: "https://github.com/ianisout/tilevania-gametv-project",
    mainTools: "Unity 2D"
  },
};

/* 

Skills explored:

FARTY MCFART
vector 3 manipulation
basic 3d shaping
mathf.sin() for oscillation
UI
background music by scene
particle effects

TILEVANIA
sprite sheets
unity tilemap
tilemap layers
animation
input system
animation state in code
cinemachine confiner
state driven cameras
levels (unity scenes)
score an scene persistency

*/