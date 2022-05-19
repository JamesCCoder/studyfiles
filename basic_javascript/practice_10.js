// loop and iteration

const person = ["James", "Wu", 21, "male", 1898 - 01 - 13];

for (let i = 0; i < person.length; i++) {
  console.log(person[i], typeof person[i]);
}

const people = [
  { id: 1, name: "a", age: 21 },
  { id: 2, name: "b", age: 21 },
  { id: 3, name: "c", age: 21 },
];

const newPeople = people.map((person) => {
  const { id, name } = person;
  return { id, name };
});

console.log(newPeople);
