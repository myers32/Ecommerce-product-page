{
	const slider = () => {

		const images = document.querySelector(".slider__images").children;
		const totalImages = images.length;
		let currentIndex = 0;

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

		const prevImage = () => {
			const previous = document.querySelector(".previous-js");

			previous.addEventListener("click", () => {
				images[currentIndex].classList.remove("main");

				if (currentIndex === 0) {
					currentIndex = totalImages - 1;
				} else {
					currentIndex--;
				}

				images[currentIndex].classList.add("main");
			});
		};


		const init = () => {
			nextImage();
			prevImage();
		};

		init();
	};

	const thumbnails = () => {
		const images = document.querySelectorAll(".thumbnail-js");
		const mainImages = document.querySelectorAll(".slider__images--image");
		let currentIndex = 0;

		images.forEach((thumbnail, index) => {
			thumbnail.addEventListener("click", () => {
				mainImages[currentIndex].classList.remove("main");
				images[currentIndex].classList.remove("img-opacity");
				currentIndex = index;
				mainImages[currentIndex].classList.add("main");
				images[currentIndex].classList.add("img-opacity");
			});
		});
	};

	const counter = () => {
		let amount = 0;
		let result = document.querySelector(".result-js");

		const increaseAmount = () => {
			const increase = document.querySelector(".increase-js");

			increase.addEventListener("click", (e) => {
				e.preventDefault();

				if (amount < 0 || amount < 10) {
					amount++;
					result.innerHTML = amount;
				};

			});
		};

		const decreaseAmount = () => {
			const decrease = document.querySelector(".decrease-js");

			decrease.addEventListener("click", (e) => {
				e.preventDefault();

				if (amount > 0) {
					amount--;
					result.innerHTML = amount;
				};

			});
		};

		const init = () => {
			decreaseAmount();
			increaseAmount();
		};

		init();
	};

	const sideMenu = () => {
		const mobileMenu = document.querySelector(".mobile__menu");
		const body = document.querySelector("body");

		const openMenu = () => {
			const openButton = document.querySelector(".openMobile-js");

			openButton.addEventListener("click", () => {
				mobileMenu.classList.add("openedMenu");
				body.classList.add("overflow");
			});
		};

		const closeMenu = () => {
			const closeButton = document.querySelector(".closeMobile-js");

			closeButton.addEventListener("click", () => {
				mobileMenu.classList.remove("openedMenu");
				body.classList.remove("overflow");
			});
		};

		const init = () => {
			openMenu();
			closeMenu();
		};

		init();
	};

	const cartDisplay = () => {
		const cartItems = document.querySelector(".cart-items");
		const cartContent = document.querySelector(".cartContent-js");

		const renderCartAmount = () => {
			const result = document.querySelector(".result-js");
			const addItems = document.querySelector(".addItems");

			addItems.addEventListener("click", () => {
				const value = Number(result.textContent);

				if (value >= 0) {
					cartItems.innerHTML = value;
					renderCartDisplay();
				}
			});
		};

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

		const deleteCartItems = () => {
			document.addEventListener("click", function (e) {
				const target = e.target.closest(".cart-deleteBtn");

				if (target) {
					cartContent.innerHTML = `<p style="font-weight: bold;">Your cart is empty.</p>`
					cartItems.innerHTML = 0;
				}
			})
		}

		deleteCartItems();
		renderCartAmount();
		renderCartDisplay();
	};

	const cart = () => {

		const toggleCart = () => {
			const cartBtn = document.querySelector(".cartIcon-js");
			const cartDisplay = document.querySelector(".cart__display");

			cartBtn.addEventListener("click", () => {
				cartDisplay.classList.toggle("active");
			});
		};

		toggleCart();
	};

	const lightBox = () => {

		const openAndClose = () => {
			const openLightBox = document.querySelector(".openLightBox-js");
			const lightBox = document.querySelector(".lightbox");
			const closeLightBox = document.querySelector(".closeLightBox-js");

			openLightBox.addEventListener("click", () => {
				lightBox.classList.add("lightBox-active");
			});

			closeLightBox.addEventListener("click", () => {
				lightBox.classList.remove("lightBox-active");
			});
		};
		openAndClose();

		const lightboxSlider = () => {
			const images = document.querySelector(".lightbox__images").children;
			const totalImages = images.length;
			let currentIndex = 0;

			const nextImage = () => {
				const next = document.querySelector(".lightbox-nextImage-js");

				next.addEventListener("click", () => {
					images[currentIndex].classList.remove("lightbox-main");

					if (currentIndex === totalImages - 1) {
						currentIndex = 0;
					} else {
						currentIndex++;
					}

					images[currentIndex].classList.add("lightbox-main");
				});
			};
			nextImage();
			const prevImage = () => {
				const previous = document.querySelector(".lightbox-previousImage-js");

				previous.addEventListener("click", () => {
					images[currentIndex].classList.remove("lightbox-main");

					if (currentIndex === 0) {
						currentIndex = totalImages - 1;
					} else {
						currentIndex--;
					};

					images[currentIndex].classList.add("lightbox-main");
				});
			};
			prevImage();
		};
		lightboxSlider();

		const openThumbnailImage = () => {
			const lightBoxThumbnails = document.querySelectorAll(".lightbox-thumbnail-js");
			const mainLightBoxImages = document.querySelectorAll(".lightbox__images--image");
			let currentIndex = 0;

			lightBoxThumbnails.forEach((thumbnail, index) => {
				thumbnail.addEventListener("click", () => {
					mainLightBoxImages[currentIndex].classList.remove("lightbox-main");
					lightBoxThumbnails[currentIndex].classList.remove("img-opacity");
					currentIndex = index;
					mainLightBoxImages[currentIndex].classList.add("lightbox-main");
					lightBoxThumbnails[currentIndex].classList.add("img-opacity");
				});
			});
		};
		openThumbnailImage();
	};

	const init = () => {

		slider();
		thumbnails();
		counter();
		sideMenu();
		cartDisplay();
		cart();
		lightBox();
	};
	init();
}