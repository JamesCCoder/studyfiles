// Number(false)                              0
// Number(true)                               1
// Number(null)                               0
// Number(undefined)                          NaN
// Number("")                                 0
// Number("123")                              123
// Number("sdf")                              NaN




// +        means     string
// - * /    means     number



// "3" + 1                                    "31"
// "3" - 1                                    2



// {} + {}                                    [object Object][object Object]
// {} - {}                                    NaN
// {} + []                                    [object Object] + "" = [object Object]
// [] + []                                    ""
// + {}                                       NaN
// + []                                       0                     有加号表明强行转化为数字       
// [] + 1                                     "" + 1 = "1"
// [] - 1                                     "" - 1 = -1
// [[]]                                       [[]]
// [[]] + 1                                   "1"
// {} + + []                                  [object Object] + 0 = "[object Object]0"
