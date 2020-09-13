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

function viewShareBar() {
  if (window.innerWidth <= 999) {
    userDetails.style.display = 'none';
    activeContainer.style.display = 'flex';
  } else if (window.innerWidth > 999) {
    this.active = !this.active;
    const step = (this.active ? 3 : 0);
    if (step === 3) {
      userDetails.style.display = 'flex';
      activeContainer.style.display = 'flex';
    } else if (step === 0) {
      activeContainer.style.display = 'none';
    }
  }
}

shareButton.addEventListener('click', viewShareBar);
alternativeShare.addEventListener('click', hideShareBar);
