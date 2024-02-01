// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")


// inputBtn.addEventListener("cli ck", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })



// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"   
// }
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }


let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // 2. Call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems  
}
