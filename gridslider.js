
function initGridSlider() {
    const gridSlides = document.querySelectorAll('.grid-slide');
    const gridSliderContainer = document.querySelector('.grid-mobile-slider-container');
    const gridNextBtn = document.querySelector('.next-btn1');
    const gridPrevBtn = document.querySelector('.prev-btn1');
    const gridPagination = document.getElementById('pagination1');
    let gridCurrentIndex = 0;
    const gridTotalSlides = gridSlides.length;

    function updateGridSlider() {
        const gridSlideWidth = gridSliderContainer.clientWidth;
        const gridOffset = -gridCurrentIndex * gridSlideWidth;
        gridSliderContainer.style.transform = `translateX(${gridOffset}px)`;
        updateGridPagination();
        updateGridButtonState();
    }

    function createGridPagination() {
        for (let i = 0; i < gridTotalSlides; i++) {
            const circle = document.createElement('div');
            circle.classList.add('grid-circle');
            if (i === 0) circle.classList.add('active');
            gridPagination.appendChild(circle);
        }
    }

    function updateGridPagination() {
        const circles = document.querySelectorAll('.grid-circle');
        circles.forEach((circle, index) => {
            circle.classList.toggle('active', index === gridCurrentIndex);
        });
    }

    function updateGridButtonState() {
        if (gridCurrentIndex === 0) {
            gridPrevBtn.classList.add('disabled');
        } else {
            gridPrevBtn.classList.remove('disabled');
        }

        if (gridCurrentIndex >= gridTotalSlides - 1) {
            gridNextBtn.classList.add('disabled');
        } else {
            gridNextBtn.classList.remove('disabled');
        }
    }

    gridNextBtn.addEventListener('click', () => {
        if (gridCurrentIndex < gridTotalSlides - 1) {
            gridCurrentIndex++;
        }
        updateGridSlider();
    });

    gridPrevBtn.addEventListener('click', () => {
        if (gridCurrentIndex > 0) {
            gridCurrentIndex--;
        }
        updateGridSlider();
    });

    createGridPagination();
    updateGridSlider();
}

initGridSlider();
