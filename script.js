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



// popup

// const popUp = document.getElementById('pop-up-info');
// const backPopupFilter = document.getElementById('back-popup-cover');

// backPopupFilter.addEventListener('click', () => {
//   turnOffPopUp();
// });

// const turnOffPopUp = () => {
//   document.body.style.overflow = 'unset';
//   popUp.style.visibility = 'hidden';
//   backPopupFilter.style.visibility = 'hidden';
// }

// document.onkeydown = function(evt) {
//   let isEscape = false;

//   if (popUp.style.visibility == 'visible') {
//     if ("key" in evt) {
//       isEscape = (evt.key === "Escape" || evt.key === "Esc");
//     }

//     if (isEscape) {
//       turnOffPopUp();
//     }
//   }
// };

// function ShowMoreDetails(item) {
//   popUp.style.visibility = 'visible';
//   backPopupFilter.style.visibility = 'visible';
//   document.body.style.overflow = 'hidden';

//   popUp.innerHTML = generateHtmlForPopup(popUpDisplayData[item.id]);
// }

// function generateHtmlForPopup(game) {
//   mybutton.style.display = "none";

//   return `  
//   <div class="pop-up-main-container">
  
//   <div class="pop-up-left">
//   <h2 class="mb-4">${game.title}</h2>
//       <p class="popup-text">${game.desc}</p>
//       <p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       <img src=${game.img_src}>
//       <p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       <img src=${game.img_src}>
//       <p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       <img src=${game.img_src}>
//       <p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       <img src=${game.img_src}>
      
//     </div>
      
//     <div class="pop-up-right flex-column">

//     <div class="d-flex justify-content-between mb-4 mt-2">
//       <span class="popup-text align-self-center exit-span">(<strong>esc</strong> to exit)</span>
//       <h3><a class="exit-popup-btn ml-3" onclick="turnOffPopUp()"> x</a></h3>
//     </div>

//       <div class="mb-5">
//         <h4 class="popup-text" style="color: #fafafa">Characteristics:</h4>
//         <h5 class="popup-text">${game.characteristics}</h5>
//       </div>

//       <div  class="mb-5">
//         <h4 class="popup-text" style="color: #fafafa">Main tools:</h4>
//         <h5 class="popup-text">${game.mainTools}</h5>
//       </div>

//       <div class="external-links-container align-self-baseline">
//         <div class="external-link-access">
//           <img class="external-link-image" src="./images/play-icon.png" alt="github logo">
//           <a href="${game.playLink}" target="_blank">PLAY</a>
//         </div>
//         <div class="external-link-access">
//           <img class="external-link-image" src="./images/GitHub-Mark-Light-32px.png" alt="github logo">
//           <a href="${game.repoLink}" target="_blank">Repo</a>
//         </div>
//       </div>
//     </div>
    
//   </div>
//   `
// }

// const popUpDisplayData = {
//   maestro: {
//     title: 'Maestro Shooter',
//     characteristics: "2D, Rhythm Action, Shooter",
//     desc: "",
//     playLink: "https://i.simmer.io/@ianisout/maestro-shooter",
//     repoLink: "https://github.com/ianisout/maestro-shooter-unity",
//     img_src: "./images/screenshots/maestroshooter.png",
//     mainTools: "• Unity 2D<br>• Adobe Illustrator<br>• Sibelius<br>• OBS"
//   },
//   mcfarty: {
//     title: 'Farty McFart',
//     characteristics: "3D, Arcade",
//     desc: "",
//     playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
//     repoLink: "https://github.com/ianisout/mc-thrust",
//     img_src: "./images/screenshots/fartymcfart.png"
//   },
//   tilevania: {
//     title: 'TileVania',
//     characteristics: "3D, Arcade",
//     desc: "",
//     playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
//     repoLink: "https://github.com/ianisout/mc-thrust",
//     img_src: "./images/screenshots/fartymcfart.png"
//   },
//   snowboarder: {
//     title: 'Snow Boarder',
//     characteristics: "3D, Arcade",
//     desc: "",
//     playLink: "https://i.simmer.io/@ianisout/farty-mcfart",
//     repoLink: "https://github.com/ianisout/mc-thrust",
//     img_src: "./images/screenshots/fartymcfart.png"
//   },
// };

/* 

Skills explored:




MAESTRO SHOOTER
camera/movement boundaries
pathfinding
coroutines
screen shake
UI
C# level manager
C# singleton scorekeeper


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
learning:
colliders
cinemachine follow camera
triggers
scene management
particle effects
sound effects

*/