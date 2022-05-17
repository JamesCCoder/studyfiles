
const shaffle = () => {
    let a = Math.round(Math.random() * 9 + 2);
    let b = Math.round(Math.random() * 9 + 2);
    let sum = a + b;
    document.getElementById("card_1").textContent = a;
    document.getElementById("card_2").textContent = b;
    document.getElementById("res").textContent="The sum is :" + sum;

   
    document.getElementById("choice").textContent="You are still alive, do you want an another card?"
   
}

const add = () => {
    let randomNumber = Math.round(Math.random() * 9 + 2);
    let button = document.createElement("button");
    let content = document.createTextNode(randomNumber);
    button.appendChild(content);
    let cards = document.getElementById("cards");
    cards.appendChild(button);

    let a1 = document.getElementById("card_1").textContent;
    let b1 = document.getElementById("card_2").textContent;
    let sum1 = Number(a1) + Number(b1);
    sum1  += randomNumber;

    document.getElementById("res").textContent="The sum is :" + sum1;
    if(sum1 < 21){
        document.getElementById("choice").textContent="You are still alive, do you want an another card?"
    }else if(sum1 == 21){
        document.getElementById("choice").textContent="You win!";
    }else if(sum1 > 21){
        document.getElementById("choice").textContent="You are out of the game!";
    }
}