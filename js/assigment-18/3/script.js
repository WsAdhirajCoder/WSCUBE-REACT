var age = parseInt(prompt('Enter your marks'))

if(age>0 && age<2){
    document.write("infaint")
}else if(age>3 && age<5){
    document.write("toddler")
}else if(age>6 && age<12){
    document.write("child")
}else if(age>13 && age<17){
    document.write("teenager")
}else if(age>18){
    document.write("adult")
}