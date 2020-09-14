const shareButton = document.getElementById('share-button');
const activeContainer = document.querySelector('.active-container');
const userDetails = document.getElementById('user');
const alternativeShare = document.querySelector('.active .share-button');

window.addEventListener('resize', () => {
  if (window.innerWidth <= 999 && activeContainer.style.display === 'flex' && userDetails.style.display === 'flex') {
    userDetails.style.display = 'none';
    activeContainer.style.display = 'flex';
  } else if (window.innerWidth > 999 && activeContainer.style.display === 'flex' && userDetails.style.display === 'none') {
    userDetails.style.display = 'flex';
    activeContainer.style.display = 'flex';
  }
});

function hideShareBar() {
  userDetails.style.display = 'flex';
  activeContainer.style.display = 'none';
}

let clickCounter = 0;

function viewShareBar() {
  if (window.innerWidth <= 999) {
    userDetails.style.display = 'none';
    activeContainer.style.display = 'flex';
  } else if (window.innerWidth > 999) {
    let state;
    // eslint-disable-next-line no-plusplus
    clickCounter++;
    if (clickCounter % 2 === 0) {
      state = 'second-click';
    } else {
      state = 'first-click';
    }
    if (state === 'first-click') {
      userDetails.style.display = 'flex';
      activeContainer.style.display = 'flex';
    } else if (state === 'second-click') {
      activeContainer.style.display = 'none';
    }
  }
}

shareButton.addEventListener('click', viewShareBar);
alternativeShare.addEventListener('click', hideShareBar);

