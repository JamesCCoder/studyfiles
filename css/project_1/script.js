const choose = () => {
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".modal").style.display = "block";
};

const refuse = () => {
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".modal").style.display = "none";
};
