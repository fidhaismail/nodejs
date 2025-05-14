const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
console.log(first,second);
 writeFileSync(`./content/result.sync.txt`,`Here is the result:${first},result:${second}`, {flag:'a'})
 console.log("i am done with the course");
 console.log("starting the next one");