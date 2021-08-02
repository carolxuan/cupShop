"use strict";

// 漢堡
function openNav() {
  document.getElementById("mm-navbar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mm-navbar").style.width = "0";
} // 收合


$(document).ready(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}); // 輪播

(function () {
  var slider = document.querySelector(".slider");
  var productCards = document.querySelectorAll(".product-card");
  var startX = 0; // 開始拖曳事件

  function startDragHandler(e) {
    slider.classList.add("slider-active");
    startX = e.pageX;
  } // 拖曳事件


  function dragHandler(e) {
    if (slider.classList.contains("slider-active")) {
      e.preventDefault(); // 假設按下去 pageX 100，即 startX 100
      // 往左移動，pageX 會不斷減少，即 pageX - startX 為負

      slider.scrollLeft -= (e.pageX - startX) * 3;
      startX = e.pageX;
    }
  } // 停止拖曳事件


  function stopDragHandler(e) {
    slider.classList.remove("slider-active");
  } // 加入滑動的偵聽事件


  if (slider) {
    slider.addEventListener("mousedown", startDragHandler);
    slider.addEventListener("mousemove", dragHandler);
    slider.addEventListener("mouseup", stopDragHandler);
    slider.addEventListener("mouseleave", stopDragHandler);
  }
})(); // menu active


var menuBoxItem = document.querySelectorAll('.menuBox p');
menuBoxItem.forEach(function (el) {
  el.addEventListener('click', handelMenu);
});

function handelMenu(e) {
  var itemTarget = e.target;
  var valueTarget = itemTarget.dataset.item;
  menuBoxItem.forEach(function (item) {
    item.classList.remove('active');
  });
  itemTarget.classList.add('active');
}
//# sourceMappingURL=all.js.map
