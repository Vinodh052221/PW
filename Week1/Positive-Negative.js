
for (let i = 5; i <= 20; i++) {
    Numbercheck(i);
}
function Numbercheck(num){
    if (num === 0) {
        console.log(num + " The number is zero.");
        
    } else if (num > 0) {
        console.log(num + " The number is positive.");
    } else {
        console.log(num + "The number is negative.");
    }
}