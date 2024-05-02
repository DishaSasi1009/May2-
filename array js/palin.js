let str="madam"
let res=true;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)!==str.charAt(str.length-i-1)){
      res=false;
      break;
    }
    
}
console.log(res)


