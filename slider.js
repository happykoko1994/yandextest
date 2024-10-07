document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1000) {
        // Мобильная версия слайдера
        function initMobileSlider() {
            const slidesMobile = document.querySelectorAll('.slide');
            const sliderMobile = document.querySelector('.slider');
            const nextBtnMobile = document.querySelector('.next-btn');
            const prevBtnMobile = document.querySelector('.prev-btn');
            let currentIndexMobile = 0;
            const totalSlidesMobile = slidesMobile.length;

            let autoSlideInterval = setInterval(() => {
                goToNextSlideMobile();
            }, 4000);

            function updateSliderMobile() {
                const slideWidthMobile = sliderMobile.clientWidth;
                const offsetMobile = -currentIndexMobile * slideWidthMobile;
                sliderMobile.style.transform = `translateX(${offsetMobile}px)`;
                updatePaginationMobile();
                updateButtonStateMobile();
            }

            function updatePaginationMobile() {
                const currentPageMobile = currentIndexMobile + 1;
                document.querySelector('.current-page').textContent = currentPageMobile;
                document.querySelector('.total-pages').textContent = totalSlidesMobile;
            }

            function updateButtonStateMobile() {
                if (currentIndexMobile === 0) {
                    prevBtnMobile.classList.add('disabled');
                } else {
                    prevBtnMobile.classList.remove('disabled');
                }

                if (currentIndexMobile >= totalSlidesMobile - 1) {
                    nextBtnMobile.classList.add('disabled');
                } else {
                    nextBtnMobile.classList.remove('disabled');
                }
            }

            function goToNextSlideMobile() {
                if (currentIndexMobile < totalSlidesMobile - 1) {
                    currentIndexMobile++;
                } else {
                    currentIndexMobile = 0; 
                }
                updateSliderMobile();
            }

            function goToPrevSlideMobile() {
                if (currentIndexMobile > 0) {
                    currentIndexMobile--;
                } else {
                    currentIndexMobile = totalSlidesMobile - 1; 
                }
                updateSliderMobile();
            }

            nextBtnMobile.addEventListener('click', () => {
                clearInterval(autoSlideInterval); 
                goToNextSlideMobile();
            });

            prevBtnMobile.addEventListener('click', () => {
                clearInterval(autoSlideInterval); 
                goToPrevSlideMobile();
            });

            updateSliderMobile();
        }

        initMobileSlider();
    } else {
        // Десктопная версия слайдера
        function initDesktopSlider() {
            const slidesDesktop = document.querySelectorAll('.slide');
            const sliderDesktop = document.querySelector('.slider');
            const nextBtnDesktop = document.querySelector('.next-btn');
            const prevBtnDesktop = document.querySelector('.prev-btn');
            let currentIndexDesktop = 0;
            const itemsPerPageDesktop = 3;
            const totalSlidesDesktop = slidesDesktop.length;

            let autoSlideInterval = setInterval(() => {
                goToNextSlideDesktop();
            }, 4000);

            function updateSliderDesktop() {
                const slideWidthDesktop = sliderDesktop.clientWidth / itemsPerPageDesktop;
                const offsetDesktop = -currentIndexDesktop * slideWidthDesktop;
                sliderDesktop.style.transform = `translateX(${offsetDesktop}px)`;
                updatePaginationDesktop();
                updateButtonStateDesktop();
            }

            function updatePaginationDesktop() {
                const totalPagesDesktop = Math.ceil(totalSlidesDesktop / itemsPerPageDesktop);
                const currentPageDesktop = Math.floor(currentIndexDesktop / itemsPerPageDesktop) + 1;
                const currentSlideDesktop = (currentIndexDesktop + itemsPerPageDesktop > totalSlidesDesktop) ? totalSlidesDesktop : currentIndexDesktop + itemsPerPageDesktop;

                document.querySelector('.current-page').textContent = currentSlideDesktop;
                document.querySelector('.total-pages').textContent = totalSlidesDesktop;
            }

            function updateButtonStateDesktop() {
                if (currentIndexDesktop === 0) {
                    prevBtnDesktop.classList.add('disabled');
                } else {
                    prevBtnDesktop.classList.remove('disabled');
                }

                if (currentIndexDesktop + itemsPerPageDesktop >= totalSlidesDesktop) {
                    nextBtnDesktop.classList.add('disabled');
                } else {
                    nextBtnDesktop.classList.remove('disabled');
                }
            }

            function goToNextSlideDesktop() {
                if (currentIndexDesktop + itemsPerPageDesktop < totalSlidesDesktop) {
                    currentIndexDesktop += itemsPerPageDesktop;
                } else {
                    currentIndexDesktop = 0; 
                }
                updateSliderDesktop();
            }

            function goToPrevSlideDesktop() {
                if (currentIndexDesktop - itemsPerPageDesktop >= 0) {
                    currentIndexDesktop -= itemsPerPageDesktop;
                } else {
                    currentIndexDesktop = totalSlidesDesktop - itemsPerPageDesktop; 
                }
                updateSliderDesktop();
            }

            nextBtnDesktop.addEventListener('click', () => {
                clearInterval(autoSlideInterval);
                goToNextSlideDesktop();
            });

            prevBtnDesktop.addEventListener('click', () => {
                clearInterval(autoSlideInterval); 
                goToPrevSlideDesktop();
            });

            updateSliderDesktop();
        }

        initDesktopSlider();
    }
});
