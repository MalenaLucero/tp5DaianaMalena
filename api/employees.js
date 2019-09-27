const uniqid = require('uniqid')

const employees = [
    {name: 'Daichi Sawamura', email: 'dsawamura@karasuno.com', address: 'Miyagi 1234', phone: 3118176845, id: '1'},
    {name: 'Kei Tsukishima', email: 'ktsukishima@karasuno.com', address: 'Spiker 1234', phone: 2716188323, id: '2'},
    {name: 'Tetsurou Kurou', email: 'tkurou@nekoma.com', address: 'Captain 1234', phone: 1718187767, id: '3'},
    {name: 'Touru Oikawa', email: 'toikawa@aobajosai.com', address: 'Captain 6789', phone: 2018184345, id: '4'},
    {name: 'Hajime Iwaizumi', email: 'hiwaizumi@aobajosai.com', address: 'Spiker 6778', phone: 1018179334, id: '5'},
    {name: 'Koutarou Bokuto', email: 'kbokuto@fukurodani.com', address: 'Wing 0987', phone: 2018185345, id: '6'},
    {name: 'Keiji Akaashi', email: 'kakaashi@fukurodani.com', address: 'Setter 9876', phone: 5017182367, id: '7'},
]

const getEmployee = (req, res, next) =>{
    res.json({employees})
    next()
}

const postEmployee = (req, res, next) =>{
    let data = req.body
    data.id = `${uniqid()}`
    employees.push(data)
    res.status(201).json(`recibido con el id ${data.id}`)
    next()
}

const getEmployeeById = (req, res, next) =>{
    let employee = employees.find((e) => e.id === req.params.id)
    if(employee ){
        res.send(employee)
    }else{
        res.status(404).json('no encontramos al usuario')
    }
    next()
}

const patchEmployee = (req, res, next) =>{
    let newEmployee = req.body
    let oldEmployee = employees.find(e => e.id === req.body.id)
    let oldIndex = employees.findIndex(e => e.id === req.body.id)
    let editEmployee = {...oldEmployee, ...newEmployee}
    employees.splice(oldIndex, 1)
    employees.push(editEmployee)
    res.json(`Se edito el empleado con id ${req.body.id}`)
    next()
}

const deleteEmployee = (req, res, next) =>{
    let employee = employees.find(e=>e.id === req.params.id)
    let index = employees.findIndex(e=>e.id === req.params.id)
    employees.splice(index, 1)
    res.json(`Se elimino el empleado ${employee.name} con id ${req.params.id}`)
    next()
}

module.exports = { getEmployee, postEmployee, getEmployeeById , patchEmployee, deleteEmployee }