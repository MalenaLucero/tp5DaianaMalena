const employees = [
    {name: 'Daichi Sawamura', email: 'dsawamura@karasuno.com', address: 'Miyagi 1234', phone: 31181768, id: 1},
    {name: 'Asahi Azumane', email: 'aazumane@karasuno.com', address: 'Spiker 1234', phone: 10181847, id: 2},
    {name: 'Yuu Nishinoya', email: 'ynishinoya@karasuno.com', address: 'Libero 1234', phone: 10171593, id: 3},
    {name: 'Kei Tsukishima', email: 'ktsukishima@karasuno.com', address: 'Spiker 1234', phone: 27161883, id: 4},
    {name: 'Tetsurou Kurou', email: 'tkurou@nekoma.com', address: 'Captain 1234', phone: 17181877, id: 5},
    {name: 'Morisuke Yaku', email: 'myaku@nekoma.com', address: 'Libero 3456', phone:  18081652, id: 6},
    {name: 'Touru Oikawa', email: 'toikawa@aobajosai.com', address: 'Captain 6789', phone: 20181843, id: 7},
    {name: 'Hajime Iwaizumi', email: 'hiwaizumi@aobajosai.com', address: 'Spiker 6778', phone: 10181793, id: 8},
    {name: 'Koutarou Bokuto', email: 'kbokuto@fukurodani.com', address: 'Wing 0987', phone: 20181853, id: 9},
    {name: 'Keiji Akaashi', email: 'kakaashi@fukurodani.com', address: 'Setter 9876', phone: 50171823, id: 10},
    {name: 'Yuuji Terushima', email: 'yterushima@jozenji.com', address: 'Spiker 7654', phone: 17181772, id: 11},
]

const handler = (req, res, next) =>{
    console.log('Pidiendo usuarios')
    res.json({employees})
    next()
}

module.exports = handler