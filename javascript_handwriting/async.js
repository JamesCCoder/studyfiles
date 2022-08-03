const red = () =>{
    console.log("red");
}

const blue = () =>{
    console.log("blue");
}

const green = () =>{
    console.log("green");
}

const timer = (time, name) =>{
   return new Promise(resolve =>{
       setTimeout(() => {
           name();
           resolve();
       }, time);
   })
}

const process = async () =>{
     await timer(1000, red);
     await timer(1000, green);
     await timer(1000, blue);
     process();
}

process();