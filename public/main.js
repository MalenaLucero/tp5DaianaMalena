const initialize = () =>{
    fetch('/api/employees')
        .then(res => res.json())
        .then(res => fillTable(res.employees))
}

const fillTable = (employees) =>{
    const table = document.getElementById('employeeTable')
    employees.forEach(e=>{
        const tr = document.createElement('tr')
        tr.appendChild(createTd(e.name))
        tr.appendChild(createTd(e.email))
        tr.appendChild(createTd(e.address))
        tr.appendChild(createTd(e.phone))
        table.appendChild(tr)
    })
}

const createTd = (text) =>{
    const td = document.createElement('td')
    td.innerText = text
    return td
}

const sendInfo = () =>{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let phone = document.getElementById('phone').value
    let employee = {
        name: `${name}`,
        email: `${email}`,
        address: `${address}`,
        phone: phone
    }
    //no anda esta promesa
    /*fetch('/api/employees', {
        method: 'POST',
        body: JSON.stringify(employee),
        headers: {'Content-Type': 'application/json'}
    })
        .then(res=> res.json())
        .then(res=>console.log(res))*/
}

const generalInputValidation = (input) =>{
    let isValid = false
    switch(input){
        case '':
            isValid = false
            break
    }
}