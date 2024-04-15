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

![](./design/desktop-design.jpg)
![](./design/desktop-success.jpg)
![](./design/mobile-design.jpg)
![](./design/mobile-success.jpg)

### Links

- Solution URL: [Github](https://github.com/delroscol98/Newsletter-Sign-Up-Page)
- Live Site URL: [Github Pages](https://delroscol98.github.io/Newsletter-Sign-Up-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project was my first time using Regex for form validation. In future however, due to the many complexities with forms, I will utilise third-party validators. The JS code below shows my use of Regex:

```js
const validateForm = (e) => {
  e.preventDefault();

  const userEmail = emailInput.value;
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(userEmail)) {
    signUpSect.classList.toggle("hidden");
    successSect.classList.toggle("hidden");
    main.style.width = "35%";

    console.log(`User email: ${userEmail}`);
  } else {
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("error");
  }
};
```

### Continued development

In future projects that involve forms, I would like to explore form validation more deeply and implement my own solutions and validations, however, I do also want to learn about third-party validators and make use of them so as to not re-invent the wheel every single time. Who knows... maybe I'll create a small library for form validations based on my own small projects.

### Useful resources

- [Youtube](https://www.youtube.com/watch?v=nRHCoOVSu5k) - This helped me to apply the Regex for form validation

## Author

- Frontend Mentor - [@delroscol98](https://www.frontendmentor.io/profile/delroscol98)
