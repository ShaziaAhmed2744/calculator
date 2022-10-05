function func() {
    var output = document.querySelector('#outputl')
    let input1 = Number(document.querySelector('#input1').value)
    let input2 = +document.querySelector('#input2').value
    output.value = input1 + input2;
}
function subt() {
    var output = document.querySelector('#outputl')
    let input1 = Number(document.querySelector('#input1').value)
    let input2 = +document.querySelector('#input2').value
    output.value = input1 - input2;
}
function mult() {
    var output = document.querySelector('#outputl')
    let input1 = Number(document.querySelector('#input1').value)
    let input2 = +document.querySelector('#input2').value
    output.value = input1 * input2;
}
function div() {
    var output = document.querySelector('#outputl')
    let input1 = Number(document.querySelector('#input1').value)
    let input2 = +document.querySelector('#input2').value
    output.value = input1 / input2;
}
