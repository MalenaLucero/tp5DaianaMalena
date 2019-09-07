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