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
    if (activeContainer.style.display === 'none') {
      userDetails.style.display = 'flex';
      activeContainer.style.display = 'flex';
    } else if (activeContainer.style.display === 'flex') {
      activeContainer.style.display = 'none';
    }
  }

  // if (window.matchMedia('(max-width: 999px)').matches) {
  //   userDetails.style.display = 'none';
  //   activeContainer.style.display = 'flex';
  // } else if (window.matchMedia('(min-width: 999px)').matches) {
  //   userDetails.style.display = 'flex';
  //   activeContainer.style.display = 'flex';
  //   shareButton.addEventListener('click', () => {
  //     if (activeContainer.style.display === 'flex') {
  //       activeContainer.style.display = 'none';
  //     } else if (activeContainer.style.display === 'none') {
  //       activeContainer.style.display = 'flex';
  //     }
  //   });
  // }
}

shareButton.addEventListener('click', viewShareBar);
alternativeShare.addEventListener('click', hideShareBar);
