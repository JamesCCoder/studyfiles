class rainbow{
    constructor({newcolor = 'green'} = []){
	this.Newcolor = newcolor;
}
    static colorchange(newcolor){
	this.Newcolor = newcolor;
    return this.Newcolor
}
}

const freddie = new rainbow ({newcolor: 'purple'})
console.log(freddie.colorchange('orange'));
