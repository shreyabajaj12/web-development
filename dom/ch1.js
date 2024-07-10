// window
// document
// html
// head       body
// console.dir(window)    since window is a global and every one knows it
console.dir(document)
// console.dir(document.body.childNodes[1])

let header=document.getElementById("header")
console.log(header);
let classs=document.getElementsByClassName("clas")
console.log(classs)
let para=document.getElementsByTagName("p")
console.log(para);
let elements=document.querySelector("p")   //1st element
console.dir(elements)
elements.get
let elem=document.querySelectorAll("p")    //all elements
console.dir(elem)
let elem2=document.querySelectorAll(".clas")
console.dir(elem2)
const para1=document.createElement('p');
para.textContent="hello dude";
const div1=document.createElement('div');
document.body.appendChild(div1)
// document.body.appendChild(para)
div1.appendChild(para1)
div1.removeChild(para1)

