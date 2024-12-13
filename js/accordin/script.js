// var ques = document.getElementById('ques')
  
// ques.addEventListener('click', (event)=>{
  
    // console.log(event.target.parentNode) For getting information about parent div
    // console.log(event.target.parentElement) Same
  
  
// })

const  faqques = document.querySelectorAll('.ques')

faqques.forEach((element,index) => {
    element.addEventListener('click',(event)=>{
        event.target.nextElementSibling.classList.toggle('display')
            
        if(event.target.children)
        console.log(event.target.children[0].innerText)

    })
});




// console.log(faqques)
// document.querySelector('.ques').addEventListener('click', ()=>{
    // console.log('Hello')
// })