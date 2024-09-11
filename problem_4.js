function calculateFinalScore(obj) {
    if(typeof obj !== 'object' ){
        return "Invalid Input";

    }
    
    let result = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
        result += 20;
    }
    if(result >= 80){
        return true;
    }
    else{
        return false;
    }
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : false }));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));



