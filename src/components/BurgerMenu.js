export class BurgerMenu {
  constructor(
    navBlock,
    burerButton,
    closeButton,
    logo,
    closeButtonVisibleClass,
    burgerButtonVisibleClass,
    logoVisibleClass,
    menuVisibleClass
  ) {
    this._navBlock = navBlock;
    this._burerButton = burerButton;
    this._closeButton = closeButton;
    this._logo = logo;
    this._closeButtonVisibleClass = closeButtonVisibleClass;
    this._burgerButtonVisibleClass = burgerButtonVisibleClass;
    this._logoVisibleClass = logoVisibleClass;
    this._menuVisibleClass = menuVisibleClass;
  }
  _showMenu() {
    this._navBlock.classList.add(`${this._menuVisibleClass}`);
    this._closeButton.classList.add(`${this._closeButtonVisibleClass}`);
    this._logo.classList.remove(`${this._logoVisibleClass}`);
    this._burerButton.classList.remove(`${this._burgerButtonVisibleClass}`);
  }
  _hideMenu() {
    this._navBlock.classList.remove(`${this._menuVisibleClass}`);
    this._closeButton.classList.remove(`${this._closeButtonVisibleClass}`);
    this._logo.classList.add(`${this._logoVisibleClass}`);
    this._burerButton.classList.add(`${this._burgerButtonVisibleClass}`);
  }
  addEventListeners() {
    this._burerButton.addEventListener("click", () => this._showMenu());
    this._closeButton.addEventListener("click", () => this._hideMenu());
  }
}
