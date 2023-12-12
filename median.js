(function() {
    var a = [1, 2, 3, 4, 5];
    var b = [6, 7, 8, 9, 0, 10];
    var c = [...a, ...b];

    var middleIndex1 = (c.length / 2) - 1;
    var middleIndex2 = c.length / 2;
    var middleValue = (c[middleIndex1] + c[middleIndex2]) / 2;

    console.log("The median is:", middleValue);
})();


//removing the duplicates

var languages = ["java script", "node.js", "c++", "c", "html", "c", "react","node.js"];
languages=[...new Set(languages)]
console.log(languages)

// removing the duplicates

var languages = ["java script", "node.js", "c++", "c", "html", "c", "react", "node.js"];

languages=function (languages){
    return languages=[...new Set(languages)]
}(languages)
console.log(languages)

//rotating k times

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

(function(arr, k) {
    for (let i = 0; i < k; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
})(arr, k);

console.log("Rotated array:", arr);

//using anonymous function


