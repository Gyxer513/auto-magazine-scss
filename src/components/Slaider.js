export class Slider {
  constructor(slides, currentSlide, sideVisibleClass, buttonLeft, buttonRight) {
    this._slides = slides;
    this._currentSlide = currentSlide;
    this._sideVisibleClass = sideVisibleClass;
    this._buttonLeft = buttonLeft;
    this._buttonRight = buttonRight;
  }
  _nextSlide() {
    this._slides[this._currentSlide].classList.remove(
      `${this._sideVisibleClass}`
    );
    this._currentSlide =
      (this._currentSlide + this._slides.length + 1) % this._slides.length;
    this._slides[this._currentSlide].classList.add(`${this._sideVisibleClass}`);
  }
  _previousSlide() {
    this._slides[this._currentSlide].classList.remove(
      `${this._sideVisibleClass}`
    );
    this._currentSlide =
      (this._currentSlide + this._slides.length - 1) % this._slides.length;
    this._slides[this._currentSlide].classList.add(`${this._sideVisibleClass}`);
  }
  seteventListeners() {
    this._buttonRight.addEventListener("click", () => this._nextSlide());
    this._buttonLeft.addEventListener("click", () => this._previousSlide());
  }
}
