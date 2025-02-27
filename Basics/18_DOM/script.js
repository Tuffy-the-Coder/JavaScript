console.log(window.document);
console.log(document);
console.log(document.body);
console.log(document.body.style.backgroundColor = "lightblue");
// Dom manipulation

// by ID
let a = document.getElementById("Heading4");
console.log(a);
console.dir(a);

// by class
let b = document.getElementsByClassName("Heading5");
console.log(b);
console.dir(b);

// by tagName

let c = document.getElementsByTagName("h5");
console.dir(c);
console.log(c);

// by querySelector

let d1 = document.querySelector("h5");
console.log(d1);
let d2 = document.querySelectorAll(".Heading5");
console.log(d2);
let d3 = document.querySelector("#Heading4");
console.log(d3);

// properties

// tagName
let e = document.querySelector("button");
console.log(e.tagName);

// innerText

let f = document.querySelector("#anime");
console.log(f.innerText);

// innerHTML

let g = document.querySelector("#anime");
g.innerHTML = "<b>" + g.innerHTML + "</b>";
console.log(g.innerHTML);