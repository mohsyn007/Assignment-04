
function calculateTax(income, expenses) {
    if (income < expenses || income < 0 || expenses < 0) {
        return 'Invalid Input';
    }
    else if (income === expenses)
        return 0;
    let tax = (income - expenses) * .20;
    return tax;

}

function sendNotication(email) {

    if (email.indexOf('@') === -1) {
        return 'Invalid Email'
    }
    let str = email.replace('@', ' sent you an email from ');
    return str;
}


function checkDigitsInName(name) {
    if (typeof name != "string")
        return 'Invalid Input'
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            return 'true';
        }

    }

    return 'false';
}


function calculateFinalScore(obj) {

    if (typeof obj.name !== "string" || typeof obj.testScore !== "number" || obj.testScore > 50 || typeof obj.schoolGrade !== "number" || obj.schoolGrade > 30 || typeof obj.isFFamily !== "boolean")
        return 'Invalid Input';


    let scoreCount = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily == true) {
        scoreCount += 20;
    }
    if (scoreCount >= 80)
        return 'true';
    else
        return false;
}

function waitingTime(waitingTimes, serialNumber) {

   if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
      return "Invalid Input";
   }
   let lengthArray = waitingTimes.length;
   let sumArray = 0;
   for (let i = 0; i < lengthArray; i++) {
      sumArray += waitingTimes[i];
   }
   let avg = Math.round(sumArray / lengthArray);
   return (serialNumber - 1 - lengthArray) * avg;
}
