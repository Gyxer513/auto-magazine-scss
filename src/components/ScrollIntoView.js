export class ScrollIntoView {
  constructor(scrollLink, viewElement) {
    this._scrollLink = scrollLink;
    this._viewElement = viewElement;
  }
  _handleButtonClick() {
    this._viewElement.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  setEventListener() {
    this._scrollLink.addEventListener("click", () => this._handleButtonClick());
  }
}
