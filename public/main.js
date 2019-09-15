const initialize = () =>{
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
        name: name,
        email: email,
        address: address,
        phone: phone
    }
    console.log(employee)
    fetch('/api/employees', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employee)
    })
        .then(res=>res.json())
        .then(res=>console.log(res))
}

const generalInputValidation = (input) =>{
    let isValid = false
    switch(input){
        case '':
            isValid = false
            break
    }
}

const searchEmployee = () =>{
    let input = document.getElementById('search').value
    fetch(`/api/employees/${input}`)
        .then(res => res.json())
        .then(res=>console.log(res))
}



// modal
let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click',function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click',function(){
    modal.styles.display = 'none';
});


window.addEventListener('click',function(){
if(e.target == flex){
    modal.style.display = 'none';
}
});

