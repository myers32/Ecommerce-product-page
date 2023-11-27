{
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
}