
arr1 = [{"a":{"a": 1}}, {"b":{"b": 1}},{"c":{"c": 1}}]



console.log(Object.values(Object.values(arr1[0])[0])[0]);