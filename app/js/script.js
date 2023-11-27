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



	const counter = () => {
		let amount = 0;
		let result = document.querySelector(".result-js");

		const increaseAmount = () => {
			const increase = document.querySelector(".increase-js");

			increase.addEventListener("click", () => {
				amount++;
				result.innerHTML = amount;
			});
		};

		const decreaseAmount = () => {
			const decrease = document.querySelector(".decrease-js");

			decrease.addEventListener("click", () => {

				if (amount > 0) {
					amount--;
					result.innerHTML = amount;
				}
			});
		};

		decreaseAmount();
		increaseAmount();
	};

	slider();
	counter();
}