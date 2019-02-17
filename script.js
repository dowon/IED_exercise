//test

var myNumber = prompt('Write a Number:');
myNumber = parseInt(myNumber);

var squareRoot = Math.sqrt(myNumber);

alert(squareRoot);

if(myNumber < 0){
    alert('What you give the number is negative Absing it..');
    myNumber = Math.abs(myNumber);
}else{
    alert('Give number possitive');
}

var squareRoot