//method for validate if two numbers are between 1 and 10:
const validation = function (a, b){
    if(a < 1 || b > 10 && a < 20 || b > 30){
        return false;
    }
    console.log("validation OK")
    return true;
}

const password_check = function (password){
if(password.length < 6 || password.length > 10 ){
        return false;
    }
    console.log("password OK")
    return true;
}


exports.validation = validation;
exports.password_check = password_check;

