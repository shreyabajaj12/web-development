console.log("ths is tutorial 54");
function greet(name , greetText){
    console.log(greetText+" "+name)
    console.log(name+"is a good boy")}
function sum(a,b,c){
    d=a+b+c;
    return d;
}
function compare(a,b){
    if(a>b){
        console.log(a+" is greater ")}
    else{
        console.log(b+" is greater")
    }
    }

    let name4="Harry";
    let name1="Shubham";
    let name2="Rohan";
    let name3="Raj";
    let greetText="Good Morning"
    greet(name4,greetText);
    greet(name1,greetText);
    greet(name2,greetText);
    greet(name3,greetText);
    
    let returnval=sum(2,1,1)
    document.write(returnval);
    
    compare(44,55)
    // ----------------------------------------------------------------------
const sum1=(p,q)=>{
    return p+q
    }
console.log(sum1(2,3))