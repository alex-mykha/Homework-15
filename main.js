let hours = prompt("Введите количество часов")
let hoursInt = parseInt(hours)
if (!isNaN(hoursInt)&&  hoursInt >= 0) {
    let seconds = hoursInt*3600
    alert (`Количество секунд в ${hoursInt} часах:${seconds}`) 
}
else {
    alert("Ошибка")
}

