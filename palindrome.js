// return the palindromes using anonymous function 

var numbers = [121, 988, 876, 878, 6556, 5, 909];
var palindromes = [];

for (var i = 0; i < numbers.length; i++) {
    var specified = numbers[i];
    var str = specified.toString();

    var thePalindrome = (function() {
        for (var j = 0; j < str.length / 2; j++) {
            if (str[j] !== str[str.length - 1 - j]) {
                return false;
            }
        }
        return true;
    })();

    if (thePalindrome) {
        palindromes.push(specified);
    }
}

console.log("The palindromes numbers are", palindromes);


// return the palindromes using arrow function

var numbers = [121, 988, 876, 878, 6556, 5, 909];
var palindromes = [];

for (var i = 0; i < numbers.length; i++) {
    var specified = numbers[i];
    var str = specified.toString();

    var thePalindrome = (() => {
        for (var j = 0; j < str.length / 2; j++) {
            if (str[j] !== str[str.length - 1 - j]) {
                return false;
            }
        }
        return true;
    })();

    if (thePalindrome) {
        palindromes.push(specified);
    }
}

console.log("The palindromes numbers are", palindromes);
