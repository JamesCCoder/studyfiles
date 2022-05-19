//difference: querySelector, getElementbyid
//difference: id and class

// textContent vs value
// onclick vs click
// addEventListener

const createNumber = () => {
  let random = Math.ceil(Math.random() * 10);
  document.querySelector(".h1").textContent = random;
};

const check = () => {
  let curNumber = Number(document.querySelector(".number").value);
  let realNumber = Number(document.querySelector(".h1").textContent);
  if (curNumber > realNumber) {
    document.getElementById("message").textContent = "Your guess is larger";
  } else if (curNumber < realNumber) {
    document.getElementById("message").textContent = "Your guess is smaller";
  } else {
    document.getElementById("message").textContent = "Your guess is correct";
    document.querySelector("body").style.backgroundColor = "green";
  }
};

document.querySelector(".check").addEventListener("click", check);

const again = () => {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".h1").textContent = "";
  document.querySelector(".number").value = "";
};

document.querySelector(".again").addEventListener("click", again);
