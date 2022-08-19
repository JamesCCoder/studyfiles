const Me = {
    name:"James",
    sex:"male",
    intro: function(age){
        console.log(`my name is ${this.name}, my sex is ${this.sex}, my age is ${age}`);
    }
}

const myWife = {
    name:"Weiwei",
    sex:"female",
}

Me.intro(12);

Me.intro.call(myWife,18);
Me.intro.apply(myWife, [18]);
Me.intro.bind(myWife, [18])();

Me.intro.call({name:"a", sex:"a"}, 12);
Me.intro.apply({name:"a", sex:"a"}, [12]);
Me.intro.bind({name:"a", sex:"a"}, [12])();

