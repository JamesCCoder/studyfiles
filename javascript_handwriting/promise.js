// 每隔 xxx 秒 打印 xxx

const red = () =>{
    console.log("red");
}

const blue = () =>{
    console.log("blue");
}

const green = () =>{
    console.log("green");
}

const time = (timer, name) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            name();
            resolve();
        }, timer);

    })
}

const process = () =>{
    Promise.resolve().then(() => {
        return time(1000, red);
    }).then(() =>{
        return time(1000, blue);
    }).then(() =>{
        return time(1000, green);
    }).then(() =>{
        return process();
    })
}

process();

