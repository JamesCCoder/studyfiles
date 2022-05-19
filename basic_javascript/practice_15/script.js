//create DOM, content, style

const a = document.createElement("h1");
a.setAttribute("class", "h1_2");
a.appendChild(document.createTextNode("test"));
a.style.color="red";
a.style.backgroundColor="green";

document.querySelector("body").appendChild(a);

document.querySelector(".h1_2").innerHTML = "123";

const change = () => {
    document.querySelector(".h1_2").innerHTML = "test";
}

