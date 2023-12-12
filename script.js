// print the odd numbers using anonymous function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];

var number = function() {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      console.log(numbers[i], "is odd");
    }
  }
};

number();

// print the odd numbers using IIFE

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(number) {
 for (i=0;i<numbers.length;i++){
    if (numbers[i]%2 != 0){
      console.log(numbers[i] , " is an odd number");
    }
    
  }
})(numbers);

//print the odd numbers arrow function

var numbers = [1,2,3,4,5,6,7,8,9,10]
var number=(numbers) => {
    for (i=0;i<numbers.length;i++) {
       if (numbers[i]%2 != 0)
        console.log(numbers[i],"is an odd number")
    }
} 
number(numbers)


//print the following string in uppercase ( anonymous function)

var horses=["orient glory","star lady","amazon","poker","brave beauty"]
var horse=function(){
    for (i=0;i<horses.length;i++) {
        console.log(horses[i].toUpperCase());
    }
}
horse(horses);

//print the following string in uppercase ( IIFE )

var horses = ["orient glory", "star lady", "amazon", "poker", "brave beauty"];

(function(horses) {
    for (var i = 0; i < horses.length; i++) {
        console.log(horses[i].toUpperCase());
    }
})(horses);


//print the following string in uppercase (arrow)

var horses = ["orient glory", "star lady", "amazon", "poker", "brave beauty"];

var horse=(horses)=>{
    for(var i=0;i<horses.length;i++)
    console.log(horses[i].toUpperCase());
}
horse(horses)


//sum of all numbers in an array (anonymous function)

var numbers = [ 1,2,3,4,5,6]
var integers = 0.396;

var number=function(){
    for (i=0;i<numbers.length;i++) {
    numbers[i] += integers;
   
     }
 console.log(numbers)
};

number(numbers);

//sum of all numbers in an array (IIFE)


var marks = {
    naveen: 98,
    gokul: 86,
    karthick: 78,
    rohinth: 87
};

var cutoff = 4.56;

(function() {
    var keys = [];
    for (var numbers in marks) {
        keys.push(numbers);
    }

    for (var i = 0; i < keys.length; i++) {
        var numbers = keys[i];
        marks[numbers] -= cutoff;
    }

    console.log(marks);
})();

//sum of all numbers in an array (arrow method)

const primeNo = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;  
        }
    }
    return number > 1;  
};

const number = 89;

if (primeNo(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
