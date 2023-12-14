
const sumAll = function(x,y) {
    let sum = 0;
    if ((typeof x !== "number" || typeof y !== "number") 
    || (x < 0 || y < 0)) {
        return "ERROR";
    }
    else {
        if (x<y){
            for (let num = x; num <= y; num++) {
                sum += num;
            }
        }
        if (x>y){
            for (let num = y; num <= x; num++) {
                sum += num;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
