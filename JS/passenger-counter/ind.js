let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
// initialize the count to zero
let count = 0
// listen to clicks on the increment button
function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
}

