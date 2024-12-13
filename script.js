var form = document.getElementById('form');
  
form.addEventListener('submit',(event)=>{
    event.preventDefault();
  
  
    console.log(event.target.email.value)
    if(event.target.email.value != ''){
    var data = document.getElementById('user').innerHTML;
    var output = '<li>'+ event.target.email.value +'</li>'
    var data = document.getElementById('user').innerHTML =output + data ;
    }
    event.target.email.value = ''; // For single input box


    event.target.reset() //For all input box
})