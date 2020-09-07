
function countVowels (string) {
    let vowelCharacters = ["U","E","O","A","I","u","e","o","a","i"];
    let countVowels = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowelCharacters.length; j++) {
            if(string[i] === vowelCharacters[j]){
                countVowels++;
            }
        }
    }
    document.write("Chuỗi vừa nhập là " + string + "<br>")
    document.write("Chuỗi vừa nhập có "+ countVowels + " ký tự nguyên âm");
}