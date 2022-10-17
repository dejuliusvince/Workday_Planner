//Step 1: put current date on the webapge using moment() 
//Step 2: compare the current hour with time-blocks
//Step 3: Translate time-blocks to military time
//Step 4: use the css classes for present, past or future

//Step 4: grab the textarea value and store it in local storage

const hoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

let currentHour = moment().hour()

let currentDay = $("#currentDay")
let systemTime = moment().format("dddd, MMMM Do")

currentDay.text(systemTime)

const displayTimeBlockColors = () => {
    for (let i = 0; i < hoursArr.length; i++) {

        let currentTextEl = $("#" + hoursArr[i])

        if (currentHour > hoursArr[i]) {

            currentTextEl.addClass("past")
        }
        else if (currentHour === hoursArr[i]) {
            currentTextEl.addClass("present")
        }
        else {
            currentTextEl.addClass("future")
        }
    }
}

displayTimeBlockColors()

$(document).ready(() => {

    $("#9").val(localStorage.getItem('9am'))
    

    $("#9save").on('click', () => {
        localStorage.setItem("9am", $('#9').val())
    })
    
    $("#9").val(localStorage.getItem('9am'))
    

    $("#9save").on('click', () => {
        localStorage.setItem("9am", $('#9').val())
    })
})