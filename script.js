const exploreBtn = document.querySelector('.explore-btn');
const exploreList = document.querySelector('.explore-list');


// exploreBtn.addEventListener('mouseenter',() => {
//     exploreList.style.visibility = 'visible';
// });


exploreBtn.addEventListener('mouseenter', () => {
  exploreList.style.visibility = 'visible';
});

exploreBtn.addEventListener('mouseleave', () => {
  exploreList.style.visibility = 'hidden';
});
