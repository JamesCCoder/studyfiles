const me = {
    name:"James",
    age:20,
    intro: function(c, d){
        console.log(`my name is ${this.name}, my age is ${this.age}, and ${c}, and ${d}`);
    }
}

const myWife = {
    name:"Weiwei",
    age: 18,
}

me.intro("1", "2");

me.intro.call(myWife, "1", "2");
me.intro.apply(myWife, ["1","2"]);
me.intro.bind(myWife,"1","2")();

me.intro.call({name:"abc", age:1}, "1", "2");
me.intro.apply({name:"abc", age:1}, ["1", "2"]);
me.intro.bind({name:"abc", age:1},"1","2")();