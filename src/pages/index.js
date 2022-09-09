import "./index.css";
import {
  slides,
  buttonLeft,
  buttonRight,
  currentSlide,
  firstImage,
  secondImage,
  thirdImage,
  slideClassVisible,
} from "../components/utils";
import { Slider } from "../components/slaider";

/* ******************** SLAIDER ********************  */

const slaider = new Slider(
  slides,
  currentSlide,
  slideClassVisible,
  buttonLeft,
  buttonRight
);
slaider.seteventListeners();
