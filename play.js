

let result = [{"text":"55 法务类","value":"55"},
              {"text":"63 成本类","value":"63"},
              {"text":"63 成本类","value":"61"},
              {"text":"64 财务类","value":"61"},
              {"text":"67 战投类","value":"61"}]



const num1 = 123;
const num2 = -123;

const arr = [7,6,4,3,1];

var minPathSum = (prices) => {
  let cur = 0;
    let res = 0;
    for(let i = 1; i<prices.length; i++){
        cur += prices[i] - prices[i-1];
        cur = Math.max(0, cur);
        res = Math.max(cur, res);
        console.log(cur);
        console.log(res);
    }
    return res;
}

console.log(minPathSum(arr));








