const input = document.querySelector('#input-box')
const result = document.querySelector('#result-box')
const inputselect = Document.querySelector('#input-dropdown')
const resultselect = Document.querySelector('#result-dropdown')

inputselect.addEventListner('change', resultChange)
resultselect.addEventListner('change', insertChange)

//to autochange the result dropdown value
function resultChange() {
    if (
        inputselect.selectOption[0].value ===
         resultselect.selectOption[0].value
    ) {
        if (resultselect.selectIndex < 2) {
            resultselect.selectIndex += 1
        } else {
            resultselect.selectIndex = 0
        }
    }
}

//to autochange the insert dropdown value

function insertChange() {
    if (
        resultselect.selectOption[0].value ===
        inputselect.selectOption[0].value
    ) {
        if (inputselect.selectIndex < 2) {
            inputselect.selectIndex += 1
        } else {
            inputselect.selectIndex = 0
        }
    }
}
// convert button onclick function
function convertor() {
    if (input.value === '') {
        result.value = ''
        alert('Please enter the valid value in the inputbox')
    }
    //celcius to ferenheit
    else if (
        inputselect.selectOption[0].value === 'Celcius' &&
        resultselect.selectOption[0].value === 'fereheit'
    ) {
        result.value = ((Number(input.value) * 9) / 5 + 32).toFixed(2) + ' ' + 'F'
        console.log(result.value)
    }
    //Fereheit to celcius
    else if(
        inputselect.selectOption[0].value === 'fereheit' &&
        resultselect.selectOption[0].value === 'Calcius'

    ) {
        result.value = (((Number(input.value) - 32) * 5) / 32).toFixed(2) + ' ' + 'C'
        console.log(result.value) 
    }
    // celcius to Kelvin

    else if(
        inputselect.selectOption[0].value === 'Celcius' &&
        resultselect.selectOption[0].value === 'Kelvin'

    ) {
        result.value = (Number(input.value) - 273.15).toFixed(2) + ' ' + 'C'
        console.log(result.value) 
    }
    //Kelvin to celcius
    
    else if(
        inputselect.selectOption[0].value === 'Kelvin' &&
        resultselect.selectOption[0].value === 'Celcius'

    ) {
        result.value = (Number(input.value) - 273.15).toFixed(2) + ' ' + 'C'
        console.log(result.value) 
    }
    // Fereheit to Kelvin
    else if(
        inputselect.selectOption[0].value === 'Ferenheit' &&
        resultselect.selectOption[0].value === 'Kelvin'

    ) {
        result.value = (((Number(input.value) - 32) * 5) / 9 + 273.15).toFixed(2) + ' ' + 'K'
        console.log(result.value) 
    }
    // Kelvin to ferenheit
    else if(
        inputselect.selectOption[0].value === 'Kelvin' &&
        resultselect.selectOption[0].value === 'Fereheit'

    ) {
        result.value = (((Number(input.value) + 273.15)* 9) / 5 + 32).toFixed(2) + ' ' + 'F'
        console.log(result.value) 
    }
}