function Gallery(gallery) {
  // safety check right off the bat
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // making variables to live in this function so the two galleries don't clash
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  // using document, b/c markup for the modal is shared between the two 
  // b/c only possible to have one open at a time
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  // keep track of what currently opened image is
  // will help with next and previous image clicks
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');
    // first check to see if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return; // stop the function from running
    }
    // if not open
    modal.classList.add('open');
    // Event listeners to be bound when we open the modal
    // makes sure we only ever are listening for these once
    // when we close the modal down, we remove the event listeners
    // so we don't have unnecesary EL runnig on things that aren't showing on the page.
    // if we didn't have these we'd have error messages
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard
    // cleaning up after ourselves. removing the EL we added above
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    // ********************??????????????????????***************
    // if thing they actually clicked
    // and the thing you're listening for the click on
    // are the same thing?
    // that means the user has clicked on the actual modal div
    // not modal inner, or anything inside of it
    // then close it
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    // useful to add return to make it stop running
    // doesn't return a value, but it is
    // so it doesn't check if other conditions are true
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage(event) {
    // what is the next image?
    // passing reference to that image
    // to our show image function
    // show next, or go to first element, so it wraps around back to first image
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(event) {
    // same as above but for previous
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  function showImage(el) {
    // I believe this runs when image is clicked
    if (!el) {
      console.log('no image to show');
      return;
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    // when we open up an image we set it to the current one
    // helps with previous/next buttons
    currentImage = el;
    openModal();
  }

  // THESE ARE OUR EVENT LISTENERS
  // get the event and pass the event.currentTarget to showImage
  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  // could do this in the same loop above, but for sanity's sake
  // loop over each image
  images.forEach(image => {
    // attach EL for each image
    image.addEventListener('keyup', e => {
      // when that is keyup'd, check if it was Enter
      if (e.key === 'Enter') {
        // if it was Enter, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
