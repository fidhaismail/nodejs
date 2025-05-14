const names=require('./4-names');
const sayHi=require('./4-function');
console.log(names)
sayHi('Susan')
sayHi(names.john);
sayHi(names.peter);
const alter=require('./alternate_module')
console.log(alter)
require('./7-mind-grenade')//executing