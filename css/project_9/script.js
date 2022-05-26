const toggle = () => {
  document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".backdrop").style.display = "block";
};

const close = () => {
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
};

document.querySelector(".backdrop").addEventListener("click", close);
