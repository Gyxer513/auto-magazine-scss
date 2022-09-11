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
  press
} from "../components/utils";
import { Slider } from "../components/slaider";
import { ScrollIntoView } from "../components/ScrollIntoView";

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