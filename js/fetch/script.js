
// var moviedata = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
// .then((resp)=>{
    // console.log(resp.json())
    // })
    
    // .catch(()=>{
        //     console.log('in correct')
        // })
        // console.log(moviedata)
        
        
        
        new Promise((accept,reject)=>{
var moviedata = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
accept(moviedata)

})
.then((resp)=>{
    // console.log(resp.json())

    new Promise((accept, reject)=>{
        accept(resp.json())
    })
    .then((resp)=>{
        // console.log(resp.results)
    getmovie(resp.results)

    })
    .catch((error)=>{
        
    })
})

.catch((error)=>{
    console.log('in correct')
   })

   
    
   
   function getmovie(data){
    //    console.log(data)
        data.forEach((value,index) => {
         console.log(value.original_title)
         
     });
    }