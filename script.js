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

  maestro: {
    title: 'Maestro Shooter',
    characteristics: "2D, Rhythm Action, Shooter",
    desc: [
      "Maestro shooter is a space shooter genre game; this was learning-driven project in which, during development, I decided to change things out to make it feel like my own. I wanted to make it as accurate as possible for music savvy folks, so, using Sibelius, a music notation software, I was able to create the notes to reflect their actual duration in relation to one another as if read in a music sheet. The notes that the maestro shoots are true to music notation in relation to themselves (as if they were in the same score).",
      "Each note was created separately for each instrument on Sibelius, recorded through OBS, and then edited to the exact duration and best quality for the game using Adobe Premiere. This project was a great learning experience, not only to get out of my comfort zone, but to explore important concepts, such as parallax background effects, camera/movement boundaries, pathfinding (used for the instrument waves), screen shake!, Unity/C# level managing, C# singleton scorekeeper, and some animations:",
      "Unfortunatelly, I was too much into making this one happening that I did not make commits in a timely fashion, so it's just a dump site on my GitHub, but the heart is there!"
    ],
    playLink: "https://i.simmer.io/@ianisout/maestro-shooter",
    repoLink: "https://github.com/ianisout/maestro-shooter-unity",
    img_src: [
      "./images/game-details/maestro-shooter/maestro-instruments.png",
      "./images/game-details/maestro-shooter/notes.png", 
      "./images/game-details/maestro-shooter/maestro-shoot.gif",
      "./images/game-details/maestro-shooter/maestro-reflect.gif"
    ],
    mainTools: "• Unity 2D<br>• Adobe Illustrator<br>• Sibelius<br>• OBS"
  },

  mcfarty: {
    title: 'Farty McFart',
    characteristics: "3D, Arcade",
    desc: [
      "",
      "",
      ""
    ],
    playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
    repoLink: "https://github.com/ianisout/mc-thrust",
    img_src: [
      "./images/screenshots/fartymcfart.png",
      "./images/screenshots/fartymcfart.png",
      "./images/screenshots/fartymcfart.png",
      "./images/screenshots/fartymcfart.png"
    ],
    mainTools: "• Unity 3D<br>"
  },

  tilevania: {
    title: 'TileVania',
    characteristics: "2D, Arcade",
    desc: [
      "",
      "",
      ""
    ],
    playLink: "https://i.simmer.io/@ianisout/tilevania-gamedev-tv-learning-project",
    repoLink: "https://github.com/ianisout/tilevania-gametv-project",
    img_src: [
      "./images/screenshots/tilevania.png",
      "./images/screenshots/tilevania.png",
      "./images/screenshots/tilevania.png",
      "./images/screenshots/tilevania.png"
    ],
    mainTools: "• Unity 2D<br>"
  },

  snowboarder: {
    title: 'Snow Boarder',
    characteristics: "2D, Arcade",
    desc: [
      "",
      "",
      ""
    ],
    playLink: "https://sharemygame.com/@ianisout/snow-boarder",
    repoLink: "https://github.com/ianisout/snow-boarder-gamedevtv",
    img_src: [
      "./images/screenshots/snow-boarder.png",
      "./images/screenshots/snow-boarder.png",
      "./images/screenshots/snow-boarder.png",
      "./images/screenshots/snow-boarder.png"
    ],
    mainTools: "• Unity 2D<br>"
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

SNOWBOARDER
colliders
cinemachine follow camera
triggers
scene management
particle effects
sound effects

*/