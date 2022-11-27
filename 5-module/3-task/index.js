function initCarousel() {
  let carousel = document.body.querySelector('.carousel');
  let carouselInner = document.body.querySelector('.carousel__inner');
  let carouselInnerWidth = carouselInner.offsetWidth;
  let arrowRight = document.body.querySelector('.carousel__arrow_right');
  let arrowLeft = document.body.querySelector('.carousel__arrow_left');
  let maxSlidesWidth = carouselInner.children.length * carouselInnerWidth;

  if (carouselInnerWidth === carouselInner.offsetWidth) {
    arrowLeft.style.display = 'none';
  }

  carousel.addEventListener('click', event => {
    let buttonRightEvent = event.target.closest('.carousel__arrow_right');
    let buttonLeftEvent = event.target.closest('.carousel__arrow_left');

    if (buttonRightEvent) {
      carouselInner.style.transform = `translateX(-${carouselInnerWidth}px)`;
      carouselInnerWidth += carouselInner.offsetWidth;

      arrowLeft.style.display = '';
      if (carouselInnerWidth === maxSlidesWidth) {
        arrowRight.style.display = 'none';
      }
    }

    if (buttonLeftEvent) {
      carouselInnerWidth -= carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${carouselInnerWidth - carouselInner.offsetWidth}px)`;

      arrowRight.style.display = '';
      if (carouselInnerWidth === carouselInner.offsetWidth) {
        arrowLeft.style.display = 'none';
      }
    }
  });
}
