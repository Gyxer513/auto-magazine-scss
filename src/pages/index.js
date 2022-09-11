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
} from "../components/utils";
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
