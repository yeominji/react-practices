import fs from 'fs';
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateOrder = Object.assign({}, state.order, {receive: '부산시 해운대구 우동'});
updateOrder.payment.method="Mobile";

console.log(state.order, updateOrder, updateOrder === state.order);