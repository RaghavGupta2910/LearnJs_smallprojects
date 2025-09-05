let myLeads = []

const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLS = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLS){
    myLeads = leadsFromLS
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let itemsList = ""
    for(let a = 0; a <leads.length; a++){
        // itemsList += "<li><a target = '_blank' href = '" + myLeads[i] + "'>"+ myLeads[a]+"</a></li>"
        itemsList += `
                <li>
                    <a target = '_blank' href = '${leads[a]}'>
                        ${leads[a]}
                    </a>
                </li>
                `
    }
    ulEl.innerHTML = itemsList
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render()
})

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

