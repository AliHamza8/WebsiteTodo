// DOM Elements selection
let ul = document.querySelector('.list-group')
let li = document.querySelector('.list-group-item')
let btnAdd = document.querySelector('.btn-add')
let btnUpdate = document.querySelector('.btn-update')
let btnDelete = document.querySelector('.btn-delete')
let textBox = document.querySelector('.textbox')

//Adding new list item and edit delete buttons
btnAdd.addEventListener('click', function () {
    //creating list item
    let newLiEl = document.createElement('li')
    let addLiText = document.createTextNode(textBox.value)
    newLiEl.appendChild(addLiText)
    ul.appendChild(newLiEl)

    //adding classes to list item
    newLiEl.classList.add('list-group-item')
    newLiEl.classList.add('my-1', 'mx-3','w-50')


    //creating buttons section
    let newDivEl = document.createElement('div')
    
    newDivEl.classList.add('d-flex')

    //creating Update button
    let newUpdateBtn = document.createElement('button')
    let updateBtnText = document.createTextNode('Update')
    newUpdateBtn.appendChild(updateBtnText)
    newDivEl.appendChild(newUpdateBtn)
    // adding classes to update button
    newUpdateBtn.classList.add('btn', 'btn-warning', 'btn-sm', 'mt-2')

    //creating Delete button
    let newDeleteBtn = document.createElement('button')
    let DeleteBtnText = document.createTextNode('Delete')
    newDeleteBtn.appendChild(DeleteBtnText)
    newDivEl.appendChild(newDeleteBtn)
    // adding classes to update button
    newDeleteBtn.classList.add('btn', 'danger', 'btn-sm', 'mt-2', 'ms-2')    

    let addDivText = document.createTextNode(newUpdateBtn + DeleteBtnText)
    newDivEl.appendChild(addDivText)
    ul.appendChild(newDivEl)
})