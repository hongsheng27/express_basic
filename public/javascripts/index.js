const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

const updateButtonColor = () => {
  let currentRoute = window.location.pathname.substring(1);
  const targetDom = (routeName) => {
    switch (routeName) {
      case "about":
        return about;
      case "portfolio":
        return portfolio;
      case "contact":
        return contact;
      default:
        return null;
    }
  };
  targetDom(currentRoute).classList.add("active");
};
window.addEventListener("load", () => {
  updateButtonColor();
});

about.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/about";
});
portfolio.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/portfolio";
});
contact.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/contact";
});
home.addEventListener("click", () => {
  window.location.href = "http://localhost:3000";
});
