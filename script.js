console.log("Script running...");
// Task 1: All off button
// Set up the the DOM manipulation flow such that when you press the all off button, the background color of all the lightbulb p tags changes to black
let button = document.querySelector("#clear")

let p = document.querySelectorAll(".lightbulb")

button.addEventListener("click", function(event){
  for(let i=0;i<p.length;i++){
    p[i].style.backgroundColor = "black"
  }
})




// Task 2: CSH Mode
// Set up the DOM manipulation flow such that when your mouse is over the CSH mode button, the body's background color changes to green and the lightbulb p tags text change to "💻"
// When your mouse leaves the CSH mode button, the body's background should go back to black and the lightbulb p tags text should go back to "💡"

let button2 = document.querySelector("#csh")
let body = document.querySelector("#change")
let pTags = document.querySelectorAll(".lightbulb")

for(let v=0;v<pTags.length;v++){
  button2.addEventListener("mouseover", function(event){
    body.style.backgroundColor = "green"
      pTags[v].textContent = "💻"
  })
}


for(let p=0;p<pTags.length;p++){
  button2.addEventListener("mouseout", function(event){
    body.style.backgroundColor = "black"
      pTags[p].textContent = "💡"
  })
}




// Task 3: On and off feature
// Set up the DOM manipulation flow such that when you click any of the lightbulb p tags, the p tag's background color toggles from black to white
// You should use the classList property with the appropriate class from style.css


for(let r=0;r<p.length;r++){
  p[r].addEventListener("click", function(event){
    p[r].style.backgroundColor = "white"
  })
}



