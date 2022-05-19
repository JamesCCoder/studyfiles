
// how to handle a keypress event

const show = () => {
    document.querySelector(".p").classList.remove("p");
}

document.querySelector(".button").addEventListener("click", show);

document.addEventListener("keydown", (e) =>{
    console.log(e.key);

    if(e.key === "Escape"){
        document.querySelector("p").classList.add("p");
    }
})

