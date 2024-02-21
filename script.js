document.body.style.backgroundColor = "rgb(81, 153, 566)";
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelect = document.getElementById('temp_diff');
    const valueTemp = tempSelect.options[tempSelect.selectedIndex].value;

    const celToFah = (cels) => {
        let fahrenheit = Math.round((cels * 9 / 5) + 32);
        return fahrenheit;
    }
    const FahToCel = (fah) => {
    let celsius = Math.round((fah - 32) * 5 / 9);
    return celsius;
   }

    let result;
    if(valueTemp == "cel"){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }else{
        result = FahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`;
    }

}