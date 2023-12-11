# Ecommerce product page

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

- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
- Desktop preview
  
![desktop-preview](https://github.com/myers32/Ecommerce-product-page/assets/122280628/9cafea54-b015-4fac-8d71-9dd93a012ca1)

- Mobile preview

	![mobile-design](https://github.com/myers32/Ecommerce-product-page/assets/122280628/6e326ed4-272a-45a0-851d-8f459d9a9bbe)
	![mobile-design-basket-filled](https://github.com/myers32/Ecommerce-product-page/assets/122280628/1bbcc045-6ff7-4f18-a60b-8a090c5c9ccb)

### Links

- View the outcome. URL: (https://myers32.github.io/Ecommerce-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- [Sass](https://sass-lang.com/): Syntactically Awesome Style Sheets 
- Basic JavaScript
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  
### What I learned
Basically after this project I feel that my javascript skills increased. I learned:

How to create a slider using css and javascript. Example: 
```
const nextImage = () => {
			const next = document.querySelector(".next-js");

			next.addEventListener("click", () => {
				images[currentIndex].classList.remove("main");

				if (currentIndex === totalImages - 1) {
					currentIndex = 0;
				} else {
					currentIndex++;
				}

				images[currentIndex].classList.add("main");
			});
		};
```

How to render a HTML in certain conditions:
```
const renderCartDisplay = () => {
			const numberOfCartItems = Number(cartItems.textContent);

			if (numberOfCartItems === 0) {
				cartContent.innerHTML =
					`
				<p style="font-weight: bold;">Your cart is empty.</p>
				`;

			} else if (numberOfCartItems > 0) {
				cartContent.innerHTML =
					`
					<div class="cart-wrapper">

					<img src="images/image-product-1-thumbnail.jpg" alt="Product image" class="cart-image">

					<p class="cart-paragraph">Fall Limited Edition Sneakers $125.00 x ${numberOfCartItems} <strong class="cart-price">$${125 * numberOfCartItems}.00</strong></p>

					<button class="cart-deleteBtn">
					<img src="images/icon-delete.svg" alt="Product image" class="cart-deleteBtnImage">
					</button>

					</div>

					<div class="cart-checkout">

					<button class="cart-checkoutBtn">
					Checkout
					</button>

					</div>
					`;
			};
		};
```
How to use forEach loop and how to use it to aim all thumbnails items and display as a main image
```js
const thumbnails = () => {
		const images = document.querySelectorAll(".thumbnail-js");
		const mainImages = document.querySelectorAll(".slider__images--image");
		let currentIndex = 0;

		images.forEach((thumbnail, index) => {
			thumbnail.addEventListener("click", () => {
				mainImages[currentIndex].classList.remove("main");
				currentIndex = index;
				mainImages[currentIndex].classList.add("main");
			});
		});
	};
```


### Continued development
In the near future I will learn more of JavaScript by creating small project. I haven't decided yet if I will upload them on my profile. For now I will mostly focus on Vanilla JavaScript to create a stable fundamental knowledge prior to jump into learning framework. That framework will probably be React which is the most popular JavaScript framework at the moment.
Additionally I think that my HTML and CSS knowledge is satisfying me at this time, so my focus will go to the better understaning of JavaScript fundamentals.

### Useful resources

- [CSS-Tricks](https://www.css-tricks.com) - This helped me a lot at creating this code. It has really interesting articles where everything I needed was explained in beginner friendly manner. I really enjoyed helping myself with this website when writing this code.
- [Kurs-JavaScript](https://www.kursjs.pl/) - I also have to mention that page. It has really nice articles for people learning JavaScript. It is written in beginner friendly language with code snippets and examples that help you to understand certain things better. I found it really useful.
  
## Author

- [Dawid Osiński](https://github.com/myers32)
