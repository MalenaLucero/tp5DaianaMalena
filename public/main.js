const initialize = () =>{
    cleanTable()
    fetch('/api/employees')
        .then(res => res.json())
        .then(res => fillTable(res.employees))
}

const fillTable = (employees) =>{
    const table = document.getElementById('employeeTable')
    employees.forEach(e=>{
        const tr = document.createElement('tr')
        tr.appendChild(createTd(''))
        tr.appendChild(createTd(e.name))
        tr.appendChild(createTd(e.email))
        tr.appendChild(createTd(e.address))
        tr.appendChild(createTd(e.phone))
        const editAndDelete = document.createElement('td')
        editAndDelete.appendChild(createBtn(e.id, 'edit', `<i class="material-icons" title="Edit">&#xE254;</i>`))
        editAndDelete.appendChild(createBtn(e.id, 'delete', `<i class="material-icons" title="Delete">&#xE872;</i>`))
        tr.appendChild(editAndDelete)
        table.appendChild(tr)
    })
}

const cleanTable = () =>{
    const table = document.getElementById('employeeTable')
    table.innerHTML = ''
}

const oneObjectTable = (employee) =>{
    const table = document.getElementById('employeeTable')
    const tr = document.createElement('tr')
    tr.appendChild(createTd(''))
    tr.appendChild(createTd(employee.name))
    tr.appendChild(createTd(employee.email))
    tr.appendChild(createTd(employee.address))
    tr.appendChild(createTd(employee.phone))
    const editAndDelete = document.createElement('td')
    editAndDelete.appendChild(createBtn(employee.id, 'edit', `<i class="material-icons" title="Edit">&#xE254;</i>`))
    editAndDelete.appendChild(createBtn(employee.id, 'delete', `<i class="material-icons" title="Delete">&#xE872;</i>`))
    tr.appendChild(editAndDelete)
    table.appendChild(tr)
}

const createTd = (text) =>{
    const td = document.createElement('td')
    td.innerText = text
    return td
}

const createBtn = (id, addClass, icon) =>{
    const anchor = document.createElement('a')
    anchor.href = "#"
    anchor.classList.add(addClass)
    anchor.innerHTML = icon
    if(addClass === 'edit'){
        anchor.onclick = () => openEdit(id)
    }else if(addClass === 'delete'){
        anchor.onclick = () => deleteEmployee(id)
    }
    return anchor
}

const sendInfo = () =>{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let phone = document.getElementById('phone').value
    if(validateForm(name, email, address, phone)){
       let employee = {
        name: name,
        email: email,
        address: address,
        phone: phone
        }
        fetch('/api/employees', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                initialize()
            }) 
        inputCleaner('name')
        inputCleaner('email')
        inputCleaner('address')
        inputCleaner('phone')
    }else(console.log('invalid form'))
}

const validateForm = (name, email, address, phone) =>{
    if(validateName(name)){
        if(validateEmail(email)){
            if(validateAddress(address)){
                if(validatePhone(phone)){
                    return true
                }else{
                    inputErrorMessage('phoneError', 'phone')
                    return false
                }
            }else{
                inputErrorMessage('addressError', 'address')
                return false
            }
        }else{
            inputErrorMessage('emailError', 'e-mail')
            return false
        }
    }else{
        inputErrorMessage('nameError', 'name')
        return false
    }
}

const validateName = (name) =>{
    if(name.length > 3 && name.length < 15 && name !== ''){
        return true
    }else{
        return false
    }
}

const validateEmail = (email) =>{
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

const validateAddress = (address) =>{
    if(address !== ''){
        return true
    }else{
        return false
    }
}

const validatePhone = (phone) =>{
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(phone)
}

const inputErrorMessage = (containerId, inputElement) =>{
    const container = document.getElementById(containerId)
    container.innerText = `Invalid ${inputElement}`
}

const searchEmployee = () =>{
    let input = document.getElementById('search').value
    fetch(`/api/employees/${input}`)
        .then(res => res.json())
        .then(res=>console.log(res))
}

const filterById = () =>{
    const filter = document.getElementById('filter').value
    fetch(`/api/employees/${filter}`)
        .then(res => res.json())
        .then(res => {
            if(typeof res === 'object'){
                inputCleaner('filter')
                cleanTable()
                oneObjectTable(res)
            }else{
                filterError(res)
            }
        })

}

const inputCleaner = (inputId) =>{
    const input = document.getElementById(inputId)
    input.value = ''
}

const filterError = (text) =>{
    const container = document.getElementById('formFilter')
    const content = document.createElement('p')
    content.innerText = text
    container.appendChild(content)
}

const openEdit = (index) =>{
    fetch(`/api/employees/${index}`)
        .then(res => res.json())
        .then(res => {
            fillEdit(res)
        })
}

const fillEdit = (employee) =>{
    fillEditInput('editName', employee.name)
    fillEditInput('editEmail', employee.email)
    fillEditInput('editAddress', employee.address)
    fillEditInput('editPhone', employee.phone)
    const idContainer = document.getElementById('editId')
    idContainer.innerText = employee.id
}

const fillEditInput = (inputId, content) =>{
    const input = document.getElementById(inputId)
    input.value = content
}

const editEmployee = () =>{
    let name = document.getElementById('editName').value
    let email = document.getElementById('editEmail').value
    let address = document.getElementById('editAddress').value
    let phone = document.getElementById('editPhone').value
    let id = document.getElementById('editId').innerText
    if(validateForm(name, email, address, phone)){
        let employee = {
        name: name,
        email: email,
        address: address,
        phone: phone,
        id: id
        }
        fetch('/api/employees', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                initialize()
            })
        inputCleaner('editName')
        inputCleaner('editEmail')
        inputCleaner('editAddress')
        inputCleaner('editPhone')
    }else(console.log('invalid form'))
}

const deleteEmployee = (id) =>{
    fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            initialize()
        })
}