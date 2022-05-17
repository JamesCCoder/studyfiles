let num = document.getElementById("number").textContent;
let content = document.getElementById("content").textContent;

const increment = () => {
    num++;
    document.getElementById("number").innerText = num;
}

const reset = () => {
    num = 0;
    document.getElementById("number").innerText = num;
}

const decrement = () => {
    num--;
    document.getElementById("number").innerText = num;
}

const save = () => {
   content += num + "-";
   document.getElementById("content").innerText = content;
}