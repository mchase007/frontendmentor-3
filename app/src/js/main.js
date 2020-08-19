const shareButton = document.getElementById('share-button');
const activeContainer = document.querySelector('.active-container');
const userDetails = document.getElementById('user');
const alternativeShare = document.querySelector('.active .share-button');

function viewShareBar() {
  console.log('clicked');
  userDetails.style.display = 'none';
  activeContainer.style.display = 'flex';
}

function hideShareBar() {
  console.log('clicked');
  userDetails.style.display = 'flex';
  activeContainer.style.display = 'none';
}

shareButton.addEventListener('click', viewShareBar);
alternativeShare.addEventListener('click', hideShareBar);
