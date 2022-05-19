//manipulate class
//setup class
//add event

const hidden_1 = () => {
    document.getElementById("content_1").style.display= "none";
}

const show_1 = () => {
    document.getElementById("content_1").style.display= "flex";
}

document.getElementById("btn_1").addEventListener("click", hidden_1);
document.getElementById("btn_2").addEventListener("click", show_1);

const hidden_2 = () => {
    document.getElementById("content_2").classList.add("hidden");
}

const show_2 = () => {
    document.getElementById("content_2").classList.remove("hidden");
}

document.getElementById("btn_3").addEventListener("click", hidden_2);
document.getElementById("btn_4").addEventListener("click", show_2);