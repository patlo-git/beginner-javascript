// closure
function Slider(slider) {
  // check if slider has been passed in
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // create some variables for working with the slider
  let prev;
  let current;
  let next;
  // select the elements needed for slider
  // selects class of "slides"
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // add and remove css classes and populate let variables from above.
  function startSlider() {
    // updating the current variable set with let earlier
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  // apply classes so second slider will show
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // remove classes and add others to shift prev, current, next slides
    // strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    // use ...spread to remove those classes from these elements
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    // figure out which direction they're going
    // and shift over by one.
    // a little confusing
    if (direction === 'back') {
      // using destructuring to switch variables easily
      // make a new array of the new values
      // and destructure them over and into the prev, current, and next variables.
      // [new array, or new slide] = [what they were in their old position]
      // get prev slide, if there is none, get the last slide from the entire slider for wrapping
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current];
    } else {
      [prev, current, next] = [
        current,
        next,
        // gets the next slide 
        // or if it's at the end, loop around and grab first slide
        next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }
  // When this slider is created run the startSlider function
  // aka a constructor
  startSlider();
  applyClasses();

  // Event listeners
  // hook up click events for prev, next, and current buttons
  // if need to pass an argument to a funct then need to run an arrow func
  // or use call or apply
  // if don't need to pass args, you just pass the move function
  // 25:00 mark
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
