//array operations

const friends = ["a", "bb", "ccc"];
const arr = [1, 2, 3];
const test = [1, 2, [3, 4]];

console.log(friends.length);

console.log(friends.concat(arr));

console.log(friends.fill("a", 1, 2));
console.log(friends.filter((friend) => friend.length === 1));
console.log(friends.find((friend) => friend.length === 1));
console.log(test.flat());

friends.forEach((friend) => console.log(friend));

console.log(friends.join());
console.log(friends.join("-"));

const keys = friends.keys();
for (let key of keys) {
  console.log(key);
}

const newFriends = friends.map((friend) => friend + "d");
console.log(newFriends);

console.log(friends.reverse());

console.log(friends.slice(-2));

console.log(friends.sort());

console.log(friends.toString());

friends.push("d");
console.log(friends);

friends.unshift("e");
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends[1]);
console.log(friends.indexOf("b"));

console.log(friends.includes("b"));
