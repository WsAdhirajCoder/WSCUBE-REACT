// var output = prompt('Enter your age ?');

// if(output >= 18){
//     document.write('You can vote')
// }

// if(output >= 18){
//     document.write('You can vote')
// }else{
//     document.write('You can*t vote')
// }

var g1 =  prompt('Enter your marks of english out of 100');
var g2 =  prompt('Enter your marks of Maths out of 100');
var g3 =  prompt('Enter your marks of Hindi out of 100');

var total =  300;
g1 = parseInt(g1);
g2 = parseInt(g2);
g3 = parseInt(g3);
var percentage = ((g1 + g2 + g3)/total)*100;
// document.write(percentage)

if(g1 > 100 || g2>100 || g3>100){
document.write('Input marks in valid');
}else if(percentage >= 60){
 document.write('First Division');
}else if(percentage>=48 && percentage < 60){
 document.write('Second Division')
}else if(percentage >= 48 && percentage<48){
    document.write('Third Division')
}else if(percentage < 36){
    document.write('Fail')
}
else{
    document.write('Invalid Value')
}