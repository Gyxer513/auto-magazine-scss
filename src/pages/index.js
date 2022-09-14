import "./index.css";
import {
  slides,
  buttonLeft,
  buttonRight,
  currentSlide,
  slideClassVisible,
  factsLink,
  about,
  gallaryLink,
  gallary,
  pressLink,
  press,
  burgerButton,
  burgerCloseButton,
  burgerButtonVisibleClass,
  burgerCloseButtonVisibleClass,
  navigationMenu,
  navigationVisibleClass,
  headerLogo,
  logoVisibleClass,
  inputMail,
  inputName,
  inputSurname,
  formButton,
} from "../components/utils";
import {
  radioOne,
  radiotwo,
  readLink,
  readLinkBold,
  buttoonRead,
} from "../components/Radio";
import { Slider } from "../components/slaider";
import { ScrollIntoView } from "../components/ScrollIntoView";
import { BurgerMenu } from "../components/BurgerMenu";

/* ******************** SLAIDER ********************  */

const slaider = new Slider(
  slides,
  currentSlide,
  slideClassVisible,
  buttonLeft,
  buttonRight
);
slaider.seteventListeners();

/* ******************** scrollIntoView ********************  */

const factsScroll = new ScrollIntoView(factsLink, about);
factsScroll.setEventListener();

const gallaryScroll = new ScrollIntoView(gallaryLink, gallary);
gallaryScroll.setEventListener();

const pressScroll = new ScrollIntoView(pressLink, press);
pressScroll.setEventListener();

/* ******************** burgerMenu ********************  */

const burgerMenu = new BurgerMenu(
  navigationMenu,
  burgerButton,
  burgerCloseButton,
  headerLogo,
  burgerCloseButtonVisibleClass,
  burgerButtonVisibleClass,
  logoVisibleClass,
  navigationVisibleClass
);
burgerMenu.addEventListeners();

/* ******************** RadioLink ********************  */

radiotwo.addEventListener("click", () => {
  radioOne.classList.remove("press__ratio-box-active");
  radiotwo.classList.add("press__ratio-box-active");
  readLink.classList.add("press__link_animation");
  setTimeout(() => {
    readLink.classList.remove("press__link_animation");
  }, 1000);
  readLinkBold.textContent = "Drive.ru:";
  readLink.textContent =
    "Drive.ru: Вэн Volkswagen e-Bulli скрестил классику с современной техникой.";
  readLink.href =
    "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html";
});

radioOne.addEventListener("click", () => {
  radioOne.classList.add("press__ratio-box-active");
  radiotwo.classList.remove("press__ratio-box-active");
  readLink.classList.add("press__link_animation");
  setTimeout(() => {
    readLink.classList.remove("press__link_animation");
  }, 1000);
  readLinkBold.textContent = "Engadget:";
  readLink.textContent = `Engadget: VW’s e-BULLI concept shows how your classic van can become an EV.`;
  readLink.href =
    "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html";
});

buttoonRead.addEventListener("click", () => {
  window.open(readLink.href, "_blank");
});

function clickRadioOTwo() {
  radiotwo.click();
}
setInterval(clickRadioOTwo, 10000);

function clickRadioOne() {
  radioOne.click();
}

setInterval(clickRadioOne, 20000);

function checkValidity() {
  if (
    !inputMail.validity.valid ||
    !inputSurname.validity.valid ||
    !inputName.validity.valid
  ) {
    formButton.textContent = "Подписка";
  } else {
    formButton.textContent = "Готово!";
  }
}
inputMail.addEventListener("input", (e) => {
  checkValidity();
});
inputSurname.addEventListener("input", (e) => {
  checkValidity();
});
inputName.addEventListener("input", (e) => {
  checkValidity();
});
