function arraySort() {
    let array = [];
    for (let i = 0; i < 1e6; i++) {
        array.push(Math.random());
    }
    array.sort();
    return array;
}

module.exports = arraySort;