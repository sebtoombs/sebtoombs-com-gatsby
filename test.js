/*const props = {
    color: 'color',
    bg:'background-color',
    border:'border-color'
}*/

const props = ['color','bg', 'border'];

let combos = [];

makeCombos(props, 3);

console.log(combos)

/*Object.keys(props).forEach((key) => {
    const val = props[key];


});*/

function makeCombosRange(array, l) {
    for(let i=0; i<l; i++) {
        makeCombos(array, i)
    }
}

function makeCombos(array, k) {
    for(let i =0; i<array.length; i++) {
        for(let j=0; j<k; j++) {
            if(i===j) continue;
            combos.push([array[i], array[j]])
        }
    }
}
