// function divide(a,b){
//     if(b === 0){
//         throw new Error('can not divide by 0    ')
//     }
//     return a/b
// }

// try{
//     divide(4,0);
// }catch(error){
//     console.error(error.message)
// }

let obj={x:20,y:50};
for(const value in obj){
    console.log(obj[value])
}
