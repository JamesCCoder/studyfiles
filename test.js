const input = [
  {
    name: "Aspirin",
    startedOn: "10-2-2021",
    endedOn: "08-2-2022",
    times: ["8:00", "12:30", "15:30"]
  },
  {
    name: "Advil",
    startedOn: "12-2-2021",
    endedOn: "05-2-2022",
    times: ["7:00", "19:30"]
  }
];
/*  output={  
 '7:00': 'Advil',  
 '8:00' : 'Aspirin',  
 '12:30' : 'Aspirin',  
 '15:30' : 'Aspirin',  
 '19:30' : 'Advil', } */

const solution = (input) =>{
    let temp = {};
    for(let i = 0; i<input.length; i++){
        for(let j = 0; j<input[i].times.length; j++){
            temp[input[i].times[j]] = input[i].name;
        }
    }
    return Object.keys(temp).sort((a, b) => parseInt(a) - parseInt(b)).reduce((a, c) => (a[c] = temp[c], a),{});
}

console.log(solution(input));