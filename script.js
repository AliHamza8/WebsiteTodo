//DOM Elements selection
let ul = document.querySelector('.list-group')
let li = document.querySelector('.list-group-item')
let btnAdd = document.querySelector('.btn-add')
let btnUpdate = document.querySelector('.btn-update')
let btnDelete = document.querySelector('.btn-delete')
let textBox = document.querySelector('.textbox')

//Adding new list item and edit delete buttons
btnAdd.addEventListener('click', function () {
    if (textBox.value === '')
    alert('Enter something...')
    else {
        //creating list item
        let newLiEl = document.createElement('li')
        let addLiText = document.createTextNode(textBox.value)
        newLiEl.appendChild(addLiText)
        ul.appendChild(newLiEl)

        //adding classes to list item
        newLiEl.classList.add('list-group-item')
        newLiEl.classList.add('my-1', 'mx-3','w-50', 'h6')

        //creating buttons section
        let newDivEl = document.createElement('div')
        //adding class to div section
        newDivEl.classList.add('d-flex')

        //creating Update button
        let newUpdateBtn = document.createElement('button')
        let updateBtnText = document.createTextNode('Update')
        newUpdateBtn.appendChild(updateBtnText)
        newDivEl.appendChild(newUpdateBtn)
        //adding classes to update button
        newUpdateBtn.classList.add('btn', 'btn-warning', 'btn-sm', 'mt-2')

        //creating Delete button
        let newDeleteBtn = document.createElement('button')
        let deleteBtnText = document.createTextNode('Delete')
        newDeleteBtn.appendChild(deleteBtnText)
        newDivEl.appendChild(newDeleteBtn)
        //adding classes to delete button
        newDeleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-2', 'ms-2')    

        //appending update and delete buttons to new div
        newDivEl.appendChild(newUpdateBtn)
        newDivEl.appendChild(newDeleteBtn)
        ul.appendChild(newDivEl)
        textBox.value = ''   

        //Deleting a record
        newDeleteBtn.addEventListener('click', function () {
            ul.removeChild(newLiEl)
            ul.removeChild(newDivEl)
        })

        //Replacing a record
        newUpdateBtn.addEventListener('click', function () {
            textBox.value = newLiEl.textContent
            btnAdd.addEventListener('click', function () {
                let newLiEl1 = document.createElement('li')
                let addLiText1 = document.createTextNode(textBox.value)
                newLiEl1.appendChild(addLiText1)
                ul.replaceChild(newLiEl1, newLiEl)
            })
        })
    }
})