var marks = parseInt(prompt('Enter your marks'))

if(marks>90 && marks<100){
    document.write("A")
}else if(marks>80 && marks<89){
    document.write("B")
}else if(marks>70 && marks<79){
    document.write("C")
}else if(marks>60 && marks<69){
    document.write("D")
}else{
    document.write("F")
}