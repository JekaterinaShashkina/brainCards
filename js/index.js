import { createHeader } from "../components/createHeader.js";

const initApp = () => {
  const headerParent = document.querySelector(".header");

  const headerObj = createHeader(headerParent);
  const returnIndex = (e) => {
    e.preventDefault();
    headerObj.updateHeaderTitle("Категории");
  };

  headerObj.headerLogoLink.addEventListener("click", returnIndex);
  headerObj.headerBtn.addEventListener("click", () => {
    headerObj.updateHeaderTitle("Новая категория");
  });

  const app = document.querySelector("#app");
};
initApp();
