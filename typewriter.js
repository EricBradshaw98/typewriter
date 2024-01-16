const sentence = "hello there from lighthouse labs";
//variable for delay value
let lag = 0;

//add variable instead of static number to loop
for (const char of sentence) {
setTimeout(() => {
 process.stdout.write(char);
}, lag)

//loop adds =50 ms each time
lag += 50;
  

}
