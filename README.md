# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Newsletter Desktop](./design/Newsletter%20desktop.png)

### Links

- Solution URL: [Github Newsletter solution](https://github.com/ManuelaRendonP/Newsletter-sign-up)
- Live Site URL: [Newsletter Manuela Rendon](https://newsletter-manuela-rendon.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Styled Components](https://getbootstrap.com/) - For styles

### What I learned

One of my main learnings has been the validations that need to be added to the code if you want everything to work correctly. Besides that I have learned how to gradually integrate and join all the components that are on a page, this time making two and making them both go together.

```js
function saveAddress() {
    const correo = emailInput.value;
    const url = 'subscribing.html?correo=' + encodeURIComponent(correo);
    window.location.href = url;
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const correo = urlParams.get('correo');

    if (correo) {
        console.log(correo);
        emailSave.textContent = correo;
    }
})
```

### Continued development

I need to focus a little more on making everything go more smoothly in terms of the way I work, however, I know exactly where to do what without getting confused; as for something technical I think I will focus on responsive, since this time it has cost me a little more and I want to get better at it.

### Useful resources

- [Uncaught TypeError: Cannot set properties of null (setting 'textContent')](https://es.stackoverflow.com/questions/490941/uncaught-typeerror-cannot-set-properties-of-null-setting-textcontent) - This helped me with a bug that I kept getting when coding but I was able to fix it thanks to this resource.

## Author

- Website - [Manuela Rendón de la Pava](https://portfolio-manuela-rendon.netlify.app/)
- Frontend Mentor - [@ManuelaRendonP](https://www.frontendmentor.io/profile/ManuelaRendonP)