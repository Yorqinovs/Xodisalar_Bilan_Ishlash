"use strict";

const btn = document.querySelector("#btn");
const overlay = document.querySelector(".overlay");

// btn.addEventListener("click", () => {
//   alert("click");
// });
// btn.addEventListener("click", () => {
//   alert("click2");
// });
////------------------------------------------------
// btn.addEventListener("mouseenter", () => {
//   alert("hover");
// });
// btn.addEventListener("mouseenter", () => {
//   alert("hover2");
// });
////------------------------------------------------
// btn.addEventListener("mouseenter", (event) => {
//   console.log(event.target);
//   event.target.remove();
// }); // hover bo'ganda elementimizi o'chirib yuboradi
////------------------------------------------------
// let i = 0;

// const deleteElement = (evnt) => {
//   evnt.target.remove();
// };
// btn.addEventListener("click", deleteElement);
////----------------
// const addElement = (evnt) => {
//   i++;
//   if (i === 3) {
//     btn.removeEventListener("click", addElement);
//   }
//   console.log(i);
// };
// btn.addEventListener("click", addElement);
////----------------
// btn.addEventListener("click", () => {});
// btn.removeEventListener("click", () => {});
////----------------
// const cb = (e) => {
//   console.log(e.currentTarget);
// };
// btn.addEventListener("click", cb);
// overlay.addEventListener("click", cb);

////------------------------------------------------
////------------------------------------------------
////------------------------------------------------
////------------------------------------------------
////------------------------------------------------

// const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("Link");
// }); // link bosilgan linkga kirib ketmasdan biza bergan xodisaga yani alergtni chiqazib bersin
////----------------
// const btns = document.querySelectorAll("button");
// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(1);
//   });
// });
////----------------
// const btns = document.querySelectorAll("button");
// const logger = () => {
//   console.log(1);
// };
// btns.forEach((item) => {
//   item.addEventListener("click", logger);
// });
////----------------
// const btns = document.querySelectorAll("button");
// const logger = () => {
//   console.log(1);
// };
// btns.forEach((item) => {
//   item.addEventListener("click", logger, { once: true });
// });
