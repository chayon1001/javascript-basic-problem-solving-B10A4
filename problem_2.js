function sendNotification(email) {
    if(email.indexOf('@') === -1 ){
        return "Invalid Email" ;
    }
    
    let divide = email.split('@');
    let firstPart = divide[0];
    let secondPart = divide[1];

    let final = firstPart + ' sent you an email from ' + secondPart;
    return final;
       
    
}
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
