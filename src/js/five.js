
import { assert } from './assert';

function FirstNinja() {
  let feints = 0;
  this.getFeints = function () {
    return feints;
  };
  this.feint = function () {
    feints++;
  };
}

const animateIt = function (elementId) {
  let elem = document.getElementById(elementId);
  let tick = 0;
  let timer = setInterval(function () {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + "px";
      tick++;
    } else {
      clearInterval(timer);

      assert(tick === 100, "Tick accessed via a closure");
      assert(elem, "Element also accessed via a closure");
      assert(timer, "Timer reference also obtained via a closure");
    }
  }, 10);
};

export { FirstNinja, animateIt };