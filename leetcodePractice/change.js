const coins = [2,3,7];



const coin = (target) =>{
    let dp = Array(target + 1).fill(Infinity);
    dp[0] = 0;
    for(let coin of coins){
        for(let i = coin; i<=target; i++){
            dp[i] = Math.min(dp[i], dp[i-coin] + 1);
        }
    }
    return dp[target];
}

console.log(coin(23));