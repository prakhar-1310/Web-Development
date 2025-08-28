
// selecting the input
let titleEl=document.querySelector('#title')

// selecting the unorderd list
let listEl=document.querySelector('#list')

// selecting the button
let addbtnEl=document.querySelector('#add-btn');

addbtnEl.addEventListener('click',()=>{
    // creating a list type element
    let li=document.createElement('li');
    // taking input from input using .value
    let task=titleEl.value.trim();
    // fixing the input value in the list item
    li.innerText=task;
    // appending new list into the ul
    listEl.appendChild(li);
    // clearing input for other input
    titleEl.value="";

    // remove the li after clicking on the li
    let item=document.querySelector('li');

    item.addEventListener('click', ()=>{
        item.remove();
    })
})






