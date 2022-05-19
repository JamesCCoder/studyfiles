// how to switch players

let sum = 0;
const roll = () => {
    const random = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".current").textContent = random;
    sum += random;
    if(random === 1){
        sum = 0;
    }
    document.querySelector(".overall").textContent = sum;
}



document.querySelector(".btn").addEventListener("click", roll);