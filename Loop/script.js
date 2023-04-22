// setTimeout(()=>{
//     console.log('exeutig')
    
//   },1000)
// console.log('executing')

// console.log('executing')
let i=0;
 const id =setInterval(()=>{
    console.log('interval')
    if(++i==10){
        clearInterval(id)    
    }
    
 },1000)
