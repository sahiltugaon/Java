let marks=[96,95,90,65,49];
let sum=0;

for(let val in marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg of marks=${avg}` );