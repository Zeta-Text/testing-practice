const functions = {
    add: (num1, num2) => num1 + num2,
    capitalize: function (word) {
        return word[0].toUpperCase() + word.slice(1);
    },
    subtract: (num1, num2) => num1 - num2,
    divide: (num1, num2) => num1 / num2,
    multiply: (num1, num2) => num1 * num2,
    caesarCipher: function(word, shifter) {
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
        let wordArr = word.split("");
        let newWord = [];
    
        wordArr.forEach(letter => {
            let index = alphabet.indexOf(letter);
            console.log(index);
    
            let newIndex = shifter + index;
    
            let shiftIndex = alphabet[newIndex];
            console.log("shift index = ", shiftIndex)
            newWord.push(shiftIndex);
            
        });
    
        console.log(newWord.join(""));
        return newWord.join("");
    },
    analyzeArray: function(array) {
        let findSum = array.reduce(
            (acc, curr) => acc + curr
        );
        let length = array.length
        let average = findSum / length;
        let min = Math.min(...array);
        let max = Math.max(...array);

        let obj = {
            average: average,
            min: min,
            max: max,
            length: length
        }
        return obj  
    }
}


module.exports = functions;


