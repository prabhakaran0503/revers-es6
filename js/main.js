let n=prompt("enter the value");
let fun=(n)=>{
    let c=0
    while(n>0){
        a=n%10;
        n=parseInt(n/10);
        c=c*10+a
       
    }
    return c
}
let ans=fun(n)
console.log(ans);