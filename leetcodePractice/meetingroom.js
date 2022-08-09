arr1 = [[0,30],[5,10],[15,20]];
arr2 = [[7,10],[2,4]];


const meeting = (intervals) =>{
    

}



console.log(meeting(arr1));
console.log(meeting(arr2));





















// const meeting = (intervals) =>{
//     if(intervals.length <= 1) return true;
//     intervals.sort((a, b) => a[0] - b[0]);
//     for(let i = 0; i<intervals.length - 1; i++){
//         if(intervals[i][1] > intervals[i+1][0]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(meeting(arr1));
// console.log(meeting(arr2));