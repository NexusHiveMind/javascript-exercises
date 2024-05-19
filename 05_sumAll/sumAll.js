const sumAll = function(initial_number,final_number) {
    let minor_number;
    let larger_number;
    if (initial_number <0 | final_number <0 | typeof(initial_number+final_number)!= "number"){
        return "ERROR";
    };
    if (initial_number<=final_number){
        minor_number = initial_number;
        larger_number = final_number;
    }else{
        minor_number = final_number;
        larger_number = initial_number;
    };
    let sum=0;
    for (let i = minor_number;i<=larger_number;i++){
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
