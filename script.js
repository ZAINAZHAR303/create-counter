let count = 0;
let counter = document.querySelector("#counter")
let[decrease , reset ,increase] = document.querySelectorAll("#decrease,#reset,#increase");

let colors = ["#caf0f8","#ade8f4","#90e0ef","#48cae4","00b4d8","#0096c7","#0077b6","#023e8a"]


function updateCounter() {
    counter.innerText = count;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    counter.style.color = randomColor;
}
reset.onclick = () =>{
    count= 0;
    counter.innerText  = count;
    updateCounter()
}
increase.onclick = () =>{
    count+= 1;
    counter.innerText  = count;
    updateCounter()
}
decrease.onclick = () =>{
    count+= 1;
    counter.innerText  = count;
    updateCounter();
}
