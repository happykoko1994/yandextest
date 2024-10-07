document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1000) {
      // Мобильная версия слайдера
      function initMobileSlider() {
        const slidesMobile = document.querySelectorAll('.slide');
        const sliderMobile = document.querySelector('.slider');
        const nextBtnMobile = document.querySelector('.next-btn');
        const prevBtnMobile = document.querySelector('.prev-btn');
        const paginationMobile = document.getElementById('pagination');
        let currentIndexMobile = 0;
        const totalSlidesMobile = slidesMobile.length;
        function updateSliderMobile() {
            const slideWidthMobile = sliderMobile.clientWidth;
            const offsetMobile = -currentIndexMobile * slideWidthMobile;
            sliderMobile.style.transform = `translateX(${offsetMobile}px)`;
            updatePaginationMobile();
            updateButtonStateMobile();
        }
  
        function updatePaginationMobile() {
            const currentPageMobile = currentIndexMobile + 1;
            const totalPagesMobile = totalSlidesMobile;
            document.querySelector('.current-page').textContent = currentPageMobile;
            document.querySelector('.total-pages').textContent = totalPagesMobile;
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
  
        nextBtnMobile.addEventListener('click', () => {
            if (currentIndexMobile < totalSlidesMobile - 1) {
                currentIndexMobile++;
            }
            updateSliderMobile();
        });
  
        prevBtnMobile.addEventListener('click', () => {
            if (currentIndexMobile > 0) {
                currentIndexMobile--;
            }
            updateSliderMobile();
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
        const paginationDesktop = document.getElementById('pagination');
        let currentIndexDesktop = 0;
        const itemsPerPageDesktop = 3;
        const totalSlidesDesktop = slidesDesktop.length;
        
        function updateSliderDesktop() {
            const slideWidthDesktop = sliderDesktop.clientWidth / itemsPerPageDesktop;
            const offsetDesktop = -currentIndexDesktop * slideWidthDesktop;
            sliderDesktop.style.transform = `translateX(${offsetDesktop}px)`;
            updatePaginationDesktop();
            updateButtonState();
        }
  
        function updatePaginationDesktop() {
            const totalPagesDesktop = Math.ceil(totalSlidesDesktop / itemsPerPageDesktop);
            const currentPageDesktop = Math.floor(currentIndexDesktop / itemsPerPageDesktop) + 1;
            const currentSlideDesktop = (currentIndexDesktop + itemsPerPageDesktop > totalSlidesDesktop) ? totalSlidesDesktop : currentIndexDesktop + itemsPerPageDesktop;
  
            document.querySelector('.current-page').textContent = currentSlideDesktop;
            document.querySelector('.total-pages').textContent = totalSlidesDesktop;
        }
  
        function updateButtonState() {
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
  
        nextBtnDesktop.addEventListener('click', () => {
            if (currentIndexDesktop + itemsPerPageDesktop < totalSlidesDesktop) {
                currentIndexDesktop += itemsPerPageDesktop;
            }
            updateSliderDesktop();
        });
  
        prevBtnDesktop.addEventListener('click', () => {
            if (currentIndexDesktop - itemsPerPageDesktop >= 0) {
                currentIndexDesktop -= itemsPerPageDesktop;
            }
            updateSliderDesktop();
        });
  
        updateSliderDesktop();
      }
  
      initDesktopSlider();
    }
  });
  