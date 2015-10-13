
//JavaScript File
var text ="";
/*var i = 0;
/* loop 
for ( i = 3; i < 5; i++) {
    text += "The number is = " + i + "\n";
}    
 //   console.log(text);
 ----------------------------------   
    var text ="";
var i = 0;
    
for ( i = 2; i < 15; i++) {
    text += "The number is = " + i + "\n";
}    
    console.log(text);
    
----------------------------------------------

var students = new Array("Gaby", "Yoh", "Tyler", "John", "Michaerl", "Giang");

var x;
for (x in students) {
    text += students[x] + "\n"; // text = text + student[x] + "\n";
    
}
console.log(text); 

-----------------------------------------------
var i=0;
while (i < 5) {
    text += "the number is = " + i + "\n";
    i++;
}

console.log(text);

--------------------------------------------
var i=99;
var value = "i is greater thant 15"
 do {
        text += "the number is = " + i + "";
        i++;
    }
    
while (i < 15)

//if (i>15) console.log(value); 

console.log(text + ",  and " + value);
---------------------------------- */
var number = 1;
var sum = 0;
while(true) 
{
    sum += number;
    if (number == 5){
        break;// break out of the loop if number == 5 and execute console.log
        
    }
    number++;
    
}
console.log("sum = " + sum);