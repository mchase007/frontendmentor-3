const shareButton = document.getElementById('share-button');
const activeContainer = document.querySelector('.active-container');
const userDetails = document.getElementById('user');
const alternativeShare = document.querySelector('.active .share-button');

function viewShareBar() {
  console.log('clicked');

  if (window.matchMedia('(max-width: 999px)').matches) {
    userDetails.style.display = 'none';
    activeContainer.style.display = 'flex';
  } else {
    userDetails.style.display = 'flex';
    activeContainer.style.display = 'flex';
    shareButton.addEventListener('click', () => {
      if (activeContainer.style.display === 'flex') {
        activeContainer.style.display = 'none';
      } else {
        activeContainer.style.display = 'flex';
      }
    });
  }
}

function hideShareBar() {
  console.log('clicked');
  userDetails.style.display = 'flex';
  activeContainer.style.display = 'none';
}

shareButton.addEventListener('click', viewShareBar);
alternativeShare.addEventListener('click', hideShareBar);
