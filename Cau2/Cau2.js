let count;
function checkNumber(number, array) {
    for (let i = 0; i < array.length; i++) {
        if(number == array[i]) {
            count = i;
            return true;
        }
    }
    return false;
}