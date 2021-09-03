/*
 * -----------------------------------------
 *  REQUIRED
 * - - - - - - - - - - - - - - - - - - - - -
 */

// import feather from 'feather-icons';

const countChars = eventOrElement => {
  const element = eventOrElement.currentTarget || eventOrElement;
  // console.log('element:', element);
  const max = element.dataset.max
    ? parseInt(element.dataset.max, 10) : 500;
  // console.log('max:', max);
  const parent = element.parentElement;
  // console.log('parent:', parent);
  const counter = parent.querySelector('.count-text');
  // console.log('counter:', counter);
  let trimed = (element.value || '').trim();
  if (trimed.length > max) {
    trimed = trimed.substring(0, max);
    element.value = trimed;
  }
  // console.log('trimed:', trimed);
  const count = trimed.length;
  // console.log('count:', count);
  const text =`<small>${count}/${max} signes max</small>`;
  // console.log('text:', text);
  counter.innerHTML = text;
};

const setHeight = eventOrElement => {
  const element = eventOrElement.currentTarget || eventOrElement;
  console.log('element:', element);
};

/*
 * -----------------------------------------
 *  INIT
 * - - - - - - - - - - - - - - - - - - - - -
 */

document.addEventListener('DOMContentLoaded', () => {

  const formControls = document.querySelectorAll('.form-control');
  // console.log(formControls);
  formControls.forEach(control => {
    // console.log(control);
    control.addEventListener('blur', eve => {
      eve.currentTarget.value = (eve.currentTarget.value || '').trim();
    });
    if (control.dataset.count && control.dataset.count === 'true') {
      // console.log(control.dataset.count);
      control.addEventListener('input', countChars, false);
      control.addEventListener('blur', eve => {
        eve.currentTarget.value = (eve.currentTarget.value || '').trim();
        countChars(control);
      });
      countChars(control);
    }
    // if (control.dataset.height && control.dataset.height === 'auto') {
    //   const minHeight = control.clientHeight;
    //   console.log('minHeight:', minHeight);
    //   control.style.minHeight = minHeight + 'px';
    //   const scrollHeight = control.scrollHeight;
    //   console.log('scrollHeight:', scrollHeight);
    //   control.style.height = scrollHeight + 'px';
    // }
  });

});
