// PROTOTYPES
function Slider(slider) {
  // check if slider has been passed in
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // select the elements needed for slider
  // selects class of "slides"
  this.slides = slider.querySelector('.slides');
  // this.slider wasn't named after we refactored and caused a bug.
  // The slider that gets passed in to Slider needs to be saved on the instance
  // bc we need to querySelector it in the future
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // When this slider is created run the startSlider function
  // aka a constructor
  this.startSlider();
  this.applyClasses();

  // Event listeners
  // hook up click events for prev, next, and current buttons
  // if need to pass an argument to a funct then need to run an arrow func
  // or use call or apply
  // if don't need to pass args, you just pass the move function
  // 25:00 mark
  prevButton.addEventListener('click', () => this.move('back'));
  // see 08:50 of prototyping video discussing => functions and binding in relation to the next line
  nextButton.addEventListener('click', () => this.move());
}

// add and remove css classes and populate let variables from above.
Slider.prototype.startSlider = function () {
  // updating the current variable set with let earlier
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

// apply classes so second slider will show
Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
}

Slider.prototype.move = function (direction) {
  // remove classes and add others to shift prev, current, next slides
  // strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  // use ...spread to remove those classes from these elements
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  // figure out which direction they're going
  // and shift over by one.
  // a little confusing
  if (direction === 'back') {
    // using destructuring to switch variables easily
    // make a new array of the new values
    // and destructure them over and into the prev, current, and next variables.
    // [new array, or new slide] = [what they were in their old position]
    // get prev slide, if there is none, get the last slide from the entire slider for wrapping
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // gets the next slide 
      // or if it's at the end, loop around and grab first slide
      this.next.nextElementSibling || this.slides.firstElementChild];
  }
  this.applyClasses();
}

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

// messy
// window.addEventListener('keyup', function (e) {
//   if (e.key === 'ArrowRight') {
//     dogSlider.move();
//   } else {
//     if (e.key === 'ArrowLeft') {
//       dogSlider.move('back');
//     }
//   }
// });

// cleaned up
window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  } else if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
