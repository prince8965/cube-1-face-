//Hardword :( always --> always remember when you use code code multiple time then use a for loop
let a = document.getElementsByClassName("box")[0];
let b = document.getElementsByClassName("box")[1];
let c = document.getElementsByClassName("box")[2];
let d = document.getElementsByClassName("box")[3];
let e = document.getElementsByClassName("box")[4];
let f = document.getElementsByClassName("box")[5];
let g = document.getElementsByClassName("box")[6];
let h = document.getElementsByClassName("box")[7];
let i = document.getElementsByClassName("box")[8];
a.addEventListener("mousemove",function(){
    a.style.backgroundColor = "white";
})
a.addEventListener("mouseleave",function(){
    a.style.backgroundColor = "red";
})
b.addEventListener("mousemove",function(){
    b.style.backgroundColor = "skyblue";
})
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor = "white";
})
c.addEventListener("mousemove",function(){
    c.style.backgroundColor = "white";
})
c.addEventListener("mouseleave",function(){
    c.style.backgroundColor = "blue";
})
d.addEventListener("mousemove",function(){
    d.style.backgroundColor = "white";
})
d.addEventListener("mouseleave",function(){
    d.style.backgroundColor = "orange";
})
e.addEventListener("mousemove",function(){
    e.style.backgroundColor = "white";
})
e.addEventListener("mouseleave",function(){
    e.style.backgroundColor = "green";
})
f.addEventListener("mousemove",function(){
    f.style.backgroundColor = "white";
})
f.addEventListener("mouseleave",function(){
    f.style.backgroundColor = "yellow";
})
g.addEventListener("mousemove",function(){
    g.style.backgroundColor = "white";
})
g.addEventListener("mouseleave",function(){
    g.style.backgroundColor = "bisque";
})
h.addEventListener("mousemove",function(){
    h.style.backgroundColor = "white";
})
h.addEventListener("mouseleave",function(){
    h.style.backgroundColor = "violet";
})
i.addEventListener("mousemove",function(){
    i.style.backgroundColor = "white";
})
i.addEventListener("mouseleave",function(){
    i.style.backgroundColor = "brown";
})



//Smart work :)
// let boxes = document.getElementsByClassName("box");

// let colors = [
//     "red",
//     "white",
//     "blue",
//     "orange",
//     "green",
//     "yellow",
//     "bisque",
//     "violet",
//     "brown"
// ];

// for (let j = 0; j < boxes.length; j++) {

//     boxes[j].addEventListener("mousemove", function () {
//         boxes[j].style.backgroundColor = "white";
//     });

//     boxes[j].addEventListener("mouseleave", function () {
//         boxes[j].style.backgroundColor = colors[j];
//     });

// }