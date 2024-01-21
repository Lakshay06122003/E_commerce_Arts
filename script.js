document.addEventListener('DOMContentLoaded', function() {
let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
   let input = inputs[i];
   input.style.border = "1px solid red";
   input.addEventListener("focus", function() {
      this.style.border = "5px solid green";
   });
   input.addEventListener("blur", function() {
      this.style.border = "3px solid red";
   });
}

let textarea1 = document.querySelectorAll("textarea");

for (let i = 0; i < textarea1.length; i++) {
    let textarea = textarea1[i];
    textarea.style.border = "1px solid red";
    textarea.addEventListener("focus", function() {
       this.style.border = "5px solid green";
    });
    textarea.addEventListener("blur", function() {
       this.style.border = "3px solid red";
    });
 }
 

let mouseOver = document.getElementById("blog-1");

mouseOver.addEventListener("mouseover",function(){
    this.style.background="yellow";
})




let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let nav = document.querySelector("nav");

let colorpalatte3 = document.getElementById("color-palatte3");

colorpalatte3.addEventListener("click",function(){
    body.style.backgroundColor = "black";
    h1.style.color = "lightblue";
    nav.style.backgroundColor = "orange";
});
let colorpalatte2 = document.getElementById("color-palatte2");

colorpalatte2.addEventListener("click",function(){
    body.style.backgroundColor = "darkgreen";
    h1.style.color = "#fffdde";
    nav.style.backgroundColor = "black";
});

let colorpalatte1 = document.getElementById("color-palatte1");

colorpalatte1.addEventListener("click",function(){
    body.style.backgroundColor = "#fffdde";
    h1.style.color = "white";
    nav.style.backgroundColor = "#fffdde";
});
})
