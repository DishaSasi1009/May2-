let a=[1,2,3,4];
let b=[3,4,5,6];
let ele1=[];
for(let i=0;i<a;i++){
    for(let j=0;j<b;j++){
        if(a[i]===b[j]){
            ele1+=a[i];
        }
    }
}
console.log(ele1)

