// console.log("Rise and Shine");
// console.log("lets get it started")

// const findDuplicates=(arr)=>{
//     const sortedArray=arr.slice().sort();
//     const duplicates=[];
//     for(i=0;i<sortedArray.length-1;i++){
//         if(sortedArray[i+1] == sortedArray[i]){
//             duplicates.push(sortedArray[i])
//         }
//     }
//     return duplicates
// }
const arrInt=[5,5,7,8,9,4,6,7,2,1,9];
const array=[1,1,3,3,4,5,6,9,9,10,10]
console.log('integers ',findDuplicates(arrInt))
console.log('unique numbers are :',findDuplicates(array));

// function findDuplicates(arr){
//     const duplicates=[];
//     const set=new Set();
//     for(let item of arr){
//         if(set.has(item)){
//             duplicates.push(item);
//         }else{
//             set.add(item)
//         }
//     }
//     return duplicates

// }
// console.log('Duplicates are :',findDuplicates(arrInt))

const  colors=['red','green','blue','yellow'];
const  filteredColors=colors.filter((color)=>color!='green');
console.log(filteredColors)