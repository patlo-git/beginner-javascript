// we have our gallery
function Gallery(gallery) {
  // safety check right off the bat
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // we have our INSTANCE PROPERTIES
  // this gallery is equal to the gallery that was passed in
  this.gallery = gallery;
  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  // using document, b/c markup for the modal is shared between the two
  // b/c only possible to have one open at a time
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // WE HAVE OUR BINDING OF OUR METHODS THAT NEED ACCESS TO 'THIS'
  // bind our methods to the instance when we need them.
  // we're creating an instance property, showNextImage,
  // of the same prototype function, but bound with 'this'
  // bind allows us to explicitly supply what this is equal to
  // saving reference to it inside our constructor
  // otherwise we'd lose reference if invoked at the source
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // WE HAVE OUR IMAGES
  // THESE ARE OUR EVENT LISTENERS
  // HAPPENS ONCE WHEN THE PAGE LOADS WHEN THE GALLERY IS CREATED
  // get the event and pass the event.currentTarget to showImage
  this.images.forEach(image =>
    image.addEventListener('click', (e) => this.showImage(e.currentTarget))
  );

  // could do this in the same loop above, but for sanity's sake
  // loop over each image
  this.images.forEach(image => {
    // attach EL for each image
    image.addEventListener('keyup', e => {
      // when that is keyup'd, check if it was Enter
      if (e.key === 'Enter') {
        // if it was Enter, show that image
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);
}

// WE HAVE ALL OUR PROTOTYPAL METHODS
Gallery.prototype.openModal = function () {
  console.info('Opening Modal...');
  // first check to see if the modal is already open
  if (this.modal.matches('.open')) {
    console.info('Modal already open');
    return; // stop the function from running
  }
  // if not open
  this.modal.classList.add('open');

  // Event listeners to be bound when we open the modal
  // makes sure we only ever are listening for these once
  // when we close the modal down, we remove the event listeners
  // so we don't have unnecesary EL running on things that aren't showing on the page.
  // if we didn't have these we'd have error messages
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  // TODO: add event listeners for clicks and keyboard
  // cleaning up after ourselves. removing the EL we added above
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handleClickOutside = function (e) {
  // ********************??????????????????????***************
  // if thing they actually clicked
  // and the thing you're listening for the click on
  // are the same thing?
  // that means the user has clicked on the actual modal div
  // not modal inner, or anything inside of it
  // then close it
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
}

Gallery.prototype.handleKeyUp = function (event) {
  // useful to add return to make it stop running
  // doesn't return a value, but it is
  // so it doesn't check if other conditions are true
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === 'ArrowRight') return this.showNextImage();
  if (event.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showNextImage = function () {
  // what is the next image?
  // passing reference to that image
  // to our show image function
  // show next, or go to first element, so it wraps around back to first image
  console.log(this);
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

Gallery.prototype.showPrevImage = function (event) {
  // same as above but for previous
  this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}
Gallery.prototype.showImage = function (el) {
  // I believe this runs when image is clicked
  if (!el) {
    console.log('no image to show');
    return;
  }
  // update the modal with this info
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  // when we open up an image we set it to the current one
  // helps with previous/next buttons
  this.currentImage = el;
  this.openModal();
}

// Use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1);
console.log(gallery2);
