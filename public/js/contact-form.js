const contactForm = document.querySelector('#contact-form');
const messageContainerHTML = `<div class="text-sm text-red-800 error-message"></div>`;
let errorMessageHTML = (message) =>
  `<span class="mt-2 block">${message}</span>`;

//#region Formats
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//#endregion

/**
 * Adds the error message container to each form element
 */
Array.from(contactForm.elements).forEach((e, i) => {
  //All except submit input
  if (i < contactForm.elements.length - 1) {
    let elementsParent = e.parentElement.parentElement;
    elementsParent.innerHTML += messageContainerHTML;
  }
});

/**
 * Validate all input values
 */

let isFormValid = false;
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  Array.from(contactForm.elements).forEach((e, i) => {
    //All except submit input
    if (i < contactForm.elements.length - 1) {
      let elementsParent = e.parentElement.parentElement;
      elementsParent.querySelector('.error-message').innerHTML = '';

      //Displays an error if input is empty
      if (e.value == '') {
        elementsParent.querySelector('.error-message').innerHTML =
          errorMessageHTML('Este campo es obligatorio.');
        isFormValid = false;
      } else {
        //Validate email address
        if (e.name == 'email' && !e.value.match(emailFormat)) {
          elementsParent.querySelector('.error-message').innerHTML =
            errorMessageHTML('Debes ingresar un correo válido.');
        } else {
          isFormValid = true;
        }
      }
    }
  });

  if (isFormValid) {
    //TODO: Send email
  }
});
