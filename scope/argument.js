function abc(a,b,c,d) {
  console.log(a,b,c,d)
  arguments[0] = 'bfe'
  arguments[3] = 'dev'
 
  console.log(a,b,c,d)
}

abc(1,2,3)