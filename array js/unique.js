let a=[1,2,3,3,4,5,5]

a.sort()
    for(let i=0;i<a.length-1;i++){
        if(a[i]!== a[i+1]){
            console.log(a[i]);
        }
        i++;
    }
  