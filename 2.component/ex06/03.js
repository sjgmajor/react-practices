import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = Object.assign({}, state.order, {
    eceive: "강남구 서초구..."
});