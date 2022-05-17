// 区分 value，innerText，textContent

const add = () => {
    let a = document.getElementById("num_1").value;
    let b = document.getElementById("num_2").value;
    let res = Number(a) + Number(b);
    document.getElementById("res").value = res;
}

const minus = () => {
    let a = document.getElementById("num_1").value;
    let b = document.getElementById("num_2").value;
    let res = Number(a) - Number(b);
    document.getElementById("res").value = res;
}

const multiply = () => {
    let a = document.getElementById("num_1").value;
    let b = document.getElementById("num_2").value;
    let res = Number(a) * Number(b);
    document.getElementById("res").value = res;
}

const divide = () => {
    let a = document.getElementById("num_1").value;
    let b = document.getElementById("num_2").value;
    let res = Number(a) / Number(b);
    document.getElementById("res").value = res;
}